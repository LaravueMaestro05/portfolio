import React, { useContext } from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from 'framer-motion';
import { themeContext } from '../../Context';

const Intro = () => {
  const transition = { duration: 2, type: 'spring' };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? 'white' : '' }}>Hi! I Am</span>
          <span>Ognjen Puric</span>
          <span>
            With over 6 years of experience, I specialize in building scalable,
            high-performance
            <br />
            web applications using Laravel + Vue and the MERN stack.
            <br />
            My expertise spans backend architecture, frontend development,
            database
            <br />
            optimization, and DevOps practices.
          </span>
        </div>

        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/LaravueMaestro05">
            {' '}
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/ognjen-puric-b8a020351">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" />
        <img src={boy} alt="Boy" />
        <motion.img
          initial={{ left: '-30%' }}
          whileInView={{ left: '-24%' }}
          transition={transition}
          src={glassesimoji}
          alt="glassesimoji"
        />
        <motion.div
          initial={{ top: '-4%', left: '74%' }}
          whileInView={{ left: '66%' }}
          transition={transition}
          style={{ top: '-4%', left: '74%' }}
          className="floating-div"
        >
          <FloatingDiv
            image={Crown}
            txt1="Full Stack"
            txt2="Laravel/Vue, MERN"
          />
        </motion.div>
        <motion.div
          initial={{ top: '72%', left: '18rem' }}
          whileInView={{ left: '0rem' }}
          transition={transition}
          style={{ top: '72%', left: '4rem' }}
          className="floating-div"
        >
          <FloatingDiv
            image={thumbup}
            txt1="Web Scraping"
            txt2="Python, Node"
          />
        </motion.div>
        {/* blur divs */}
        {/* <div
          className="blur"
          style={{
            background: '#C1F5FF',
            top: '17rem',
            height: '11rem',
            left: '-9rem',
            width: '21rem'
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Intro;
