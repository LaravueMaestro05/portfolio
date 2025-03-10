import React, { useContext } from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { motion } from 'framer-motion';
import { themeContext } from '../../Context';

const Services = () => {
  const transition = { duration: 2, type: 'spring' };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>Services</span>
        <span>
          Frontend Web solution with modern JavaScript frameworks like React,
          Vue, Angular.
          <br />
          Full Stack Web development with Laravel + Vue and MERN stack.
          <br />
          Web Scraping with Python, Node.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={{ transition }}
          style={{ left: '18rem' }}
        >
          <Card
            emoji={HeartEmoji}
            heading={'UI/UX Design'}
            content={'Figma, Sketch, InVision , UserTesting , Crazy Egg'}
          />
        </motion.div>
        {/* Second Card */}
        <motion.div
          initial={{ top: '12rem', left: '5rem' }}
          whileInView={{ left: '-4rem' }}
          transition={{ transition }}
          style={{ top: '12rem', left: '-2rem' }}
        >
          <Card
            emoji={Glasses}
            heading={'Web Development'}
            content={
              'JavaScript, TypeScript, Vue.js, React.js, Node.js, Express.js, Laravel, PostgreSQL, MongoDB, ...'
            }
          />
        </motion.div>
        {/* Third Card */}
        <motion.div
          initial={{ top: '19rem', left: '21rem' }}
          whileInView={{ left: '12rem' }}
          transition={{ transition }}
          style={{ top: '19rem', left: '16rem' }}
        >
          <Card
            emoji={Humble}
            heading={'Web Scraping'}
            content={
              'Python, Node.js, Selenium, BeautifulSoup, Scrapy, Cheerio , Puppeteer '
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
