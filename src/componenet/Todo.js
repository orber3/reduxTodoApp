import React, {useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../actions'
import { useHistory } from "react-router-dom";


const Todo  = ( ) => { 
    const [item, setItem] = useState("");
    const dispatch = useDispatch()
    const history = useHistory();

const handlechange = (e ) => { 

    setItem(e.target.value)

    }
const handleSubmit = ( ) => { 
    const id= Date.now() 
    dispatch(allActions.TodoAction.AddAction(item, id))
 history.push('/show')
}



    return ( 
<> 
<div className = "ui input focus" >
    <input type="text" value={item.text} onChange = {handlechange} />

</div>
<div> 

<button className = 'ui primary button'  item = {item} onClick ={handleSubmit}>submit</button>
</div>

</>
    
    )






}


export default Todo