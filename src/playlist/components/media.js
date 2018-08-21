import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component{
	state = {
		title: this.props.title
	}

	handleClick = (event) =>{
		this.props.openModal(this.props);
	}

	render(){
		const styles = {
			container:{ 
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: '1px solid Red'
			}
		}
		return (
			<div className="Media" onClick={this.handleClick}>
				<img
					src={this.props.cover}
					alt=""
					className="image"
				/>
				<div className="titulo">{this.props.title}</div>
				<div className="overlay">
    				<div className="text">{this.props.text}</div>
  				</div>
			</div>
			)
	}
}


// https://reactjs.org/docs/typechecking-with-proptypes.html
Media.propTypes ={
	cover: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string,
	type: PropTypes.oneOf(['video','audio']),
}

export default Media;