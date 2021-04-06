import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div >
     <nav>
         <h1>logo</h1>
         <ul className='navlinks'>
             <Link className='Linkm' to="/Home">
             <li>home</li></Link>
             <Link className='Linkm' to="/Contact">
             <li>contact</li></Link>
             <Link className='Linkm' to="/Gallery">
             <li>Gallery</li></Link>
             <Link className='Linkm' to="/login">
             <li>Login!!</li></Link>
         </ul>
     </nav>
    </div>
  );
}

export default Nav;