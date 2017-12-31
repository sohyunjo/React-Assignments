import React, { Component } from 'react';

const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5){
        validationMessage = 'Text too short';
    }
    return (
        <div className='Validator'>
            {
                <p>{validationMessage}</p>
            }

        </div>
    );
};

export default validation;
