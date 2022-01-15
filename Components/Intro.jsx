import React from 'react';
import ReactPlayer from 'react-player';
// import video from '../public/asset/video/smoke.mp4'

const Intro = () => {
    return (
        <div className='intro-continer'>
            <h1>
                <span>A</span>
                <span>T</span>
                <span>L</span>
                <span>A</span>
                <span>N</span>
                <span>T</span>
                <span>I</span>
                <span>S</span>
            </h1>
             <video  autoPlay muted  style={{ width: '100%', height: '500px' }}>
             <source src="/smoke.mp4" type="video/mp4"/>
            </video>

            
        </div>
    )
}

export default Intro
