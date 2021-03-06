import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = state => {
	return {
	  searchField: state.searchRobots.searchField,
	  robots: state.requestRobots.robots,
	  isLoading: state.requestRobots.isLoading,
	  error: state.requestRobots.error
	}
  }

const mapDispatchToProps = (dispatch) => {
	return {
	onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
	onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	
	componentDidMount() {
		this.props.onRequestRobots();
	}


	render() {
		const {searchField, onSearchChange, robots, isLoading}= this.props;
		const filteredRobots = robots.filter(robot => {
		  return robot.name.toLowerCase().includes(searchField.toLowerCase())
		})
		  return (
			<div className="tc">
			   <h1>Robo Friends</h1>
			   <SearchBox searchChange={onSearchChange}/>
			   <Scroll>
				  { isLoading ? <h1>Loading...</h1> :
				  <ErrorBoundry>
					<CardList robots ={filteredRobots}/>
				  </ErrorBoundry>
				  }
			   </Scroll>
			 </div>
		  );
	  } 
};
	


export default connect(mapStateToProps, mapDispatchToProps) (App);