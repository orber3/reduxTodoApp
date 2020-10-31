
import React,{useState , useEffect} from 'react';


const Item = ({ item, onRemove}) => (



<div className = "item"  key= {item.id} >
      <li key={item.id}>  
          {item.mission}
         {item.id}
          </li>
          <button class="ui right floated button red" onClick= {() => onRemove(item.id)} > remove</button>
          </div>

)
export default Item