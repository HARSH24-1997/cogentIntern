import React from 'react'
import Slider from './Slider';
import Slider2 from './Slider2';
import Checkbox from './Checkbox'
function Filter() {
    return (
       <div className="container-fluid py-2">
       <div className='text-center'><h2>Filter</h2></div>
      <center> <Checkbox/></center>
       <Slider/>
       <Slider2/>
       </div>
    )
}

export default Filter
