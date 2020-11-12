import React from 'react';

export default function Hoc(props){
console.log(props);

    return (

        <div className="main">
            {props.children}
        </div>

    )
};