import React from 'react'
import { PropagateLoader } from "react-spinners";
function Loader() {
  return (
    <div 
          
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "50vh",
          }}>

<PropagateLoader color="#213a5a" size={23} />
    </div>
  )
}

export default Loader
