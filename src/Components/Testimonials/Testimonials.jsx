import React, { useContext } from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import profilePic2 from '../../img/profile2.jpg';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { themeContext } from '../../Context';

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const clients = [
    {
      img: profilePic1,
      review:
        'Ognjen is an exceptional Senior DevOps Engineer with outstanding expertise in cloud infrastructure, CI/CD pipelines, and containerization.'
    },
    {
      img: profilePic2,
      review:
        'Working with Ognjen was a pleasure. His professionalism and approachability made our collaboration seamless. I look forward to future projects together'
    },
    {
      img: profilePic3,
      review:
        'Great working with Ognjen, really easy to communicate and progress throughout the project and great work overall.'
    },
    {
      img: profilePic4,
      review:
        'Probably my best experience working. You were great!! Very quick to respond and a fast worker.'
    }
  ];
  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get</span>
        <span> Exceptional Work</span>
        <span> from me...</span>
        <div
          className="blur t-blur1"
          style={{ background: 'var(--purple)' }}
        ></div>
        <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>
      </div>
      {/* slider */}
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span style={{ color: darkMode ? 'white' : '' }}>
                  {client.review}
                </span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonials;
