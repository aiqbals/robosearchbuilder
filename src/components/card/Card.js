import React from 'react'; // to process JSX element
import { shallow, mount, render } from 'enzyme';

const Card = (props) => {
    const {id, name, email} = props; //destruturing
    //const Card = ({id, name, email}) => {} //destruturing, it can also be added as func parametter

    return(
        //<h1> Robo search building </h1>
        <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
            <div>
                <h3>{name}</h3>
                <h3>{email}</h3>
            </div>
        </div>
    );
}

export default Card;