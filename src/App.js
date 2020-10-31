import React, {Component, useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import allActions from './actions'
import UserCounter from './componenet/userCounter';
import Todo from './componenet/Todo'
import ShowTodo from './componenet/ShowTodo';

const App = () => {
const [user, setUser] = useState('')
   const counter = useSelector(state => state.counter)
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  const gor = ''
const list = useSelector(state => state.list)



return ( 
 <>
 
 <div className="ui inverted menu">
  <a class="active item" href='/'>
    Home
  </a>
  <a className="item" href = '/'>
    User
  </a>
  <a className="item" href = '/Todo'>
    Todo
  </a>
  
  <a className="item" href='show'>
    ShowTodo
  </a>
</div>

  <Switch>
        <Route path="/" component={UserCounter} exact />
                <Route path="/Todo" component={Todo} />
                <Route path="/show" component={ShowTodo} />
      </Switch>
 
 </>
)

}
export default App;