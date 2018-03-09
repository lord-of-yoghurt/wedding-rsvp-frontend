import React, { Component } from 'react';

class RSVPForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      allergies: '',
      additionalGuests: [],
      attending: false,
      mealPreference: '',
      notes: '',
      error: ''
    };
  }

  onFirstNameChange = (e) => {
    const firstName = e.target.value;
    this.setState(() => ({ firstName }));
  };

  onLastNameChange = (e) => {
    const lastName = e.target.value;
    this.setState(() => ({ lastName }));
  };

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
  };

  onAllergiesChange = (e) => {
    const allergies = e.target.value;
    this.setState(() => ({ allergies }));
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        {this.state.error && <p>{this.state.error}</p>}
        <input
          type="text"
          placeholder="First name"
          autoFocus
          onChange={this.onFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last name"
          onChange={this.onLastNameChange}
        />
        <input
          type="text"
          placeholder="Email address"
          onChange={this.onEmailChange}
        />
        <br></br>
        <textarea
          placeholder="Allergies? Food restrictions? List them here!"
          onChange={this.onAllergiesChange}
        >
        </textarea>
        <br></br>
        <button>Submit</button>
      </form>
    );
  };
}

export default RSVPForm;
