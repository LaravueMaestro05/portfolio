import React from 'react';
import './Footer.css';
import Wave from '../../img/wave.png';
import { UilLinkedin } from '@iconscout/react-unicons';
import { UilGithub } from '@iconscout/react-unicons';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="Wave" />
      <div className="f-content">
        <span>laravel.vue.dev219@hotmail.com</span>
        <div className="f-icons">
          <UilLinkedin color="white" size="3rem" />
          <UilGithub color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
