import React from 'react';
import ReactPlayer from 'react-player';
// import video from '../public/asset/video/smoke.mp4'

const Intro = () => {
    return (
        <div className='intro-continer'>
             <video  autoPlay muted  style={{ width: '100%', height: '500px' }}>
             <source src="/smoke.mp4" type="video/mp4"/>
            </video>

            
        </div>
    )
}

export default Intro
