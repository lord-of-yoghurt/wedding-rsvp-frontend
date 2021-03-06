import React from 'react';
import { Link } from 'react-router-dom';

const GreetingBox = () => (
  <div className="box-layout__box animated fadeInDown">
    <p className="box-title box-title--left">Haodong and David</p>
    <p className="box-title box-title--right">are getting married!</p>
    <div className="box-title__box">
      <div className="box-title__left-section">
        <h3>When</h3>
        <p>Friday, September 21, 2018</p>
        <img className="box-layout__img" src="/images/divider-1_2.png" />
        <h3>Schedule</h3>
        <p>Wedding ceremony: 5:00 p.m.</p>
        <p>Cocktail hour: 6:00 p.m.</p>
        <p>Wedding reception: 7:00 p.m.</p>
        <img className="box-layout__img" src="/images/divider-1_2.png" />
        <h3>Where</h3>
        <p>The Views at Mt. Fuji</p>
        <p>296 Old Route 17 <br />Hillburn, NY 10931</p>
      </div>
      <div className="box-title__right-section">
        <img className="box-layout__img show-for-mobile" src="/images/divider-1_2.png" />
        <h3>Info and Updates</h3>
        <p>
          Detailed directions <br />are available <a target="_blank" href="https://goo.gl/JPTVCZ">here</a>.
        </p>
        <p></p>
        <p>
          The menu is now available! <br />Click&nbsp;
          <a target="_blank" href="https://goo.gl/4H5HRU">here</a>
          &nbsp;to check it out.
        </p>
        <img className="box-layout__img" src="/images/divider-1_2.png" />
        <p>
          Click below to see our registry!
          <a target="_blank" href="https://www.zola.com/registry/davidhaodong">
            <img className="box-layout__img" src="/images/zola-logo-blue.png" />
          </a>
        </p>
      </div>
    </div>
    <p className="box-subtitle">We look forward to sharing this special day with you!</p>
    <div>
      <Link
        className="app-button app-button--wide app-button--link app-button--ourstory"
        to="/ourstory"
      >
        Our Story
      </Link>
      <Link className="app-button app-button--wide app-button--link" to="/rsvp">RSVP</Link>
    </div>
  </div>
);

export default GreetingBox;
