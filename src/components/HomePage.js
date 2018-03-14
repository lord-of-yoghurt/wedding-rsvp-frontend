import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <p>This is the dashboard.</p>
    <Link to="/rsvp">RSVP!</Link>
  </div>
);

export default HomePage;
