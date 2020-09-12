import React, { memo } from 'react';


function E(props){
    console.log('E render');
      
    return (
       <div className="d">
       {props.data}
       </div>
    );
}

export default memo(E);
