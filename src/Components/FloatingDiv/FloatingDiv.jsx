import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './FloatingDiv.css';

const FloatingDiv = ({image, txt1, txt2}) => {

  const transition = {duration: 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='floatingdiv'>
      <img src={image} alt='Crown' />
      <span style={{ color: darkMode ? "black" : "" }}>
        {txt1}
        <br />
        {txt2}
      </span>
    </div>
  )
}

export default FloatingDiv;
