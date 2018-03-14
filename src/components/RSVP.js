import React, { Component } from 'react';
import axios from 'axios';

import RSVPForm from './RSVPForm';

const BASE_URL = process.env.BASE_URL // || 'http://localhost:3000';

export default class RSVP extends Component {
  onSubmit = (data) => {
    axios.post(`${BASE_URL}/responses`, data)
      .then((res) => {
        console.log(res.data);
        this.props.history.push('/');
      })
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
