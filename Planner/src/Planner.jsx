import { useState } from 'react'

function Task() {
  // função pra criar uma task
  // a cor é definida aleatoriamente
  

  const [days, setDays] = useState(['MO', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'])

  const styles = {
      backgroundColor: "#040b15"
    }

  
  function toggle(){

  }
  const daysElement = days.map(day =>
    <div className='task-cont'>
          <p>{day}</p>
          <div className='task-div' key={day} onClick={()=>{toggle()}} ></div>
        </div>

  )

  return (
    <>
      <div className='task-container'>
        <div className='tasks-header'><p>Morning Workout</p> <span className='streak'>1</span></div>
        <div className='week-container'>
          {daysElement}
        </div>
      </div>
      <div className="task-container"></div>
    </>
  )
}

export default Task
