import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './Experience.css';


const Experience = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='experience' id='Experience'>
      <div className='achievement'>
        <div className='circle' style={{color: darkMode?'var(--orange)':''}}>8+</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className='achievement'>
        <div className='circle' style={{color: darkMode?'var(--orange)':''}}>20+</div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className='achievement'>
        <div className='circle' style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span>companies</span>
        <span>Work</span>
      </div>
    </div>
  )
}

export default Experience;
