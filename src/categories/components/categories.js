import React from 'react';
import Category from './category';
import './categories.css';
import Search from '../../widgets/containers/search';
import Media from '../../playlist/components/media.js';

function Categories(props){
    return(
        <div className="Categories">
            <Search />
          {
            props.search.map((item)=>{
              //console.log(item.toJS());
              //return <Media {...item.toJS()} key={item.get('id')} openModal={props.handleOpenModal}/> // genera un objeto nuevo con toJS() cada vez que lo llamamos
              return <Media
                        title={item.get('title')}
                        text={item.get('text')}
                        cover={item.get('cover')}
                        key={item.get('id')}
                        id={item.get('id')}
                        openModal={props.handleOpenModal}
                      />
            })
          }
          {
            props.categories.map((item) => {
                return(
                    	<Category
                    			key={item.get('id')}
                    			description={item.get('description')}
                          title={item.get('title')}
                          playlist={item.get('playlist')}
                    			handleOpenModal={props.handleOpenModal}
                    	/>
                    	)
                })
          }
        </div>
    )
}

export default Categories;
