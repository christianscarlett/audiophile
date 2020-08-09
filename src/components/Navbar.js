import React, { Component } from 'react';

class AudiophileNavbar extends Component {
  render() {
    return (
      <nav class="navbar justify-content-between">
        <a class="navbar-brand" href="#/">audiophile</a>
        <div>
          <button class='btn btn-secondary ml-1'>Join Room</button>
          <button class='btn btn-secondary ml-1'>Create Room</button>
        </div>
      </nav>
    );
  }
}

export default AudiophileNavbar;