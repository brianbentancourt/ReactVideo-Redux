import React from 'react';
import Media from './media.js'
import './playlist.css';

function Playlist(props){
	return(
			<div className="Playlist">
				<h3> {props.title}</h3>
				<p> {props.description}</p>
					{
						props.playlist.map((item)=> {
							return(
									<Media 
										openModal={props.handleOpenModal}
										{...item} 
										key={item.id} 
									/>
								) 
						})
					}
				
			</div>
		)
}


/*
class Playlist extends Component{
	render(){
		return(
			<div className="Playlist">
				<h3> {this.props.title}</h3>
				<p> {this.props.description}</p>
					{
						this.props.playlist.map((item)=> {
							return(
									<Media 
										handleClick={this.props.handleOpenModal}
										{...item} 
										key={item.id} 
									/>
								) 
						})
					}
				
			</div>
			)
	}
}
*/

export default Playlist;