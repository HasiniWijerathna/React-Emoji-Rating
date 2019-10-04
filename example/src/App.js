import React, { Component } from 'react'

import EmojiRating from 'react-emoji-rating'

export default class App extends Component {
  handleRating = (rating) => {
    console.log('RATING -> ' + rating)
  }

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
