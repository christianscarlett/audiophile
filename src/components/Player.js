import React from 'react';
import { Component } from "react";

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioSource: props.audioSource
    }
  }
  componentDidMount() {
    
    const audioContext = new AudioContext();
    // get the audio element
    const audioElement = document.querySelector('audio');

    // pass it into the audio context
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);
    const gainNode = audioContext.createGain();
    track.connect(gainNode).connect(audioContext.destination);
    const volumeControl = document.querySelector("#volume");
    volumeControl.addEventListener('input', function() {
      gainNode.gain.value = this.value;
    }, false);

    // select our play button
    const playButton = document.querySelector('#playPause');
    playButton.addEventListener('click', function() {
      // check if context is in suspended state (autoplay policy)
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }
      // play or pause track depending on state
      if (this.dataset.playing === 'false') {
        audioElement.play();
        this.dataset.playing = 'true';
      } else if (this.dataset.playing === 'true') {
        console.log("trying to pause");
        audioElement.pause();
        this.dataset.playing = 'false';
      }
    }, false);

  }

  render() {
    return (
      <div class="container-fluid player">
        <audio src={this.state.audioSource} />
        <button type="button" id="playPause"class="btn btn-primary" data-playing="false" role="switch" aria-checked="false" >
          Play/Pause
        </button>
        <input type="range" id="volume" min="-10" max="10" step="0.01" ></input>
      </div>
    );
  }
}

export default Player;