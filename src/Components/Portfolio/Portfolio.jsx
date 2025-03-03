import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Jleague from '../../img/Jleague.png';
import Shoptobi from '../../img/Shoptobi.png';
import Testfiesta from '../../img/Testfiesta.png';
import Hockey from '../../img/Hockey.png';
import Educationcms from '../../img/Educationcms.png';

import 'swiper/css';
import { themeContext } from '../../Context';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Educationcms} alt="Educationcms" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Shoptobi} alt="Shoptobi" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Jleague} alt="Jleague" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Testfiesta} alt="Testfiesta" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hockey} alt="Hockey" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
