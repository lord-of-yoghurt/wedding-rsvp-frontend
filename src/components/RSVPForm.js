import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddGuestField from './AddGuestField';

class RSVPForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      printedName: '',
      email: '',
      allergies: '',
      additionalGuests: [''],
      attending: 'yes',
      mealPreference: '',
      notes: '',
      error: '',
      infoFieldsClass: ''
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

  onPrintNameChange = (e) => {
    const printedName = e.target.value;
    this.setState(() => ({ printedName }));
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

  onAttendChange = () => {
    // e.persist();

    this.setState((prevState) => ({
      attending: prevState.attending === 'yes' ? 'no' : 'yes',
      infoFieldsClass: prevState.infoFieldsClass === '' ? 'form-container--hide' : ''
    }));
  };

  onNotesChange = (e) => {
    const notes = e.target.value;

    this.setState({ notes });
  };

  clearForm = () => {
    this.setState(() => ({
      firstName: '',
      lastName: '',
      printedName: '',
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
        <div className="content-container">
          <div className="input-group">
            <input
              className="input-group__item text-input"
              type="text"
              placeholder="First name"
              autoFocus
              onChange={this.onFirstNameChange}
            />
            <input
              className="input-group__item text-input"
              type="text"
              placeholder="Last name"
              onChange={this.onLastNameChange}
            />
            <input
              className="input-group__item text-input"
              type="email"
              placeholder="Email address"
              onChange={this.onEmailChange}
            />
          </div>
          {this.state.error && <div className="form__error">{this.state.error}</div>}
          <div className="radio-box">
            <label>
              <input
                className="radio-box__btn"
                type="radio"
                value="yes"
                checked={this.state.attending === 'yes'}
                onChange={this.onAttendChange}
              />
              I will be there! <i className="em em-grinning_face_with_star_eyes"></i>
            </label>
            <br />
            <label>
              <input
                className="radio-box__btn"
                type="radio"
                value="no"
                checked={this.state.attending === 'no'}
                onChange={this.onAttendChange}
              />
              I can't make it. <i className="em em-frowning"></i>
            </label>
          </div>

          {/* ******************* */}

          <div className={this.state.infoFieldsClass}>
            <div className="input-group">
              <label className="input-group__label">
                Optional: full name to be displayed
                on the table card, if different from above
              </label>
              <input
                className="input-group__item text-input"
                type="text"
                placeholder="Printed name"
                onChange={this.onPrintNameChange}
              />
            </div>
            <div className="input-group">
              <textarea
                className="textarea"
                placeholder="Allergies? Food restrictions? List them here!"
                onChange={this.onAllergiesChange}
              ></textarea>
            </div>
            <div className="add-guest-container">
              <label className="input-group__label">
                Additional Guests
              </label>

              {this.state.additionalGuests.map((guest, idx) => {
                return <AddGuestField
                  key={idx + 1}
                  index={idx + 1}
                  handleChange={this.onGuestNameChange(idx)}
                  deleteGuest={this.handleDeleteGuest(idx)}
                />
              })}

              <button
                type="button"
                className="app-button app-button--wide"
                onClick={this.handleAddGuest}
              >
                Add Guest
              </button>
            </div>
            <div className="input-group">
              <textarea
                className="textarea"
                placeholder="Any additional notes? Songs you want to dance to?"
                onChange={this.onNotesChange}
              >
              </textarea>
            </div>
          </div>

          <button className="app-button app-button--submit">
            Submit
          </button>
        </div>

      </form>
    );
  };
};

export default RSVPForm;
