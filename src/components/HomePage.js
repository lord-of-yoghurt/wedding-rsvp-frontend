import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>Haodong and David are getting married!</h1>
    <p>Join the party! <Link to="/rsvp">RSVP</Link></p>
  </div>
);

export default HomePage;
