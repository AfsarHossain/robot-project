import React,{ Component } from 'react';
import CardList from '../component/CardList';
import SearchBox from '../component/SearchBox';
import Scroll from '../component/Scroll';
import { robot } from '../robot';
import './App.css';

class App extends Component {

    constructor() {
        super()
        this.state = {
            robot: robot,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { robot, searchfield } = this.state;
        const filteredRobots = robot.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1> 
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robot={filteredRobots}/>
                </Scroll>
            </div> 
        ); 
    }
}

export default App;