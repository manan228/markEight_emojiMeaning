import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "🤔": "thinking face",
  "😂": "face with tears of joy",
  "😉": "winking face",
  "😘": "face blowing a kiss"
};

var emojiObject = Object.keys(emojiDictionary);

export default function App() {
  var [userMeaning, setUserMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;

    var emojiMeaning = emojiDictionary[userInput];

    if (emojiMeaning === undefined) {
      emojiMeaning = "We dont have this emoji in our database";
    }

    setUserMeaning(emojiMeaning);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];

    setUserMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>insde outt</h1>
      <input onChange={onChangeHandler}></input>
      <div>{userMeaning}</div>
      <h3>emoji we know</h3>
      {emojiObject.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
