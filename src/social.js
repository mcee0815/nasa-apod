import React from 'react';

const Social = ({repo,url}) => {
    
    return(
        <div style={{marginTop:'15px',width:'75px',background:'orange',borderRadius:'5px'}}>
            <p style={{textAlign:'center',fontWeight:'normal',background:'orange'}}>
                <a style={{textDecoration:'none'}} href = {url}>
                    {repo}
                </a>
            </p>
        </div>
    )
}
export default Social;