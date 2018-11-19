import React from 'react'
import Image from '../components/image'
// import './press-release.css'
import '../components/hero.css'

const SecondPage = () => (
  <div>
    <div className="container">
      <div className="text-wrapper" id="press">
        <h3 id="kicker">Press Release</h3>

        <h2>Automaatio evaluate life under capitalism in debut EP release</h2>
        <p>
          <b>Automaatio</b> will celebrate their debut EP{' '}
          <em>Comfort is a Drug</em> with a show on <b>December 5th, 2018</b> at{' '}
          <b>Alphaville</b>, Brooklyn with <b>The Wants</b>,<b> Toyzanne</b>,
          and <b>Patrick Ellis</b>.
        </p>
        <p>
          Automaatio is the musical collaboration between <b>Robert Wiegmann</b>{' '}
          and <b>Robin Pahlman</b>, who met through a band ad on Craigslist, and
          bonded over a mutual admiration of <b>Neu!</b>, <b>Talking Heads</b>,
          and leftist literature.
        </p>
        <p>
          Initially developing their kraut punk sound in their rehearsal space
          in Greenpoint, Brooklyn, they played live shows as a duo, began
          experimenting with live loops, and eventually incorporated electronic
          elements into their standard drums and baritone guitar setup.
        </p>
        <p>
          Automaatio started recording tracks for their first release in a Crown
          Heights basement, and collaborated with <b>Kevin McMahon</b> at{' '}
          <b>Marcata Recordings</b> (
          <em>
            <b>Titus Andronicus, Swans, Real Estate</b>
          </em>
          ) in New Paltz, NY for the final version.
        </p>
        {/* <Link to="/">Go back to the homepage</Link> */}
      </div>
      <div className="img-wrapper">
        <Image />
      </div>
    </div>
    <div id="links">
      <h4>Links:</h4>
      <a href="https://soundcloud.com/automaatio/sets/comfort-is-a-drug-ep/s-scJhU">
        EP (Private Soundcloud link)
      </a>
      <a href="https://www.facebook.com/events/328929597689343/">
        Alphaville show Facebook event
      </a>
      <a href="https://ticketf.ly/2Ftazd7">Ticketfly link</a>
      <div className="bands">
        <a href="https://www.facebook.com/thewantsband/">The Wants</a>
        <a href="https://www.facebook.com/toyzanne/">Toyzanne</a>
        <a href="https://soundcloud.com/patrick">Patrick Ellis</a>
      </div>
      <a href="mailto:automaatiomusic@gmail.com">Email us for more info!</a>
    </div>
    <div className="sc-wrapper">
      <iframe
        title="sc"
        width="100%"
        height="450"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/446066007%3Fsecret_token%3Ds-scJhU&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    </div>
  </div>
)

export default SecondPage
