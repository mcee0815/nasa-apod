import React from 'react';

const Info = ({title,date}) => {
    
    return(
        <div style={{lineHeight:'.3'}}>
            <h4><span>Title:</span> {title}</h4>
            <h4><span>Date:</span> {date}</h4>
            <br />
        </div>
    )
}
export default Info;