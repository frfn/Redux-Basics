import React from 'react';

import './Person.css';

/* Summary -- just a div that shows the name + age */

const person = (props) => (
    <div className="Person" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <p>Age: {props.age}</p>
    </div>
);

export default person;