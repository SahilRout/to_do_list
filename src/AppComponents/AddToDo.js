import React, { useState } from 'react';

export const AddToDo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const Submit=(e)=>{
        e.preventDefault();
        if(!title||!desc)
        {
            alert("Title OR Description Empty");
        }
        else{
        props.addToDo(title,desc); 
        setTitle("");
        setDesc(""); 
        }
    }
    let formStyle={
       paddingLeft:"10%",
       paddingRight:"10%"
    }
    return (
        <div className="Container my-3" style={formStyle}>
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={Submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="title">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                    </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc}  onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success btn-sm">ADD-TASK</button>
            </form>
        </div>
    )
}
