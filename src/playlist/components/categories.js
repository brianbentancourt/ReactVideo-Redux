import React, { Component} from 'react';
import Playlist from './playlist.js'

class Categorie extends Component{
	render(){
		const data = this.props.data.categories;
		return(
			<div >
				{
					data.map((item)=> {
						return <Playlist {...item} key={item.id} />
					})
				}
			</div>
			)
	}
}

export default Categorie;