import {useState, useEffect} from "react"
export default function Day(props){


    return(
        <div className='task-cont'>
          <p>{props.day}</p>
          <div className={props.active ? "task-div on": "task-div"} key={props.day} id={props.id} onClick={props.toggle} style={{backgroundColor: props.active ? props.color : "#040b15"}}></div>
        </div>
    )
}
