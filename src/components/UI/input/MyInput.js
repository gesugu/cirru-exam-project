import React from 'react';
import classes from './MyInput.module.css'

const MyInput =(props, className, placeholder) => {
  return (
    <input type="text" className={className} {...props} placeholder={placeholder} />
  );
};

export default MyInput;
