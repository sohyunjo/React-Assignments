import React, { Component } from 'react';

import './UserOutput.css'

const userOutput = (props) => {
        return(
            <div className="UserOutput">
                <p>{props.username}</p>
                <p>text</p>
            </div>
        );
};

export default userOutput;
