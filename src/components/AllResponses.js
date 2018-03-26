import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import ResponseTableHead from './ResponseTableHead';
import Response from './Response';

export default class AllResponses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: '',
      responses: []
    };
  };

  componentDidMount() {
    this.getResponses();
  }

  getResponses() {
    const re = /\?key=(.*)/,
          key = re.exec(this.props.location.search)[1],
          URL = `${process.env.BASE_URL}responses?key=${key}`;

    axios.get(URL)
      .then((res) => {
        this.setState(() => {
          if (res.data.error) return { error: res.data.error };

          return { responses: res.data.responses };
        });
      })
      .catch((e) => console.log(e));
  };

  renderTable() {
    if (this.state.responses.length === 0) return null;

    return (
      <table className="response-table">
        <ResponseTableHead />
        <tbody>
          {this.state.responses.map((r, idx) => {
            return <Response
              key={idx+1}
              firstName={r.firstName}
              lastName={r.lastName}
              email={r.email}
              attending={r.attending}
              printedName={r.printedName}
              additionalGuests={r.additionalGuests}
              allergies={r.allergies}
              mealPreference={r.mealPreference}
              notes={r.notes}
            />
          })}
        </tbody>
      </table>
    )
  }

  render() {
    return (
      <div className="table-container">
        {this.state.error && <p>{this.state.error}</p>}
        {this.renderTable()}
        <Link to="/">Home</Link>
      </div>
    );
  }
};
