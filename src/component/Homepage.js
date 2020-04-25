import React from 'react'
import Content from './Content'
import { IoIosHeartEmpty} from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { Button } from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import {useState,useEffect} from 'react'
function Homepage() {
  const[but,setBut]= useState(true);
  
  const iconChange=()=>{
    if(but===false){
      setBut(true);
    }
    else{
      setBut(false);
    }
  }

  

    return (
       <>
        {Content.map( (prop,index) => (
            <div class="container-fluid py-4">
            <div class="row">
              <div class="col-md-12">
                <div class="card" style={{border:"solid",borderColor:"white"}}>
                  <div class="card-body  rounded shadow-lg" >

                    <div class="py-3">
                        <h3 class="card-title text-center" style={{color:"#297CBE"}}><b>{prop.name}</b></h3>
                        {but===true?<FcLike className="btn" size="3.5rem" style={{float:"right"}} onClick={{iconChange}}/>:<IoIosHeartEmpty className="btn" size="3.5rem" style={{float:"right"}} onClick={{iconChange}}/>}
                    </div>
                    <div class="container-fluid">
                      <div class="row inline-block">
                        <div class="col-md-6 d-inline-flex justify-content-center align-items-center col-6 py-1 mb-4">
                            <h5><b>{prop.deadline}</b></h5>
                        </div>
                        <div class="col-md-6 d-inline-flex align-items-center justify-content-center col-6 py-1 mb-4">
                                <h5 ><b>{prop.earned}</b></h5>
                        </div>
                      </div>
                    </div>
                    <center> <Link to={prop.path} class="btn" style={{backgroundColor:"#297CBE",color:"white"}}>View Details</Link></center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
       </>
    )
}

export default Homepage
