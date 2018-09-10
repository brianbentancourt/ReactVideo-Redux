import schema from '../schemas/index';
import { fromJS } from 'immutable';

const initialState = fromJS({
    entities: schema.entities,
    categories: schema.result.categories,
    search:[]
})

function data(state = initialState, action){
  switch(action.type){
    case 'SEARCH_VIDEO':{
      let results = [];
      if (action.payload.query) {
        const categories = state.data.categories
        categories.map(category => {
          let tempResults = category.playlist.filter(item => {
            return item.title.toLowerCase().includes(action.payload.query.toLowerCase())
          })
          results = results.concat(tempResults)
        })
      }
      return {
        ...state,
        search:results
      }
    }
    default:
      return state
  }
}

export default data;
