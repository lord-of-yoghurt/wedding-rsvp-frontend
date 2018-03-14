import React, { Component } from 'react';
import axios from 'axios';

import RSVPForm from './RSVPForm';

export default class RSVP extends Component {
  onSubmit = (data) => {
    axios.post('http://localhost:3000/responses', data)
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
  };

  render() {
    return (
      <div>
        <RSVPForm onSubmit={this.onSubmit} />
      </div>
    );
  }
};
