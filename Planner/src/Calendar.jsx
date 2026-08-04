import {useState} from "react"
export default function Calendar(){
    const [on, setOn] = useState(false)
    function toggle(){
        setDays(prevOn => !prevOn)
    }
    const [days, setDays] = useState([
        {on:true, id:1},
        {on:true, id:2},
        {on:true, id:3},
        {on:true, id:4},
        {on:true, id:5},
        {on:true, id:6},
        {on:true, id:7},
        {on:true, id:8},
        {on:true, id:9},
        {on:true, id:10},
        {on:true, id:11},
        {on:true, id:12},
        {on:true, id:13},
        {on:true, id:14},
        {on:true, id:15},
        {on:true, id:16},
        {on:true, id:17},
        {on:true, id:18},
        {on:true, id:19},
        {on:true, id:20},
        {on:true, id:21},
        {on:true, id:22},
        {on:true, id:23},
        {on:true, id:24},
        {on:true, id:25},
        {on:true, id:26},
        {on:true, id:27},
        {on:true, id:28},
        {on:true, id:29},
        {on:true, id:30}
    ])

    const [month, setMonth] = useState(["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY"])
    const daysElement = days.map(day =>
            <div className="calendar-div" id={days.id} onClick={toggle} style={{backgroundColor: days.on ? "#0db5db" : "rgba(255, 255, 255, 0.137)"}}></div>
        )
    const monthElement = month.map(month =>
        <div className="container"> 
        <div>{month}</div>
        <div className='month-container'>
            {daysElement}
        </div>
        </div>
        
      )
    
      
    return(
    <div className="year-container">
        {monthElement}
    </div>
      )
    
}