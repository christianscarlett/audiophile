import {Component} from 'react';
import React from 'react';

class Chat extends Component {

  render() {
    return (
      <div class='container-fluid chatbox'>
        <div class='messages'>

        </div>
        <div class='message-input'>
          <button class='btn btn-danger'>Send</button>
          <input type='text'></input>
        </div>
      </div>
    );
  }
}

export default Chat;