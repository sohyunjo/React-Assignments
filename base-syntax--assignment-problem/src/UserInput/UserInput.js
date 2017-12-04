import React, { Component } from 'react';


const userInput = (props) => {

    const style = {border: '2px solid red'};

    return <input style = {style} type="text" onChange={props.changed} value={props.value}/>;

};

export default userInput;
