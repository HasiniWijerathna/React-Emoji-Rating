# react-emoji-rating

A simple emoji rating component

 [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-emoji-rating
```
Or ```yarn```

```bash
yarn add react-emoji-rating

```
## Emoji categories

1. smileys
2. emojiPeople
3. emoticons
4. funky
5. classic (defalut)
6. blobs

## Basic Usage

```jsx
import React, { Component } from 'react'

import EmojiRating from 'react-emoji-rating'

export default class App extends Component {
 
  render () {
    return (
      <div>
        <EmojiRating 
          variant='classic'
          onChange={this.handleRating} />
      </div>
    )
  }
}
```

## Options

| Property          | Type           | Description                              |
| ------------------|:--------------:| ----------------------------------------:|
| variant           | string         |Emoji category to be used                |
| onChange          | func           |Called when the slider is moved with the silder value|


## Example

Example code for this simple component is available in the /example directory.


## License

MIT © [HasiniWijerathna](https://github.com/HasiniWijerathna)
