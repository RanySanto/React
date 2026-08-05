import { useState } from 'react'
import Day from './Day'

function Task(props) {
  // função pra criar uma task
  // a cor é definida aleatoriamente
  
      const [on, setOn] = useState(false)
    function toggle(){
        // setOn(prevOn => !prevOn)
        console.log("clicked")
    }

  

  const [days, setDays] = useState([{day:'MO', active:false, id:1}, {day:'TUE', active:false, id:2}, {day:'WED', active:false, id:3}, {day:'THUR', active:false, id:4}, {day:'FRI', active:false, id:5}, {day:'SAT', active:false, id:6}, {day:'SUN', active:false, id:7}])

  const daysElement = days.map(day =>
    <Day toggle={toggle} id={day.id} day={day.day} active={day.active} color={props.color}/>
  )

   
  //   

  return (
    <>
      <div className='task-container'>
        <div className='tasks-header'><p>{props.taskName}</p> <span className='streak'>1</span></div>
        <div className='week-container'>
          {daysElement}
        </div>
      </div>
    </>
  )
}

export default Task
