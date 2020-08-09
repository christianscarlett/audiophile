import React from 'react';
import { Component } from 'react';

class Queue extends Component {
  
  render() {
    let songs = [<a href='/'>asdf</a>];
    return (
      <div class='container-fluid queue'>
        <h4>Up Next</h4>
        {songs}
      </div>
    );
  }
}

export default Queue;