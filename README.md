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

![smileys](https://user-images.githubusercontent.com/20472144/66248133-b10a7600-e755-11e9-91ff-24f278e588f8.gif)

2. emojiPeople

![emo people](https://user-images.githubusercontent.com/20472144/66248065-4a855800-e755-11e9-806c-ca4dcd7da7ae.gif)

3. emoticons

![emoticons](https://user-images.githubusercontent.com/20472144/66248094-7274bb80-e755-11e9-86eb-e8ea377f5dda.gif)

4. funky

![funky](https://user-images.githubusercontent.com/20472144/66248125-8d473000-e755-11e9-9209-ae6ea96c00ac.gif)

5. classic (defalut)

![classic](https://user-images.githubusercontent.com/20472144/66248061-1f026d80-e755-11e9-8a84-6068cd5b7efc.gif)

6. blobs 

  ![blobs](https://user-images.githubusercontent.com/20472144/66248017-9b488100-e754-11e9-99dd-15264c1c0e27.gif)


    

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
