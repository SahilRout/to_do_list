import React from 'react'
import {Todo} from './Todo';
export const Todos = (props) => {
    return ( 
       <div className="container">
           <h3 className="text-center my-4 ">Todos List</h3>  
           {props.todos.length===0?<h2 className="text-center">No Todos To Display</h2>: props.todos.map((todo)=>{
               return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
           })}
       </div>
    )
}