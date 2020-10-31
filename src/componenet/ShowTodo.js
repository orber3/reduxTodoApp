import React, {useEffect,useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import allActions from '../actions'
import Item from './item'

const ShowTodo  = ( ) => {
    
    const list = useSelector(state => state.list4)
    const dispatch = useDispatch()

    const onRemove = (id) => {
        dispatch(allActions.TodoAction.RemoveAction(id));
        console.log(id)
      };
    

return (
    <>
  <div className="m-4" variant="flush">
  <div className = "ui celled list" > 
      {list.items.map((item) => ( 
      <Item key={item.id} item= { item} onRemove={onRemove}  /> 
      ))}
      </div>

</div>
<button className=" negative ui button" onClick = { () => dispatch(allActions.TodoAction.ClearAction())  }> Clear LIST </button>


    </>
     ) }
export default ShowTodo