
import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import LogoImg from './Logo.png'

const Logo= ()=>{
    return(
        <div className='ma4 mt0'>
            <Tilt className="Tilt ba br4" options={{ max : 45 }} style={{ height: 90, width: 90 }} >
 <div className="Tilt-inner"> <img alt='Logo' src={LogoImg}/> </div>
</Tilt>
        </div>
    );
}
export default Logo;