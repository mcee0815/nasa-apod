import React from 'react';

const Social2 = ({repo,url,img}) => {
    
    return(
        <div style={{marginTop:'15px',padding:'5px',background:'orange',borderRadius:'5px'}}>
            
                <a style={{textDecoration:'none',}} href = {url}>
                    <img style={{width:'25px',textAlign:'center'}} src={img} alt="github logo" />
                </a>
            
        </div>
    )
}
export default Social2;