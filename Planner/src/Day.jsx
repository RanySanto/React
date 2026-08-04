import {useState, useEffect} from "react"
export default function Day(props){
    const [on, setOn] = useState(props.on)
    function toggle(){
        setOn(prevOn => !prevOn)
    }
   
    
    return(
        <div className='task-cont'>
          <p>{props.day}</p>
          <div className={on ? "task-div on": "task-div"} key={props.day} id={props.id} onClick={toggle} ></div>
        </div>
    )
}
