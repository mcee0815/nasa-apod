import React, {Component} from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';

const Image = (props) => {
    return(
        <div >
            <img src={props.imgUrl}
                style={{height:'400px',width:'100%'}} alt="pic" />
        </div>
    )
}

export default Image;