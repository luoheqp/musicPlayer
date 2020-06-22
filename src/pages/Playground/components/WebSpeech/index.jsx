import React from "react";
import { WebSpeechContent } from "./style";

const WebSpeech = (props) => {
  try {
    var speech = new SpeechSynthesisUtterance();
    var recognition = new SpeechRecognition();
  } catch (e) {
    error.innerHTML = "Web Speech API not supported in this device.";
    error.classList.remove("close");
  }

  const speak = () => {
    speech.text = textToSpeech.value;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    alert(window.speechSynthesis);
    window.speechSynthesis.speak(speech);
  };

  const tapToSpeak = () => {
    recognition.onstart = function () {};

    recognition.onresult = function (event) {
      const curr = event.resultIndex;
      const transcript = event.results[curr][0].transcript;
      speechToText.value = transcript;
    };

    recognition.onerror = function (ev) {
      console.error(ev);
    };

    recognition.start();
  };

  return (
    <WebSpeechContent>
      <input type="button" value="speak" onClick={tapToSpeak} />
    </WebSpeechContent>
  );
};
