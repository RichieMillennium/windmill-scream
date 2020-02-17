# windmill-scream

> A collection of Tailwind CSS / Emotion / React components

[![NPM](https://img.shields.io/npm/v/windmill-scream.svg)](https://www.npmjs.com/package/windmill-scream) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save windmill-scream

or

yarn install windmill-scream
```

## Usage

```tsx
import React, { FunctionComponent } from 'react'
import './styles/tailwind.css';

import {
    Button,
    TextInput,
    SelectInput,
    SelectOption,
    Checkbox,
    RadioButton
} from 'windmill-scream';

const Example: FunctionComponent = () => {
    return (
        <Button onClick={() => console.log('thanks!')}>Click me</Button>
    );
}
```

## API

All components that have a `color` or `bgColor` prop can take a string value
from the union type `Color`.

### Button

  *props:*

  - color - optional string
  - slim - optional boolean - uses slimmmer styling
  - transparent - optional boolean - uses a transparent background
  - className - optional string
  - additional button element props (disabled, name, onClick, etc)

### Checkbox

  *props:*

  - title - optional string - text contents of the label
  - color - optional string - the foreground color
  - bgColor - optional string - the background color
  - className - optional string
  - additional input element props (checked, disabled, name, value, etc)

### Header

  *props:*

  - title - required - either a string or an element containing the application title
  - children - one or more `HeaderGroup` items

### HeaderGroup

  *props:*

  - floatRight - optional boolean - the group floats to the right side of the `Header`
  - children - one or more `HeaderItem` items
  - additional unordered list props

### HeaderItem

  *props:*

  - children - any elements
  - additional list item props

### RadioButton

  *props:*

  - title - optional string - text contents of the label
  - color - optional string - the foreground color
  - bgColor - optional string - the background color
  - className - optional string
  - additional input element props (checked, disabled, name, value, etc)

### SelectInput

  *props:*

  - title - optional string - text contents of the label
  - color - optional string - the foreground color
  - bgColor - optional string - the background color
  - className - optional string
  - children - one or more `SelectOption` items
  - additional select element props (name, disabled, etc)

### SelectOption

  *props:*

  - className - optional string
  - children - string content
  - additional option element props (selected, value, etc)

## License

MIT © [RichieMillennium](https://github.com/RichieMillennium)
