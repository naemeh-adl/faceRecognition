
import React from 'react';
import './FaceRecognitionArea.css'

const FaceRecognitionArea= ({imageUrl,box})=>{
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='currentImage'  alt='' src={imageUrl} width='500px' height='auto'></img>
                <div className='myBox' style={{top: box.top_row, right: box.right_col, bottom: box.botton_row,
                 left:box.left_col}}></div>
            </div>
            
        </div>
    );
}
export default FaceRecognitionArea;