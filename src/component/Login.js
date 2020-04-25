import React from 'react'
import Cogent from '../Images/Cogent.png';
import "../css/Login.css"
import { useRef, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

function Login() {

    const inputRef = useRef(null)
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [success, setSuccess] = useState(0);

    const inputHandler = (event, number) => {
        if (number === 0)
            setEmail(event.target.value);
        else
            setPwd(event.target.value);
    };
     const submitHandler = (event) => {
      event.preventDefault();
      console.log("email",email);
      console.log("pass",pwd);
         if(email==='abc@gmail.com' && pwd==='123'){
            // localStorage.setItem("token","abcdfjf");
            setSuccess(1);
             console.log("connect",success);
         }                                                           //can be easily done with axios but for now
    }

    if(success===1){
       return  (<><Redirect to="/Layout"/></>)
    }
    return (
        <>
            <div className="container-fluid px-4">
                <div className="text-center"><img className="img" src={Cogent} style={{height:"20vh"}}></img></div>
                <div class="container-fuid">
                    <div class="row">
                        <div class="mx-auto col-md-6  col-12 bg-white px-1 py-2" >
                            <h1 class="mb-3 text-center">Welcome</h1>
                            <form onSubmit={submitHandler} id="loginForm">
                                <div class="form-group"> <input  ref={inputRef} type="email" class="form-control" placeholder="Enter email" id="UserEmail" onChange={(event)=>inputHandler(event,0)} /> </div>
                                <div class="form-group "> <input type="password" class="form-control" placeholder="Password" id="UserPass"  onChange={(event) => inputHandler(event, 1)}  /> <small class="form-text text-muted text-right">
                                    <Link to="/notFound"> Forgot Password ?</Link>
                                </small> </div> <button type="submit" class="btn  btn-block btn-primary" style={{color:"black",backgroundColor:"#297CBE"}}>Login In</button>
                            </form>
                           <div className="container-fluid">
                               <div className="row py-2">
                            <p className="">Don't Have an account ? &nbsp;</p> <Link to="/SignUp"> Create New</Link></div>
                        </div>
                      </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login