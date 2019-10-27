const INTITIAL_STATE = {
    user : ""
  }


  
  const reducer = (state = INTITIAL_STATE,action) =>{
    switch(action.type){     
      case "SET_USER" : return {...state, user: action.data}
    }
      return state
  
  }

  export default reducer

  