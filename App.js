import React from 'react';

// Class Component example using JSX (HTML Like Syntax) transpiled to JS
// Class component can have state
// Ctrl / Ctrl Shift /

class App extends React.Component {
	render(){
		// render is only allowed to return a single node
		// this is because JSX is a function React.createElement
		// cannot return two functions.  
		//To resolve wrap into single node
		return (
			<div>
				<h1>Hello World</h1>
				<b>bold</b>
			</div>
			);
	}
}

// Stateless function component
// const App = () => <h1>Hello Dude</h1>


export default App