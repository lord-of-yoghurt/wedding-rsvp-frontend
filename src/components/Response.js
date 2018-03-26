import React from 'react';

const Response = ({
  firstName, lastName, email, attending,
  printedName, additionalGuests, allergies,
  mealPreference, notes
}) => (
  <tr>
    <td>{firstName}</td>
    <td>{lastName}</td>
    <td>{email}</td>
    <td>{attending}</td>
    <td>{printedName}</td>
    <td>
      {
        additionalGuests.length > 1 ?
        additionalGuests.length + 1 :
        additionalGuests.length
      }
    </td>
    <td>{additionalGuests.join(', ')}</td>
    <td>{allergies}</td>
    <td>{mealPreference}</td>
    <td>{notes}</td>
  </tr>
);

export default Response;
