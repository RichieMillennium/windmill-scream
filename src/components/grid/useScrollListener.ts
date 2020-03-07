import { useRef, useLayoutEffect, useEffect, MutableRefObject } from 'react';

const isBrowser = typeof window !== `undefined`;
const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

export interface ScrollPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ScrollEvent {
  currentPosition: ScrollPosition;
  previousPosition: ScrollPosition;
  nativeEvent: Event;
}

const getScrollPosition: (
  scrollingElement?: MutableRefObject<HTMLElement | null>
) => ScrollPosition = scrollingElement => {
  if (!isBrowser) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }

  const target = scrollingElement ? scrollingElement.current : document.body;
  const position = target?.getBoundingClientRect() || {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  };

  return {
    x: position.left,
    y: position.top,
    width: position.width,
    height: position.height
  };
};

export function useScrollListener(
  scrollListener: (event: ScrollEvent) => void,
  containerElement: HTMLElement | null,
  scrollingElement: MutableRefObject<HTMLElement | null> | undefined,
  externalDependencies: any[],
  throttleAmount: number = 0
) {
  const position = useRef(getScrollPosition());

  let throttleTimeout: number | null = null;

  const notifyListener = (nativeEvent: Event) => {
    const currentPosition = getScrollPosition(scrollingElement);
    if (
      position.current.y !== currentPosition.y ||
      position.current.x !== currentPosition.x
    ) {
      scrollListener({
        previousPosition: position.current,
        currentPosition,
        nativeEvent
      });
    }
    position.current = currentPosition;
    throttleTimeout = null;
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleScroll = (event: Event) => {
      if (throttleAmount && throttleTimeout === null) {
        throttleTimeout = window.setTimeout(notifyListener, throttleAmount);
        notifyListener(event);
      }
    };

    if (containerElement) {
      containerElement.addEventListener('scroll', handleScroll, {
        passive: true
      });
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, externalDependencies);
}
