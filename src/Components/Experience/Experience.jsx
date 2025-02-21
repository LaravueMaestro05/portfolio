import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './Experience.css';

const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="Experience">
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? 'var(--orange)' : '' }}
        >
          7+
        </div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? 'var(--orange)' : '' }}
        >
          30+
        </div>
        <span>completed</span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? 'var(--orange)' : '' }}
        >
          2+
        </div>
        <span>companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
