import React from 'react';
import { Component } from "react";
import Tab from '../components/Tab';

class Room extends Component {

  render() {
    let tabs = [<a href="/">tab</a>];
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