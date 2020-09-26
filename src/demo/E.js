import React, { memo } from 'react';


function E(props){
  
    return (
       <div className="d">
       Surname: {props.data}
       </div>
    );
}

export default memo(E);
