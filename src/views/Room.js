import React from 'react';
import { Component } from "react";
import Tab from '../components/Tab';

class Room extends Component {

  render() {
    let key = 0;
    let tabs = [<a href="/" key={key++}>tab</a>];
    return (
      <div class='container-fluid room'>
        <div class='tabs container'>
          <h4>tabs</h4>
          {tabs}
        </div>
        <div class='container-fluid active-tab'>
          <Tab />
        </div>
      </div>
    );
  }
}

export default Room;