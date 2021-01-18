import React from 'react';

const Scroll = (props) => {
    //console.log(props);
    
    return (
        <div style={ {overflow: 'scroll', border: '3px solid cyan', height: '930px'} }>
            {props.children}
        </div>
    );
}

export default Scroll;