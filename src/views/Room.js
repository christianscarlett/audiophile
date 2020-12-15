import React from 'react';
import { Component } from "react";
import Tab from '../components/Tab';

class Room extends Component {

  constructor(props) {
    super(props);
    this.state = {
      srcPath: "../assets/bangarang.mp3"
    };
  }

  /**
   * @param {string} tab 
   */
  changeTab(path) {
    console.log('changetab', path);
    this.setState({srcPath: path});
  }

  render() {
    console.log('room render', this.state.srcPath);
    let key = 0;
    let tabs = ['../assets/bangarang.mp3', '../assets/alonewithyou.mp3'].map(path => <button type="button" class="btn btn-primary" key={key++} onClick={() => this.changeTab(path)}>tab</button>);
    return (
      <div class='container-fluid room'>
        <div class='tabs container'>
          <h4>tabs</h4>
          {tabs}
        </div>
        <div class='container-fluid active-tab'>
          <Tab srcPath={this.state.srcPath} />
        </div>
      </div>
    );
  }
}

export default Room;