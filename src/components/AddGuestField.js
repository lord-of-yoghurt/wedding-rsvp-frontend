import React from 'react';

const AddGuestField = (props) => (
  <div>
    <input
      type="text"
      onChange={props.handleChange}
      placeholder={`Guest no. ${props.index} name`}
    />
    <button type="button" onClick={props.deleteGuest}>-</button>
  </div>
);

export default AddGuestField;
