import { useState } from 'react'
import Task from './Task'
import Calendar from './Calendar'


function Planner() {
  const [tasks, setTasks] = useState([
    <Task taskName={"Workout"} color={"#2aac78"}/>
  ])
 const taskColor = ["#e08d79", "#A882DD", "#B3F2DD", "#2aac78", "#84E296", "#FF5666", "#FFC857"]
 function getTaskColor(){
  return taskColor[Math.floor(Math.random() * taskColor.length)]
 }
 getTaskColor()
  const nameTask = "Study"
  function addTask(){
    setTasks(prevTasks=>[...prevTasks, <Task key={nameTask} taskName={nameTask} color={getTaskColor()}/>])
  }

  return (
    <div className='container'>
      <p><button>{"<"}</button> July 1-7 <button>{">"}</button> </p>
    {/* <Calendar/> */}
      {tasks}
      <div className='task-container' onClick={addTask}><button>+</button> add new task</div>
    </div>
  )
}

export default Planner
