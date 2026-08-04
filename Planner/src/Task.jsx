import { useState } from 'react'
import Day from './Day'

function Task(props) {
  // função pra criar uma task
  // a cor é definida aleatoriamente
  

  const [days, setDays] = useState([{day:'MO', on:true, id:1}, {day:'TUE', on:false, id:2}, {day:'WED', on:false, id:3}, {day:'THUR', on:false, id:4}, {day:'FRI', on:false, id:5}, {day:'SAT', on:false, id:6}, {day:'SUN', on:false, id:7}])

  const daysElement = days.map(day =>
    <Day id={day.id} day={day.day} on={day.on} styles={{backgroundColor: day.on ? props.color : "#040b15"}}/>
  )

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
