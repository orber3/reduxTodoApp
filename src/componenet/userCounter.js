import React, {useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../actions'


const UserCounter  = (gor ) => { 

    const [user, setUser] = useState('')
    const counter = useSelector(state => state.counter)
   const currentUser = useSelector(state => state.currentUser)
   const dispatch = useDispatch()


const handlechange = (e) => { 

const gor = (e.target.value)
setUser(gor)
console.log( user)

}


return (
 <div> 
   
   <div> 
{ currentUser.loggedIn ?  

<button onClick={() => dispatch(allActions.UserActions.logOut())}>log out  </button>



: 
<>
<button onClick={() => dispatch(allActions.UserActions.setUser(user))}>log in</button>
<textarea value={gor.name} onChange = {handlechange}> enter name </textarea> 
</>
}


 
</div>
<div> 
   <h1>Counter: {counter}</h1>

   <button onClick={() => dispatch(allActions.CounterActions.increment())}>Increase Counter</button>
   <button onClick={() => dispatch(allActions.CounterActions.decrement())}>Decrease Counter</button>
</div>
</div>
)
}

export default UserCounter