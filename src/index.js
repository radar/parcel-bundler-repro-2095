import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet.js';
import pf from 'petfinder-client';

const petfinder = pf({
	key: process.env.API_KEY,
	secret: process.env.API_SECRET
})


class App extends React.Component{
	handleTitleClick(){
		alert("you clicked the title. Nice one. Good job.");
	}

	render(){
		return(
			<div>
				<h1>Pet store :)</h1>
				<Pet name="Lola" animal="dog" breed="Collie" />
				<Pet name="Woofer" animal="dog" breed="Beardie" />
				<Pet name="Meower" animal="cat" breed="Whitecat" />
			</div>
			);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));