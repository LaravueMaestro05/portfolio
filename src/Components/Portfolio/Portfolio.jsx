import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Jleague from '../../img/Jleague.png';
import Shoptobi from '../../img/Shoptobi.png';
import Testfiesta from '../../img/Testfiesta.png';
import Hockey from '../../img/Hockey.png';
import Educationcms from '../../img/Educationcms.png';
import Laravelcrm from '../../img/Laravelcrm.png';
import Tradingview from '../../img/Tradingview.png';
import Dosarestraunt from '../../img/Dosarestraunt.png';
import Marketing from '../../img/Marketing.png';
import Elearning from '../../img/Elearning.png';
import Eshop from '../../img/Eshop.png';
import Store from '../../img/Store.png';
import Schduling from '../../img/Schduling.png';

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
          <div className="project-title">Trading platform</div>
          <img src={Tradingview} alt="Tradingview" />
          <div className="project-detail">
            I have developed a complex trading platform for my client using the
            PHP Laravel framework. I have created the whole User Dashboard and
            implemented different complex calculation and trade features as
            client's requirements. I have implemented several trading-related
            APIs like TradingView, OKX, and RapidAPI for other third-party APIs.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-title">Content Management System</div>
          <img src={Educationcms} alt="Educationcms" />
          <div className="project-detail">
            An LMS system desgined for a company based in Singapore to hold
            local and global competitions worldwide. The system is developed
            using Laravel and React. I was responsible for developing the
            backend side of this system.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-title">Dosa Restaurant</div>
          <img src={Dosarestraunt} alt="Dosarestraunt" />
          <div className="project-detail">
            Developed Dosa Restaurant website with PHP from scratch after web
            design with Figma and built the whole website with HTML, Bootstrap,
            jQuefy, PHP and deliverd the project on time.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-title">E-commerce website</div>
          <img src={Shoptobi} alt="Shoptobi" />
          <div className="project-detail">
            This is the eCommerce website in Ukraine that users purchase the
            packages. I worked as a Full Stack developer with Laravel for
            Backend, and Vue, and Tailwind CSS for Frontend development.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-title">Next Health</div>
          <img src={Eshop} alt="Eshop" />
          <div className="project-detail">
            NextHealth is a medical web app that allows buying medical goods for
            health care It is written in Vue.js as on a front end and uses PHP
            Slim framework as a backend, and stores data in the PostgreSQL DB. .
            The project also has integrations with some APIs. I worked in a team
            that was maintaining the existing application and adding new
            functions.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-title">Online store</div>
          <img src={Store} alt="Store" />
          <div className="project-detail">
            Development of an online store for a brand engaged in the production
            of clothing. We have created an adaptive design, interface and
            backend. We also constantly support the project
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-title">Marketing and reward system</div>
          <img src={Marketing} alt="Marketing" />
          <div className="project-detail">
            RewardPlus is a marketing and reward platform developed using the
            PHP Laravel framework. Used Bootstrap, jQuery for frontend
            functionalities and Fortify for authentication. Admin/Location
            Admin/Agency Admin can create a customer that will get registered
            into the GoHighLevel server using an API call.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-title">
            Learning platform for managing Exams
          </div>
          <img src={Elearning} alt="Elearning" />
          <div className="project-detail">
            A LMS system, used to register schools, teachers and students, then
            make exams for students, then correct them briefly. The system
            contains many complex details under the hood. I have been working
            with a very professional team based in Netherlands to deliver new
            features and fix bugs. I have used Laravel extensively with Laravel
            livewire and AlpineJs to deliver SPA.
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-title">Custom Laravel based CRM</div>
          <img src={Laravelcrm} alt="Laravelcrm" />
          <div className="project-detail">
            Developed a complete CRM to be used internally by the company. This
            included a custom kanban board, ability to manage users and clients,
            fetching metrics from external API, fetching resources from Google
            Drive and viewing/sending emails. All in one CRM!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Jleague} alt="Jleague" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Schduling} alt="Schduling" />
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
