import React from 'react';
import { useTheme } from '../themes/ThemeContext';

const Button = () => {
  const { toggleTheme } = useTheme();

  return (
    <button className="theme-button" onClick={toggleTheme}>
      Cambiar Tema
    </button>
  );
};

export default Button;
