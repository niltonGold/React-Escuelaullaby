import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const HeaderLullabyLogo = () => {

  // const navigate = useNavigate();

  const handleInicioClick = () => {
    // navigate('/');
  };

  return (
    <div className='Lullaby-logo' onClick={handleInicioClick} />
  )
}
