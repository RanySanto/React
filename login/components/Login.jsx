import React, { useState } from "react"
import ReactDOM from "react-dom/client"

export default function Login() {
    const [data, setData] = useState({})
    function handleSubmit(formData){
       const username = formData.get("username")
       const email = formData.get("email")
       const password = formData.get("password")

       function registerAccount(){
        setData(
        {
        "username":username,
        "email":email,
        "password":password
       })
       }
    }
    function verifyAcc(){

    }

    return (
        <section>
            <form action={handleSubmit}>
                <h1>Create an account</h1>
                <p>Already have a account? <a href="#">Log in</a></p>
                <input id="username" type="username" name="username" placeholder="Username"/>
                <input id="email" type="email" name="email" placeholder="Email"/>
                <input id="password" type="password" name="password"  placeholder="Password"/>
                <button type="submit">Create an account</button>
            </form>
        </section>
        
    )
}