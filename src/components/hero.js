import React from 'react';
import Image from './image.js';
import './hero.css';
// import { Link } from 'gatsby';

const Hero = () => (
  <div className="container">
    <div className="img-wrapper">
      <Image />
    </div>
    <div className="text-wrapper">
      {/* <div className="navlinks">
        <ul>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div> */}
      <h1>au•to•maa•ti•o</h1>
      <div className="card">
        <h2>ep release show dec&nbsp;5 @&nbsp;alphaville! </h2>
        <a href="https://ticketf.ly/2Ftazd7">
          <p className="pulsate">>> get tickets</p>
        </a>
      </div>
      <a href="https://soundcloud.com/automaatio">
        <p>soundcloud</p>
      </a>
      <h3>visit @automaatiobk on:</h3>
      <a href="https://www.instagram.com/automaatiobk/">instagram</a>
      <a href="https://www.facebook.com/automaatiobk">facebook</a>
      <a href="https://twitter.com/automaatiobk">twitter</a>
    </div>
  </div>
)

export default Hero;