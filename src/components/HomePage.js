import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="box-layout">
    <div className="box-layout__box animated fadeInDown">
      <p className="box-title">Haodong and David are getting married!</p>
      <div className="box-title__box">
        <div className="box-title__left">
          <p>Blablabla where</p>
          <p>Blablabla when</p>
        </div>
        <div className="box-title__right">
          <img className="box-layout__img" src="/images/mt-fuji.png"></img>
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
