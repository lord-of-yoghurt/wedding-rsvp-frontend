import React, { Component } from 'react';

import AddGuestField from './AddGuestField';

class RSVPForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      allergies: '',
      additionalGuests: [''],
      attending: 'yes',
      mealPreference: '',
      notes: '',
      error: ''
    };
  };

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

  onGuestNameChange = (idx) => (e) => {
    const newGuests = this.state.additionalGuests.map((g, gIdx) => {
      if (idx !== gIdx) return g;

      return e.target.value;
    });

    this.setState(() => ({ additionalGuests: newGuests }));
  };

  handleAddGuest = () => {
    this.setState({
      additionalGuests: [...this.state.additionalGuests, '']
    });
  };

  handleDeleteGuest = (idx) => () => {
    this.setState({
      additionalGuests: this.state.additionalGuests.filter((g, guestIdx) => {
        return idx !== guestIdx;
      })
    });
  };

  onAttendChange = (e) => {
    this.setState({
      attending: e.target.value
    });
  };

  onNotesChange = (e) => {
    const notes = e.target.value;

    this.setState({ notes });
  };

  clearForm = () => {
    this.setState(() => ({
      firstName: '',
      lastName: '',
      email: '',
      allergies: '',
      additionalGuests: [''],
      notes: ''
    }));
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    const { firstName, lastName, email } = this.state;

    if (!firstName || !lastName || !email) {
      this.setState(() => ({
        error: 'Full name and email are required!'
      }));
    } else {
      this.setState({ error: '' });
      this.props.onSubmit(this.state);
      this.clearForm();
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        {this.state.error && <p>{this.state.error}</p>}
        <div>
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
          <textarea
            placeholder="Allergies? Food restrictions? List them here!"
            onChange={this.onAllergiesChange}
          ></textarea>
        </div>
        <div>
          <p>Additional Guests</p>
          <div>
            {this.state.additionalGuests.map((guest, idx) => {
              return <AddGuestField
                key={idx + 1}
                index={idx + 1}
                handleChange={this.onGuestNameChange(idx)}
                deleteGuest={this.handleDeleteGuest(idx)}
              />
            })}
          </div>
          <button type="button" onClick={this.handleAddGuest}>Add Guest</button>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="yes"
              checked={this.state.attending === 'yes'}
              onChange={this.onAttendChange}
            />
            I am attending! :)
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="no"
              checked={this.state.attending === 'no'}
              onChange={this.onAttendChange}
            />
            I am square. :(
          </label>
        </div>
        <div>
          <textarea
            placeholder="Any additional notes? Songs you want to dance to?"
            onChange={this.onNotesChange}
          >
          </textarea>
        </div>
        <button>Submit</button>
      </form>
    );
  };
};

export default RSVPForm;
