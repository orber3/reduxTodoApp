 const AddAction = (item,id) => { 

    return { 
        
        type: "ADD_ITEM",
        payload: item,
        id: id,
      
            }
    
    }

    const RemoveAction = (item) => { 
        return { 
            
            type: "REMOVE_ITEM",
            id: item,
          
                }
        
        }
    

        const ClearAction = (item,id) => { 

            return { 
                
                type: "CLEAR_ITEM",
                    }
            
            }
    export default {AddAction,RemoveAction,ClearAction}