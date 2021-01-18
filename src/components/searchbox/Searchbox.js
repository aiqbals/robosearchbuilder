import React from 'react';
import './searchbox.css';

const Searchbox = ({searchChange, searchfield}) => (
    <div className='pa2'>
        <input 
            className='pa3 ba b--green bg-lightest-blue' 
            type='search' 
            placeholder='search robots'
            onChange={searchChange} 
            />
    </div>  
);

export default Searchbox;