import React from 'react';
import { Component } from "react";

import Player from './Player';
import Queue from './Queue';
import Chat from './Chat';

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      srcPath: this.props.srcPath
    }
    this.bang = require("../assets/bangarang.mp3");
    this.alone = require("../assets/alonewithyou.mp3");
  }

  // componentWillReceiveProps(newProps) {
  //   this.setState(Object.apply({}, this.state, newProps));
  // }

  render() {
    console.log('render', this.props.srcPath);
    return (
      <div class='container-fluid tab'>
        <div class="tab-left">
          <Player audioSource={this.props.srcPath === '../assets/bangarang.mp3' ? this.bang : this.alone} />
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