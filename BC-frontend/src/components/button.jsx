import React, { useState } from 'react';

//state to control pop-up windows
const Button = ({onClick, children}) => {
    return (
        <button type="button" onClick={onClick}> 
            {children}
        </button>
    );
};

export default Button;