import React from 'react';

const Pet = (props) => {
	return(
		<div>
			<h1>{props.name}</h1>
			<h2>{props.animal.toUpperCase()}</h2>
			<h1>{props.breed}</h1>
		</div>
		);
}

export default Pet;