import { useState } from 'react'

function Planner() {
  // função pra criar uma task
  // a cor é definida aleatoriamente
  
  const styles = {
    backgroundColor:"red",
    border:"none"
  }

  const [days, setDays] = useState(['MO', 'TUE', 'WED', 'THU', 'FRI'])
  const [on, setOn]= useState(false)

  days.map(()=>{{}})
  function toggle(){
    setOn(prevOn=>!prevOn)
    console.log("hello")
  }

  return (
    <>
      <div className='task-container'>
        <div className='tasks-header'><p>Morning Workout</p> <span className='streak'>1</span></div>
        <div className='week-container'>
        <div className='task-cont'>
          <p>MO</p>
          <div className='task-div' onClick={toggle} style={on ? {backgroundColor:"#0db5db"} : {backgroundColor:"#040b15"}} ></div>
        </div>
        </div>
      </div>
      <div className="task-container"></div>
    </>
  )
}

export default Planner
