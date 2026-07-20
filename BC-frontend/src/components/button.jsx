import React, { useState } from 'react';
import styles from './button.module.css';

//state to control pop-up windows
const Button = ({onClick, children}) => {
    return (
        <button className={styles.myButton} onClick={onClick}> 
            {children}
        </button>
    );
};

export default Button;