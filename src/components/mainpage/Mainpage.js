import React, { Component } from 'react';

import Clock from '../clock/Clock';
import CardList from '../cardlist/CardList';
import Scroll from '../scroll/Scroll';
import Searchbox from '../searchbox/Searchbox';
//import {robots} from './robots';
import ErrorBoundry from '../errorboundry/ErrorBoundry';
import './Mainpage.css';


class Mainpage extends Component {

    componentDidMount(){
        this.props.onRequestRobots();
    }

    filteredRobot = () => {
        return this.props.robots.filter( robot => {
        return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        })
    }  

    render() {
        const { searchField, onSearchChange, robots, isPending } = this.props;
        /* const filteredRobot = robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        }); */

        return (
            <div className='tc'>
                    <h1 className='f2'> RoboBuild Search! </h1>
                    <Searchbox searchChange={onSearchChange} />
                    <Clock />
                    <Scroll>
                        { isPending ? <h1> Loading...</h1> :
                            <ErrorBoundry>
                                <CardList robots={this.filteredRobot()} />
                            </ErrorBoundry>
                        }
                    </Scroll>
                </div> 
        );  
    }
}

export default Mainpage;