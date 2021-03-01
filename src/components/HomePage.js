import React from 'react';
import '../styles/HomePage.css';
import Button from './Button';

const HomePage = () => {
    return (
      <div className='homePage'>
          <h1>Welcome To GameOverload</h1>
          <Button text='press start' path='/signup' bg='black'/>
      </div>
    )
}

export default HomePage;