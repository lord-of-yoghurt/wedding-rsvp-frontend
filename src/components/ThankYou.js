import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = (props) => {
  // throw back to home page if user attempts
  // to type the `/thankyou` route manually
  if (!props.location.state) {
    props.history.push('/');
    return null;
  }

  const attending = props.location.state.attending;

  return (
    <div className="thankyou-wrapper">
      <div className="thankyou-container animated fadeInDown">
        <h2>Thank you, {props.location.state.firstName}!</h2>
        {attending === 'yes' &&
          <p className="thankyou-paragraph">
            We are so excited to see you at our wedding! Please check back for
            detailed schedule and updated registry information. We will send out
            a notification once there are updates.
          </p>
        }
        {attending === 'no' &&
          <p className="thankyou-paragraph">
            We are sorry to hear that you are not available, and we will miss you!
            <br />
            Thank you for letting us know.
          </p>
        }
        <p className="thankyou-links">
          <Link to="/">Back to Home Page</Link>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
