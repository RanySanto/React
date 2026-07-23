import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import Login from "./Login"
import Register from "./Register"
export default function LoginPage() {
    const [isLogged, setIsLogged] = useState(false)
    const [data, setData] = useState([])
    useEffect(()=>{
        localStorage.setItem("data", JSON.stringify(data))
    }, [data])
    useEffect(()=>{
        const savedData = localStorage.getItem("data")
        if (savedData) {
            setData(JSON.parse(savedData))
        }
    },[])

    function handleSubmit(formData){
       const username = formData.get("username")
       const email = formData.get("email")
       const password = formData.get("password")
       setData(prev=> [
        ...prev,
        {
        "username":username,
        "email":email,
        "password":password
       }])
       setIsLogged(true)
    }
    
    function flipIsLogged(){
        setIsLogged(prevIsLogged=>!prevIsLogged)
    }
    return (
        <>
        {
        isLogged 
        ? (<Login 
            return={flipIsLogged}
            data={data}
        /> )
        : (<Register
            return={flipIsLogged}
            handleSubmit={handleSubmit}
        />)}
        </>
        
    )
}
