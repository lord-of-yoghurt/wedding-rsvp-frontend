import React, { Component } from 'react';
import axios from 'axios';

import RSVPForm from './RSVPForm';

export default class RSVP extends Component {
  onSubmit = (data) => {
    axios.post(`${process.env.BASE_URL}responses`, data)
      .then((res) => {
        console.log(res.data);
        this.props.history.push('/');
      })
      .catch((e) => console.log(e))
  };

  render() {
    return (
      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-container--left"><RSVPForm onSubmit={this.onSubmit} /></div>
          <div className="form-container--right"></div>
        </div>
      </div>
    );
  }
};
