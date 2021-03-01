import React from 'react';
import '../styles/Button.css';
import { Link } from 'react-router-dom';

const Button = ({ text, path, bg}) => {
    return (
      <div>
        <Link to={path}>
            <button className={bg}>{text}</button>
        </Link>
      </div>
    )
}

export default Button;