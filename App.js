
import React from 'react';
import ReactDOM from 'react-dom';

// Component lifecycle - mounting basics
class App extends React.Component{
	constructor(){
		super();
		this.state = {val: 0};
		this.update = this.update.bind(this);
	}
	update(){
		this.setState({val: this.state.val +1})
	}
	componentWillMount() {
		this.setState({m: 2})
	}
	render(){
		console.log('rendering!')
		return (
		<button onClick={this.update}>
		{this.state.val * this.state.m}
		</button>)
	}
	componentDidMount() {
		this.inc = setInterval(this.update,500)
	}
	componentWillUnmount() {
		clearInterval(this.inc)
		// requires a wrapper - see https://egghead.io/lessons/react-component-lifecycle-mounting-basics @2:45
	}
}

class Wrapper extends React.Component {
  constructor(){
  	super();
  }
  mount(){
  	ReactDOM.render(<App />, document.getElementById('a'))
  }
  unmount(){
  	ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return (
    	<div>
    		<button onClick={this.mount.bind(this)}>Mount</button>
    		<button onClick={this.unmount.bind(this)}>Unmount</button>
    		<div id="a"></div>
    	</div>
    )
  }
}

ReactDOM.render(
	<Wrapper />,
	document.getElementById('app')
);

//export default App
// export default Wrapper

/*  PREVIOUS STUFF...

// Access child properties - angular transclusion
class App extends React.Component{
	render(){
		return (
			<Button>I <Heart/> React</Button>
		)
	}
}

class Button extends React.Component{
	render(){
		return <button>{this.props.children}</button>
	}
}

const Heart = () => <span className="glyphicon glyphicon-heart">
GLYPH-HEART</span>

ReactDOM.render(
	<App />,
	document.getElementById('app')
);



//Owner Ownee relationship 
class App extends React.Component{
	constructor(){
		super(); // give context to this
		this.state = {
			red: 0,
			green: 0,
			blue: 0
		} // set state to an object
		this.update = this.update.bind(this) // So we can change onChange with shorthand
	}
	update(e){ // manage state; take in an event
		this.setState({
			red:ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green:ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue:ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
		// do not have to pass entire state, will merge with cat
	}
	render(){
		return (
			<div>
				
				<hr />
				<Slider ref="red" update={this.update} />
				{this.state.red}
				<br />
				<Slider ref="green" update={this.update} />
				{this.state.green}
				<br />
				<Slider ref="blue" update={this.update} />
				{this.state.blue}
				<br />
			</div>
			)
	}
}

class Slider extends React.Component{
	render(){
		return (
			<div>
				<input ref="inp" type="range"
					min="0" 
					max="255"
					onChange={this.props.update} />
			</div>
			)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);






import React from 'react';
import ReactDOM from 'react-dom';

//Owner Ownee relationship 
class App extends React.Component{
	constructor(){
		super(); // give context to this
		this.state = {
			txt: 'this is the state txt',
			cat: 0
		} // set state to an object
		this.update = this.update.bind(this) // So we can change onChange with shorthand
	}
	update(e){ // manage state; take in an event
		this.setState({txt: e.target.value})
		// do not have to pass entire state, will merge with cat
	}
	render(){
		return (
			<div>
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
				<Widget txt={this.state.txt} update={this.update} />
			</div>
			)
	}
}

// adding a stateless component
const Widget = (props) => {
	return (
			<div>Type in me... <br />
			<input type="text" 
				onChange={props.update} />
			<h2>{props.txt}</h2>
			</div>
			)
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
);

//export default App
*/

/*  PREVIOUS STUFF...

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