import React from 'react';

const Scroll = (props) => {
    //console.log(props);
    
    return (
        <div style={ {overflow: 'scroll', border: '3px solid cyan', height: '940px'} }>
            {props.children}
        </div>
    );
}

export default Scroll;