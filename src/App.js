import React, {useState,useEffect}from "react";
import './App.css';
import Nav from './compnent/Nav';
import Home from './compnent/Home';
import Contact from './compnent/Contact';
import Gallery from './compnent/Gallery';
import Login from "./compnent/Login";
import Register from './compnent/Register';
import Qpaper from "./compnent/Qpaper";
import Qqpaper from "./compnent/Qqpaper";

import Marksheet from "./compnent/Marksheet";
import Mmarksheet from "./compnent/Mmarksheet1";



import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';


function App() {
 const [disdata,setdisdata]=useState([]);
 const [currentques,setcurrentques]=useState(0);
 const [score,setscore]=useState(0);

 const [marks,setmarks]=useState(0);



 function ans(e){
  // e.preventDefault();
  if(e.target.value==="2"){
   setmarks((per)=>(per+1))
  }
  
  
   if (marks>=10)
    {
      setmarks((per)=>(per+0))
    }
}



  return ( 
    <div className="App">

    <Router>
      <Nav/>
      <Routes>
      <Route path="/" exact element={<About/>} />
      <Route path="/home" exact element={<Home/>} />
      <Route path="/contact" exact element={<Contact/>} />
      <Route path="/Gallery" exact element={<Gallery/>} />
      <Route path="/Register" exact element={<Register/>} />

      <Route path="/login" exact >
       <Login  disdat={setdisdata}/> {/*passing usestate-elements as attribute in the component to share there props (data flow) } */}
      </Route>
      <Route path="/Qpaper" >
    <Qpaper dis={disdata} mark={marks} chck={ans} /> {/*passing usestate-elements as attribute in the component to share there props (data flow) } */}
    </Route>
    <Route path="/Marksheet" >
    <Marksheet mark={marks} />
    </Route>
    <Route path="/Qqpaper" >
    <Qqpaper dis={disdata} cq={currentques} scq={setcurrentques} sc={score} ssc={setscore} />
    </Route>
    <Route path="/Mmarksheet" >
    <Mmarksheet sc={score} />
    </Route>


      </Routes>

    
    </Router>
    {/* <Box/> */}

   
    </div>
  );
}

function About(){
  return(
    <div>
      <h1>Welcome  user!!!!!!</h1>
      <div class="section">
        <div class="head2">
            <h1>ABOUT US</h1>
        </div>
       <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, totam! Mollitia id illo, maxime quis iusto autem odit corrupti voluptatibus nam culpa hic suscipit, minima ipsam consequuntur obcaecati repellat dolor.</p>
    </div>
    </div>
  );
}



export default App;
