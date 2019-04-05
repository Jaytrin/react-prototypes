import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber(){
    return Math.floor(1001 * Math.random());
}

function Greeting(props){
    return (
        <div className="container">
            <h1>{props.name}</h1>
            <h2 className="text-muted">{props.luckyNumber}</h2>
        </div>
    )
}

const userObject = {
    name: "Welcome Jaytrin",
    luckyNumber: luckyNumber()
}

ReactDOM.render(
    <Greeting name={userObject.name} luckyNumber={userObject.luckyNumber} />,
    document.getElementById('root')
);

