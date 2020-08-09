import React from 'react';
import { Component } from "react";

import Player from './Player';
import Queue from './Queue';
import Chat from './Chat';

class Tab extends Component {

  render() {
    return (
      <div class='container-fluid tab'>
        <div class="tab-left">
          <Player audioSource={require("../assets/bangarang.mp3")} />
          <Player audioSource={require("../assets/bangarang.mp3")} />
          <Queue />
        </div>
        <div class="tab-right">
          <Chat />
        </div>
      </div>
    );
  }
}

export default Tab;