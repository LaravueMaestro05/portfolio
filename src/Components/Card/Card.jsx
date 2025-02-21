import React, { useContext } from 'react';
import { themeContext } from '../../Context';
import './Card.css';

const Card = ({emoji, heading, content}) => {

  const transition = {duration: 2, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='card'>
      <img src={emoji} alt="Emoji" />
      <span style={{ color: darkMode ? "white" : "" }}>{heading}</span>
      <span style={{ color: darkMode ? "white" : "" }}>{content}</span>
      <button className='c-button'>LEARN MORE</button>
    </div>
  )
}

export default Card;
