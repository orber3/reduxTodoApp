const initialState = {
    items: [] 
    
  };

  function removeItemFromList(state, action)  { 


  }



const list4 = ( state = initialState, action ) => {  

    switch(action.type) {
        case "ADD_ITEM": 
            return { 
                ...state , 
                items: [
                ...state.items,
                {            
                  mission: action.payload,
                  id: action.id
             
                }
              ]
            }

            case "REMOVE_ITEM": 
                   return { 
              ...state , 

                items: state.items.filter(item => item.id !== action.id ) 
            }
            

                case "CLEAR_ITEM": {
                    return {
                        ...state , 
                      items: []
                    }
                }
            default:
                return       state
        }
    }
    export default list4;
    
    
    