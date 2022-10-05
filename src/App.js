import "./App.css";
import { useState } from "react";
import { Task } from "./Task"

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");


  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // function to add new task
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    }
    // use spread operator to add new todolist
    const newTodoList = [...todoList, task];
    setTodoList(newTodoList);

    
  };

  // delete task
  const deleteTask = (id)=>{
    const newTodoList = todoList.filter((task)=>{
      // if(task === taskName){
      //   return false;

      // }else{
      //   return true;

      // }
      return task.id !== id;

    });
    setTodoList(newTodoList);
  }

  const completeTask = (id)=>{
    setTodoList(
      todoList.map((task)=>{
        if(task.id === id){
          return { ...task, completed:true};
        }
        
        else{
          return task;
        }
        
      })
      
    )
  }

   
  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button className="addTaskBtn" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div className="list">
        {/* loop through each task of the todolist using map() */}
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
