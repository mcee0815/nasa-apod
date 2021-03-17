import React from 'react';

const Explanation = (props) => {
    return(
        <div style={{background:'rebeccapurple',marginTop:'7px',marginBottom:'15px', padding:'20px',borderRadius:'5px'}}>
        
        <p className={props.typo} style={{lineHeight:'1.4',padding:'5px'}}><span  style={{fontSize:'1.3em',}}>Explanation: </span>{props.theText}
        <span>
            <button style={
                {
                    background:'none',
                    borderRadius:'5px',
                    marginLeft: '5px',
                    color:'orange',
                    border: 'none',
                    fontSize:'14px',
                    fontWeight: '600'}} 
                    
                    onClick={props.onClick}>{props.btnText}
            </button>
        </span>
    </p>
        
            
        </div>
    )
}

export default Explanation;