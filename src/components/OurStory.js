import React from 'react';
import { Link } from 'react-router-dom';

const OurStory = () => (
  <div className="our-story__wrapper">
    <div className="our-story__box">
      <p className="our-story__title">Our Story</p>
      <p>
        <img className="our-story__img--right show-for-desktop" src="/images/us-pic-1.jpg" />
        David and I met in the end of 2011 at the beautiful historic building on 57th Street and 6th Avenue, the former New York City home for Steinway pianos. We were both working for an event that Mannes School, the conservatory we both went to, was hosting. By then, we had both been studying at Mannes for a few years. There were only about 300 students attending Mannes at the time, so we were very surprised that we had never seen each other at school before. It wasn’t until later that we concluded that both of us must have been spending a lot of time in practice rooms.
      </p>

      <img className="box-layout__img show-for-mobile" src="/images/us-pic-1.jpg" />

      <p>Shortly after New Years 2012, I was coming back from visiting a friend in Chicago on an early flight, which arrived in New York at something like 7 in the morning. And there was David, waving and smiling at me at the airport meeting point in his winter jacket. He looked very sleepy, but perhaps the happiest in the crowd.</p>

      <p>Since then, we spent almost every minute together. We discovered our mutual love for cinema, and we saw hundreds of movies together, both old and new – in fact, our first date involved a movie screening. We played lots of music and performed many times together. Playing as a duo is something very special for us both, and one of our projects after the wedding is to record our first album and have it produced by a professional studio!</p>

      <img className="box-layout__img show-for-mobile" src="/images/us-pic-2.jpg" />

      <p>
        <img className="our-story__img--left show-for-desktop" src="/images/us-pic-2.jpg" />
        In the summer of 2012, David flew to Shanghai to meet my parents – just six months after we started dating. He could only spend four days there because of an upcoming festival. I thought it was too rushed, but David insisted and said that meeting my parents was very important to him. An excruciatingly long and turbulent flight (David is quite afraid of turbulence for some reason...) combined with the fear of meeting my parents for the first time, and David got off the plane looking and feeling completely terrified. In fact, his hands were icy cold (and they never are!) when my parents and I picked him up at the airport. Nevertheless, he greeted my parents in perfect Shanghainese dialect, which I had taught him before and made him practice quite a lot, and both of my parents took an immediate liking to him. And that liking only grew over time. :)
      </p>

      <p>About 3 years into our relationship, David introduced me to the world of hiking. I grew up in Shanghai, a city that’s much bigger than New York and with a lot less access to nature than we have here in the U.S., so I did not really know or appreciate nature all that much. But together, we hiked in a dozen national parks all over the U.S., and I was introduced to a whole new world that I never knew existed, and did things that I never thought I could do. David proposed to me almost three years ago somewhere in the middle of the Adirondack Park – a perfect setting, and an unforgettable day. We are finally getting married, and I’m so looking forward to many more adventures together as husband and wife!</p>

      <p className="our-story__credit">
        Photos by <a target="_blank" href="https://www.facebook.com/illyaf">
          Illya Filshtinskiy
        </a>
      </p>

      <Link className="app-button app-button--wide app-button--link" to="/">Back to Home</Link>
    </div>
  </div>
);

export default OurStory;
