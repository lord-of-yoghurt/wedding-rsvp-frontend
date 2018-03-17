import React from 'react';

const AddGuestField = (props) => (
  <div className="add-guest-box">
    <input
      className="add-guest-box__input text-input"
      type="text"
      onChange={props.handleChange}
      placeholder={`Guest no. ${props.index} name`}
    />
    <button
      className="add-guest-box__btn app-button app-button--remove"
      type="button"
      onClick={props.deleteGuest}
    >
      Remove
    </button>
  </div>
);

export default AddGuestField;
