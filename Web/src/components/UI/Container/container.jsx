import React from 'react';

import './container.css';


const UiContainer = ({ children }) => {
    return ( 
        <>

        <div className="ui-container">
            {children}
        </div>

        </>
     );
}
 
export default UiContainer;