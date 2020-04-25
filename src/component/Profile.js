import React from 'react'
import dashboard from '../Images/dashboard.svg'
import ImageEditor from './ImageEditor';
function Profile() {
    return (
        <div class="py-3" >
          <ImageEditor/>
    <div class="container">
      <div class="row">
        <div class="col-md-7 col-12 mx-auto" >
          <h3 class="mb-3" >Edit Your Profile</h3>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6"> <input type="text" class="form-control" id="form36" placeholder="First Name"/> </div>
              <div class="form-group col-md-6"> <input type="text" class="form-control" id="form37" placeholder="Last Name"/> </div>
            </div>
            <div class="form-group"> <input type="text" class="form-control" id="form38" placeholder="Year Of Experience" /> </div>
            <div class="form-group"> <input type="email" class="form-control" id="form39" placeholder="Email"/> </div>
            <div class="form-row">
              <div class="form-group col-md-6"> <input type="number" class="form-control" id="form40" placeholder="Phone"/> </div>
              <div class="form-group col-md-6"> <input type="text" class="form-control" id="form41" placeholder="Date Of Birth"/> </div>
            </div>
            <div class="form-group"> <input type="text" class="form-control" id="form42" placeholder="Address"/> </div>
            <div class="text-center py-2">
              <button type="Save" class="btn" style={{backgroundColor:"#396afc"}}>Send</button>
            </div>
          </form>
        </div>
        <div class="col-md-5 col-12 text-center my-auto">
            <img src={dashboard} style={{height:"30vh",width:"auto"}}/>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Profile
