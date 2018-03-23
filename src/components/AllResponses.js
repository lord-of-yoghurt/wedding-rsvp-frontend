import React, { Component } from 'react';
import axios from 'axios';

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

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}

        {this.state.responses && this.state.responses.map((response) => {
          return <p>{response.firstName}</p>;
        })}
      </div>
    );
  }
};
