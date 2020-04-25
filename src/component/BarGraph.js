import React from 'react';
import {Bar} from 'react-chartjs-2';


// const ImageOverlay = styled.div`
//     @media all and (pointer: coarse) {
//       position: relative,
//       height:20vh,
//       width:80vw
// }
// `;

const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Earn in Thousands',
        backgroundColor: '#396afc',
        borderColor: '#396afc',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

 function BarGraph(){
    return (
      <>
      {/* <h4 className="text-center bg-info" style={{ fontFamily: 'Montserrat ,sans-serif', color: "black" }}>Distance Travelled</h4> */}
      <div className="py-5 px-3">
         <Bar
          data={data}
          width={80}
          height={450}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            aspectRatio:1,
          }}
        />
      </div>
      </>
    );
  };
export default BarGraph