import React from 'react';

const Info = (props) => {
    return(
        <div style={{lineHeight:'.6'}}>
            <h4><span>Title:</span> {props.title}</h4>
            <h4><span>Date:</span> {props.date}</h4>
            <br />
        </div>
    )
}
export default Info;