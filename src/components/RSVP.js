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

  onSubmitTemp = (data) => {
    console.log(data);
    this.props.history.push('/thankyou', { attending: data.attending });
  };

  render() {
    return (
      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-container--left"><RSVPForm onSubmit={this.onSubmitTemp} /></div>
          <div className="form-container--right"></div>
        </div>
      </div>
    );
  }
};
