//import {Component} from 'react';
import './clock.css';

//class based component
/* class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    render() {
        return (
            <div className='f1 tc'>
                <h1> Hello World! </h1>
                <h2> {this.props.greeting} </h2>
                <h3> It is {this.state.date.toLocaleTimeString('EU')} </h3>
            </div>
        );
    }
} */

//functional component
const Clock = (props) => {
    let state = {
        date: new Date()
    }
    return (
        <div className='f1 tc datecol'>
            <p> {state.date.toLocaleTimeString('EU')} </p>
        </div>
    );
}

export default Clock;