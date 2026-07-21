import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import Login from "./Login"
import Register from "./Register"
export default function LoginPage() {
    const [isLogged, setIsLogged] = useState(false)
    const [data, setData] = useState({})
    function handleSubmit(formData){
       const username = formData.get("username")
       const email = formData.get("email")
       const password = formData.get("password")
       setData(
        {
        "username":username,
        "email":email,
        "password":password
       })
    }
    function verifyAcc(){
        // verify if current form has a match in the database
    }
    function registerAccount(){
        
       console.log(data)
       }
    return (
        <>
        {
        isLogged 
        ? <Login 
            
        /> 
        : <Register
            handleSubmit={handleSubmit}
        />}
        </>
        
    )
}