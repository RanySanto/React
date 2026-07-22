import React, { useState } from "react"
import ReactDOM from "react-dom/client"

export default function Login(props) {

    function verifyAcc(formData){
        const username = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password")

        if (
            username === props.data.username &&
            email === props.data.email &&
            password === props.data.password 
        ) {
            console.log("Logged")
        } else {
            console.log("Wrong credentials")
        }
    }

    return (
        <section>
            <form action={verifyAcc}>
                <h1>Login</h1>
                <input id="username" type="username" name="username" placeholder="Username"/>
                <input id="email" type="email" name="email" placeholder="Email"/>
                <input id="password" type="password" name="password"  placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        </section>
        
    )
}
