import React, {Component} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const Info = (props) => {
    return(
        <div style={{lineHeight:'.5'}}>
            <h4><span>Title:</span> {props.title}</h4>
            <p><span>Date:</span> {props.date}</p>
            <br />
        </div>
    )
}
export default Info;