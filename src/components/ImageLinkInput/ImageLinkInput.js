
import React from 'react';
import './ImageLinkInput.css';

const ImageLinkInput= ({onInputChange, onButtonClicked})=>{
    return(
        <div>
            <p className='center f4'>Please Enter Your Image Link and Enjoy Our Face Recognition App!</p>
            <div className="findImgForm br2 center w-60 shadow-5">
            <input className='br2 pa2 ma2 w-80' onChange={onInputChange}>
            </input>
            <button className='br2 pa2 ma2 w-20 f5 link black findButt' onClick={onButtonClicked}>Find Faces</button>
        </div>
        </div>
    );
}
export default ImageLinkInput;