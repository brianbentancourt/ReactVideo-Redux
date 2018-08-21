import React from 'react';

function RegularError(props){
	return(
			<div>
				<h1 style={{color:'white'}}>Ha ocurrido un error :( </h1>
				<h2 style={{color:'white'}}> {props.handleMsg} </h2>
				<p style={{color:'white'}}>{props.errorInfo}</p>
			</div>
		)
}

export default RegularError;