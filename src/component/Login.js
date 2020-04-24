import React from 'react'
import Cogent from '../Images/Cogent.png';
import "../css/Login.css"
import { useRef, useEffect, useState } from 'react';
// import { post } from './Activity';

function Login() {

    const inputRef = useRef(null)
    const [number, setNumber] = useState('');
    const [pwd, setPwd] = useState('');
    const [success, setSuccess] = useState(-1);
  
    useEffect(() => {
      inputRef.current.focus();           //for foucing as soon as user land on page
    }, [])
  
    // // const submitHandler = (event) => {
    // //   event.preventDefault();
    // //   post('', {
    // //     number: number,
    // //     password: pwd
    // //   }
    // //   ).then(data => {
    // //     console.log();
    // //     setSuccess(1);
    // //     //href...new page....
    // //   })
    // //     .catch(error => {
    // //       console.log(error);
    // //     });
    // }

    return (
        <>
            <div className="container-fluid px-4">
                <div className="text-center"><img className="img" src={Cogent} style={{height:"20vh"}}></img></div>
                <div class="container-fuid">
                    <div class="row">
                        <div class="mx-auto col-md-6  col-12 bg-white px-1 py-2" >
                            <h1 class="mb-3 text-center">Welcome</h1>
                            <form>
                                <div class="form-group"> <input  ref={inputRef} type="email" class="form-control" placeholder="Enter email" id="form9" /> </div>
                                <div class="form-group "> <input type="password" class="form-control" placeholder="Password" id="form10" /> <small class="form-text text-muted text-right">
                                    <a href="#"> Forgot Password ?</a>
                                </small> </div> <button type="submit" class="btn  btn-block btn-primary" style={{color:"black",backgroundColor:"#297CBE"}}>Login In</button>
                            </form>
                           <div className="container-fluid">
                               <div className="row py-2">
                            <p className="">Don't Have an account ? &nbsp;</p> <a href="#"> Create New</a></div>
                        </div>
                      </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
