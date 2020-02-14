# windmill-scream

> A collection of Tailwind CSS / Emotion / React components

[![NPM](https://img.shields.io/npm/v/windmill-scream.svg)](https://www.npmjs.com/package/windmill-scream) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save windmill-scream
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

## License

MIT © [RichieMillennium](https://github.com/RichieMillennium)
