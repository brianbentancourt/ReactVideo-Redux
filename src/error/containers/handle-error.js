import React, {Component} from 'react';
import RegularError from '../components/regular-error';


class HandleError extends Component{
	state=({
		handleError: false,
		errorMsg: '',
		errorInfo: ''
	})
	componentDidCatch(error, info){
		this.setState({
			handleError: true,
			handleMsg: error.toString(),
			errorInfo: info.componentStack
		})

		// enviar error a servicio como sentry
	}

	render(){
		if(this.state.handleError){
			return(
				<RegularError {...this.state} />
			)
		}
		return this.props.children
		
	}
}

export default HandleError;