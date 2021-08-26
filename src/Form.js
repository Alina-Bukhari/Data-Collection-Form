import React, { useState } from 'react';
import './Form.css';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
      
      </div>
    </>
  );
};

export default Form;