import React from 'react';

const ThankYou = (props) => {
  // throw back to home page if user attempts
  // to type the `/thankyou` route manually
  if (!props.location.state) {
    props.history.push('/');
    return null;
  }

  const attending = props.location.state.attending;

  return (
    <div>
      <div>
        <div>
          <h2>Thank you!</h2>
          {attending === 'yes' &&
            <p>
              We are so excited to see you at our wedding! Please check back for
              detailed schedule and updated registry information. We will send out
              a notification once there are updates.
            </p>
          }
          {attending === 'no' &&
            <p>
              We are sorry to hear that you are not available.
            </p>
          }
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
