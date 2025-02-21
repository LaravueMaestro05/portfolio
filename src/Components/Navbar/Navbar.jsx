import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
import { Link } from 'react-scroll';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';

const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>Emmanuel</div>
        <Toggle />
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul>
            <Link spy = {true} smooth={true} to='Navbar' activeClass = 'activeClass'>
              <li>Home</li>
            </Link>
            <Link spy = {true} smooth={true} to='Services'>
              <li>Services</li>
            </Link>
            <Link spy = {true} smooth={true} to='Experience'>
              <li>Experience</li>
            </Link>
            <Link spy = {true} smooth={true} to='Portfolio'>
              <li>Portfolio</li>
            </Link>
            <Link spy = {true} smooth={true} to='Testimonials' >
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <button className='button n-button'>
          Contact
        </button>
      </div>
    </div>
  )
}

export default Navbar;
