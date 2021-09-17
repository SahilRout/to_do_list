import "./App.css";
import { Header } from "./AppComponents/Header";
import { Todos } from "./AppComponents/Todos";
import { AddToDo } from "./AppComponents/AddToDo";
import { Footer } from "./AppComponents/Footer";
import React, { useState,useEffect } from "react";
function App() {
  let initTodo
  if(localStorage.getItem("todos")===null)
  {
initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("OnDelete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addToDo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    console.log(sno);
    const myTodo = {
      sno: sno,
      title: title,
      description: desc,
    };
    setTodos([...todos, myTodo]);
   
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  let pageStyle = {
    background: " linear-gradient(to right, #b993d6, #8ca6db)",
  };
  return (
    <>
      <div style={pageStyle}>
        <Header title="Todos List" searchBar={false} />
        <AddToDo addToDo={addToDo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer />
      </div>
    </>
  );
}

export default App;
