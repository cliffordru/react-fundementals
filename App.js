
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super(); // give context to this
		this.state = {
			txt: 'this is the state txt',
			cat: 0
		} // set state to an object
	}
	update(e){ // manage state; take in an event
		this.setState({txt: e.target.value})
		// do not have to pass entire state, will merge with cat
	}
	render(){
		return (
			<div>
			<input type="text" 
				onChange={this.update.bind(this)} />
			<h1>{this.state.txt}</h1>
			</div>
			)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

//export default App



/*

import React from 'react';
import ReactDOM from 'react-dom';

// Class Component example using JSX (HTML Like Syntax) transpiled to JS
// Class component can have state
// Ctrl / Ctrl Shift /

class App extends React.Component {
	render(){
		// render is only allowed to return a single node
		// this is because JSX is a function React.createElement
		// cannot return two functions.  
		//To resolve wrap into single node
		let txt = this.props.txt
		return (
			<div>
				<h1>{txt}</h1>
			</div>
			);
	}
}

App.propTypes = {
	txt: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
	txt: 'this is the default txt'
}

ReactDOM.render(
	<App cat={5} />,
	document.getElementById('app')
);

// Stateless function component
// const App = () => <h1>Hello Dude</h1>


//export default App

*/