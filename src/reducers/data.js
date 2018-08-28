function data(state, action){
  switch(action.type){
    case 'SEARCH_VIDEO':{
      const results = state.data.categories.map((cat)=>{
        cat.playlist.filter((item) => {
          return item.title.includes(action.payload.query)
        })
      })
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
