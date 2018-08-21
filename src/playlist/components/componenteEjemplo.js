class Componente extends Components{

	constructor(){
	// Enlazo (bind) eventos y/o inicializo estado
	// como todo constructor, es primer metodo llamado al instanciar componente
	}
	componentWillMount(){
	// Se ejecuta antes de montar el componente (el componente todavia no se ve)
	// Se podría usar para hacer un setState()
	// no se recomienda hacer llamados a APIs
	}
	render(){
	// Contiene todos los elementos a renderizar (estructura del componente)
	// podría usarse para calcular propiedades (ej: concatenar una cadena)
	}
	componentDidMount(){
	//Solo se lanza una vez, luego de montarse el componente
	//Ideal para llamar a una API, hacer un setInteval, etc
	}

	//Actualización:
	componentWillReceiveProps(){
	//Es llamado cuando el componente recibe nuevas propiedades.

	}
	shouldComponentUpdate(){
	//Idea para poner una condición y  si las propiedades que le llegaron anteriormente
	// eran las mismas que tenia retornar false para evitar re-renderear el componente
	}
	componentWillUpdate(){
	//metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
	}

	// re-render si es necesario...

	componentDidUpdate(){
	//Método llamado luego del re-render
	}
	componentWillUnmount(){
	//Método llamado antes de desmontar el componente
	}
	componentDidCatch(){
	// Si ocurre algún error, lo capturo desde acá:
	}

}