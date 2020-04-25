import React from 'react';
import Content2 from './Content2';
import { FaTemperatureHigh } from 'react-icons/fa';
function Card(props) {
    console.log(props);
    return (
        <>
        {Content2.map( (prop,index) => {
           if(prop.name===props.title)
            return <div class="container-fluid py-4">
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
            <div class="row">
              <div class="col-md-12">
                <div class="card" style={{border:"solid",borderColor:"white"}}>
                  <div class="card-body  rounded shadow-lg" >

                    <div class="py-3">
                        <h3 class="card-title text-center" style={{color:"#297CBE"}}><b>{prop.name}</b></h3>
                        {/* {prop.fav==="1"?<FcLike/>:<IoIosHeartEmpty/>} */}
                    </div>
                    <div className="text-center">
                        <p>{prop.docs}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
})}
        </>
    )
}

export default Card
