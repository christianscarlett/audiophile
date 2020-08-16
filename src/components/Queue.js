import React from 'react';
import { Component } from 'react';

class Queue extends Component {
  
  render() {
    let key=0;
    let songs = [<a href='/' key={key++}>asdf</a>];
    return (
      <div class='container-fluid queue'>
        <h4>Up Next</h4>
        {songs}
      </div>
    );
  }
}

export default Queue;