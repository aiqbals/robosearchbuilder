import React, { Component } from 'react';
import { connect } from 'react-redux';
import Clock from '../components/clock/Clock';
import CardList from '../components/cardlist/CardList';
import Scroll from '../components/scroll/Scroll';
import Searchbox from '../components/searchbox/Searchbox';
//import {robots} from './robots';
import ErrorBoundry from '../components/errorboundry/ErrorBoundry';
import './App.css';

import {requestRobots, setSearchField} from '../action';

// parameter state comes from index.js provider store state(rootReducers)
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
class App extends Component {
    /* constructor(){
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    } */
    /* state = {
        robots: [],
        searchField: ''
    } */
    componentDidMount(){
        //console.log(this.props.store.getState()) - to check store reduceers 
        /* fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then( users => this.setState({ robots: users })); */
        this.props.onRequestRobots();
    }

    /* onSearchChange = (event) => {  
        //console.log(event.target.value);
        this.setState({searchfield: event.target.value});
    } */

    render() {
        //const { robots, searchField } = this.state;
        //const { robots } = this.props;
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobot = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });

        //return !this.state.robots.length ? 
        return (
            <div className='tc'>
                    <h1 className='f2'> RoboBuild Search! </h1>
                    <Searchbox searchChange={onSearchChange} />
                    <Clock />
                    <Scroll>
                        { isPending ? <h1> Loading...</h1> :
                            <ErrorBoundry>
                                <CardList robots={filteredRobot} />
                            </ErrorBoundry>
                        }
                    </Scroll>
                </div> 
        );  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// action done from mapDispatchToProps will channge state from mapStateToProps