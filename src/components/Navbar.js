import React, { Component } from 'react';

class AudiophileNavbar extends Component {
  render() {
    return (
      <nav class="navbar justify-content-between">
        <a class="navbar-brand" href="#/">audiophile</a>
        <div>
          <button class='btn btn-secondary ml-1'>join room</button>
          <button class='btn btn-secondary ml-1'>create room</button>
        </div>
      </nav>
    );
  }
}

export default AudiophileNavbar;