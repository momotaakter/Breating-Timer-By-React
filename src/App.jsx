import React, { useState } from 'react'
import './index.css'
function App() {

let[time,setTime]=useState(30);

const mytimefunction=setInterval(() => {
  if(time<0){
    clearInterval(mytimefunction)
  }
  
}, 1000);
  
   const workingbtn=()=>{
    const minit=parseInt(time/60,10);
    const second=parseInt(time%60,10);

    const displayarea=document.getElementById('myid');
   displayarea.innerHTML=`${minit}:${second}`


   //
  }
  const startbtn=()=>{
    workingbtn()

  }
//bg img change


const[bg,setBG]=useState(true);
const[bgimg,setbgImg]=useState('myimg.jpg');


const mydiv={
  width:'100%',
  height:'100vh',
  backgroundPosition:'center center',
  backgroundSize:'cover',
  backgroundRepeat:'no-repeat',
  display:'flex',
  justifyContent:'center center',
  alignItems:'center',

  
  }


const bgbutton=()=>{
  setBG(!bg)
   setbgImg(!bgimg)

}



  return (
 <>


 <div className='mydiv' style={mydiv}>

  <div className="main-div">
    <div className="text-div">
    <h1>breathing timer</h1>
    <h2 id='myid'>start</h2>
    <button onClick={startbtn}>start</button>
    <button>stop</button>
    </div>
 
  </div>

 </div >
 <div className="bg-change" >
  <button onClick={bgbutton}>{bg?'change this background img':'changed'}</button>
  </div>


 </>
  )
}

export default App
