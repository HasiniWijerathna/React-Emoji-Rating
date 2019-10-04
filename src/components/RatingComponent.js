import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./styles.css";

//classic
import classicAngry from "./assets/classic/angry.svg";
import classicMad from "./assets/classic/mad.svg";
import classicMadAngry from "./assets/classic/madAngry.svg";
import classicThinking from "./assets/classic/thinking.svg";
import classicHappy from "./assets/classic/happy.svg";
import classicWow from "./assets/classic/wow.svg";
import classicLove from "./assets/classic/love.svg";

//smileys
import angry from "./assets/smileys/angry.svg";
import mad from "./assets/smileys/mad.svg";
import madAngry from "./assets/smileys/madAngry.svg";
import thinking from "./assets/smileys/thinking.svg";
import happy from "./assets/smileys/happy.svg";
import wow from "./assets/smileys/wow.svg";
import love from "./assets/smileys/love.svg";

// emoji people
import ePeopleAngry from "./assets/emojiPeople/angry.svg";
import ePeopleMad from "./assets/emojiPeople/mad.svg";
import ePeopleMadAngry from "./assets/emojiPeople/madAngry.svg";
import ePeopleThinking from "./assets/emojiPeople/thinking.svg";
import ePeopleHappy from "./assets/emojiPeople/happy.svg";
import ePeopleWow from "./assets/emojiPeople/wow.svg";
import ePeopleLove from "./assets/emojiPeople/love.svg";

// emoticons
import emoticonsAngry from "./assets/emoticons/angry.svg";
import emoticonsMad from "./assets/emoticons/mad.svg";
import emoticonsMadAngry from "./assets/emoticons/madAngry.svg";
import emoticonsThinking from "./assets/emoticons/thinking.svg";
import emoticonsHappy from "./assets/emoticons/happy.svg";
import emoticonsWow from "./assets/emoticons/wow.svg";
import emoticonsLove from "./assets/emoticons/love.svg";
import emiconConfuced from "./assets/emoticons/emiconConfuced.svg";

// funky
import funckyAngry from "./assets/funky/angry.svg";
import funckyMad from "./assets/funky/mad.svg";
import funckyMadAngry from "./assets/funky/madAngry.svg";
import funckyThinking from "./assets/funky/thinking.svg";
import funckyHappy from "./assets/funky/happy.svg";
import funckyWow from "./assets/funky/wow.svg";
import funckyLove from "./assets/funky/love.svg";

// blobs
import blobAngry from "./assets/blobs/blobAngry.svg";
import blobMad from "./assets/blobs/blobMad.svg";
import blobMadAngry from "./assets/blobs/blobMadAngry.svg";
import blobThinking from "./assets/blobs/blobThinking.svg";
import blobHappy from "./assets/blobs/blobHappy.svg";
import blobWow from "./assets/blobs/blobWow.svg";
import blobLove from "./assets/blobs/blobLove.svg";


/**
* Represents the rating component functionalities
*/
class RatingComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emojis: ["😡", "😠", "😤", "😐", "😑", "😃", "😍"],
      emojiIcons: [angry, mad, madAngry, thinking, happy, wow, love],
      rangeValue: "3",
      emojiLabel: [
        "Angry",
        "Mad",
        "Whatever",
        "Confused",
        " Happy",
        "Wow",
        "Love"
      ]
    };
  }

  /**
   * Triggers when the component is mounted
   */
  componentDidMount() {
    let emojiIcons = this.fetchEmojiCategory(this.props.variant);
    this.setState({
      emojiIcons
    });
  }

  /**
   * Fetches the emojis according to the category
   * @param  {String} category Emoji category 
   */
  fetchEmojiCategory = category => {
    let emojiIcons = [];
    switch (category) {
      case "smileys":
        emojiIcons = [angry, mad, madAngry, thinking, happy, wow, love];
        break;
      case "emojiPeople":
        emojiIcons = [
          ePeopleAngry,
          ePeopleMad,
          ePeopleMadAngry,
          ePeopleThinking,
          ePeopleHappy,
          ePeopleWow,
          ePeopleLove
        ];
        break;
      case "emoticons":
        emojiIcons = [
          emoticonsAngry,
          emoticonsMadAngry,
          emoticonsMad,
          emiconConfuced,
          emoticonsHappy,
          emoticonsWow,
          emoticonsLove
        ];
        break;
      case "funky":
        emojiIcons = [
          funckyAngry,
          funckyMad,
          funckyMadAngry,
          funckyThinking,
          funckyHappy,
          funckyWow,
          funckyLove
        ];
        break;
      case "classic":
        emojiIcons = [
          classicAngry,
          classicMadAngry,
          classicThinking,
          classicMad,
          classicHappy,
          classicWow,
          classicLove
        ];
        break;
      case "blobs":
        emojiIcons = [
          blobAngry,
          blobMad,
          blobMadAngry,
          blobThinking,
          blobHappy,
          blobWow,
          blobLove
        ];
        break;
      default:
        emojiIcons = [angry, mad, madAngry, thinking, happy, wow, love];
    }

    return emojiIcons;
  };

  /**
   * Updates the slider range
   * @param  {String} event Changer event of the emoji slider
   */
  updateRange = (event) => {
    this.setState({
      rangeValue: event.target.value
    });

    this.props.onChange(this.state.emojiLabel[this.state.rangeValue])
  }

  /**
  * Describes the elements on the rating component
  * @return {String} HTML elements
  */
  render() {
    const { emojis, rangeValue } = this.state;
    return (
      <div className={styles.rateContainer}>
        <div className={styles.emojiSliderContainer}>
          <div className={styles.tooltip}>
            {" "}
            <img
              src={this.state.emojiIcons[this.state.rangeValue]}
              style={grow}
            />
            <span className={styles.tooltiptext}>{this.state.emojiLabel[this.state.rangeValue]}</span>
          </div>
          <input
            id="sliderId"
            className={styles.inputR}
            name="sliderName"
            type="range"
            min="0"
            max={emojis.length - 1}
            defaultValue={rangeValue}
            onChange={this.updateRange}
            style={styleInput}
          />
          <div className="label" style={{ textAlign: "center" }}></div>
        </div>
      </div>
    );
  }
}

const active = "#dbdbdb";
const progress = (5 / 10) * 100 + "%";
const styleInput = {
  background: active
};
let grow = {
  width: "45px",
  height: "50%"
};

export default RatingComponent;

// Accepting Prop types 
RatingComponent.propTypes = {
  variant: PropTypes.string,
  onChange: PropTypes.func,
};

// Setting default props
RatingComponent.defaultProps = {
  variant: "smileys",
  onChange: () => console.log('Emoji changed'),

};
