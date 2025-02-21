import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Jleague from '../../img/Jleague.png';
import Shoptobi from '../../img/Shoptobi.png';
import Ecommerce from '../../img/ecommerce.png';
import MusicApp from '../../img/musicapp.png';
import Testfiesta from '../../img/Testfiesta.png';
import Phanox from '../../img/Phanox.png';
import Singitronic from '../../img/Singitronic.png';

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
          <img src={Shoptobi} alt="Shoptobi" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Jleague} alt="Jleague" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Phanox} alt="Phanox" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Singitronic} alt="Singitronic" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Testfiesta} alt="Testfiesta" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="Ecommerce" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="MusicApp" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
