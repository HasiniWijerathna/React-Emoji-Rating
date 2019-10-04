import React, { Component } from 'react'
import PropTypes from 'prop-types'
import RatingComponent from './components/RatingComponent'

export default class EmojiRating extends Component {
  static propTypes = {
    variant: PropTypes.string,
    onChange: PropTypes.func
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div >
       <RatingComponent  
          variant={this.props.variant}
          onChange={this.props.onChange} />
      </div>
    )
  }
}
