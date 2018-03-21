import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="box-layout">
    <div className="box-layout__box animated fadeInDown">
      <p className="box-title box-title--left">Haodong and David</p>
      <p className="box-title box-title--right">are getting married!</p>
      <div className="box-title__box">
        <div className="box-title__left-section">
          <h3>When</h3>
          <p>Friday, September 21, 2018</p>
          <p>Ceremony starts at 5:00 p.m.</p> {/* TODO: add detailed schedule */}
          <img className="box-layout__img" src="/images/divider-1_2.png" />
          <h3>Where</h3>
          <p>The Views at Mt. Fuji</p>
          <p>296 Old Route 17, Hillburn, NY 10931</p>
        </div>
        <div className="box-title__right-section">
          <h3>Info and Updates</h3>
          <p>
            Detailed directions are available <a href="https://goo.gl/JPTVCZ">here</a>.
          </p>
          <p></p>
          <p>
            Menu options and registry info will be made available in early April.
          </p>
        </div>
      </div>
      <p className="box-subtitle">We look forward to sharing this special day with you!</p>
      <div>
        <Link className="app-button app-button--wide app-button--link" to="/rsvp">RSVP</Link>
      </div>
    </div>
  </div>
);

export default HomePage;
