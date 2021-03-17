import React from 'react';


const Social = ({repo,url}) => {
    
    return(
        <div style={{marginTop:'15px',width:'75px',margin:'0 auto',background:'orange',borderRadius:'5px'}}>
            <p style={{textAlign:'center',fontWeight:'bolder',background:'orange'}}>
                <a style={{textDecoration:'none'}} href = {url}>
                    {repo}
                </a>
            </p>
        </div>
    )
}
export default Social;