import React from 'react'
import Cogent from '../Images/Cogent.png';
import Background from '../Images/Intro.svg';
import "../css/Into.css"
function Intro() {
    return (
        <>
        <div className="background">
      <img className="positionImg" src={Cogent} />
        <div className="container-fluid  positionButton">
          <div className="row justify-content-md-center" >
              <div className="col-md-3 text-center pt-2 px-5" ><a className="btn btn-block bg-white font " href="#">Login In</a></div>
              <div className="col-md-3 text-center pt-2 px-5 "><a className="btn btn-block bg-white font " href="#">Sing Up</a></div>
          </div>
      </div>
        </div>
      </>
    )
}

export default Intro
