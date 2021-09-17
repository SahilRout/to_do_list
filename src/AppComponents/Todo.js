import React from 'react'

export const Todo = ({todo,onDelete}) => {
    return ( 
        <div> 
            <h4>{todo.sno}. {todo.title}</h4>
            <p className="my-2">{todo.description}</p>
            <button className="btn btn-sm btn-danger my-2" onClick={()=>{onDelete(todo)}}>Delete</button><hr />
        </div>
    )
}