import React, { useState } from 'react'

function Sample () {
    const [x,setX]=useState(0);
    const[y,setY]=useState(0);
    const[z,setZ]=useState(0);
//    const num=[10,50,40];
   
  return (
    <div>
         <h2>{x}</h2>
         <h2>{y}</h2>
         <h4>{z}</h4>
         <button onClick={() => { 
            setX(0)
            setY(0)
            setZ(0)
            }}>Reset Counter</button>
    <button onClick={() => {
        if(x<100){
            setX(x+ 1)
            setY(100-x-2)
             setZ(1)  
        }
       
        }}>Increamentof-X</button>
         <button onClick={() => {
            if(y<100){
                setY(y+ 1)
                setZ(100-y-2)
                 setX(1)
            }
       
        }}>Increamentof-Y</button>
         <button onClick={() => {
            if(z<100){
                setZ(z+ 1)
                setX(100-z-2)
                 setY(1)
            }
       
        }}>Increamentof-Z</button>
    
    </div>
  )
}

export default Sample