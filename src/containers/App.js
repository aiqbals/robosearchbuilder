import React, { Component } from 'react';

import Clock from '../components/clock/Clock';
import CardList from '../components/cardlist/CardList';
import Scroll from '../components/scroll/Scroll';
import Searchbox from '../components/searchbox/Searchbox';
//import {robots} from './robots';
import ErrorBoundry from '../components/errorboundry/ErrorBoundry';
import './App.css';

class App extends Component {
    /* constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    } */
    state = {
        robots: [],
        searchfield: ''
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then( users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {  
        //console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredRobot = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return !this.state.robots.length ? <h1> Loading...</h1> :
            (
                <div className='tc'>
                    <h1 className='f2'> RoboBuild Search! </h1>
                    <Searchbox searchChange={this.onSearchChange} />
                    <Clock />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobot} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );    
    }
}

export default App;