import React, { use, useState } from "react"
import ReactDOM from "react-dom/client"

export default function Login(props) {
    const [hasAccount, setHasAccount] = useState(false)
    function verifyAcc(username, email, password){
    
            // verify if current form has a match in the database
        }
    function verifyAcc(formData){
        const username = formData.get("username")
        const email = formData.get("email")
        const password = formData.get("password")

        for(let i = 0; i < props.data.length; i++){
                if(
                    username=== props.data[i].username 
                    && email=== props.data[i].email 
                    && password=== props.data[i].username
                ){
                    setHasAccount(true)
                    break
                }
                else setHasAccount(false)
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
            {hasAccount ? <span>Login Successful</span> : <span>Please create an account: <a onClick={props.return}>Register</a> </span>}
        </section>
        
    )
}
