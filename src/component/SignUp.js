import React from 'react'
import Cogent from '../Images/Cogent.png';
import "../css/Login.css"
import { useRef, useEffect, useState } from 'react';
import { post } from './Activity';



function SignUp() {
    return (
        <>
            <div className="container-fluid px-4">
                <div className="text-center"><img className="img" src={Cogent} style={{height:"20vh"}}></img></div>
                <div class="container-fuid">
                    <div class="row">
                        <div class="mx-auto col-md-4  col-12 bg-white px-1 py-2" >
                            <h2 class="mb-3 text-center">Create Account</h2>
                            <form className="py-1">
                                <div class="form-group py-1"> <input type="text" class="form-control" placeholder="User Name" id="form9" /> </div>
                                <div class="form-group py-1"> <input type="email" class="form-control" placeholder="Your Email Address" id="form9" /> </div>
                                <div class="form-group py-1"> <input type="text" class="form-control" placeholder="Mobile Number" id="form9" /> </div>
                                <div class="form-group py-1"> <input type="password" class="form-control" placeholder="Password" id="form10" /></div>  
                                <button type="submit" class="btn  btn-block btn-primary py-2" style={{color:"black",backgroundColor:"#297CBE"}}>Sign Up</button>
                            </form>
                      </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
