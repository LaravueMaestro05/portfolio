import React, { useContext } from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import FluentStream from '../../img/FluentStream.png';
import TeamSava from '../../img/TeamSava.png';
import Amazon from '../../img/amazon.png';
import Shopify from '../../img/Shopify.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>
          Work for all these
        </span>
        <span>Brands & Clients</span>
        <span>
          Worked on Team Sava and Fluent stream as a Junior Frontend developer
          and Full Stack developer.
          <br /> And I worked on Upwork, Shopify as a Freelancer.
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: '#ABF1FF94' }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: '2.5', type: 'spring' }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="Upwork" />
          </div>
          <div className="w-secCircle">
            <img src={TeamSava} alt="TeamSava" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="Amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="Shopify" />
          </div>
          <div className="w-secCircle">
            <img src={FluentStream} alt="FluentStream" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
