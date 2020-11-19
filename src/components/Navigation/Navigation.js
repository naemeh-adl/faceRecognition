
import React from 'react';

const Navigation= ({onRouteChange, isSignedIn})=>{
        //Neeeeeee
        
            if(isSignedIn){
            return(
        <nav className='flex justify-end'>
            {//endNaee
            }
            <p className='f3 link dim black underline pa3 pointer dark gray mid gray on hover '
            onClick={()=>onRouteChange('Signout')}>Sign Out</p>
        </nav>
            );
        }else{
            return(
                <nav className='flex justify-end'>
            {//endNaee
            }
            <p className='f3 link dim black underline pa3 pointer dark gray mid gray on hover '
            onClick={()=>onRouteChange('Signin')}>Sign in</p>
            <p className='f3 link dim black underline pa3 pointer dark gray mid gray on hover '
            onClick={()=>onRouteChange('Register')}>Register</p>
        </nav>
            );
        }
    
}
export default Navigation;