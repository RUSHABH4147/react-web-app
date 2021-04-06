import React from "react";
import '../App.css';
import img1 from './7.jpg';
import img2 from './8.jpg';
import img3 from './9.jpg';


function Gallery() {
  return (
    <div class="section">
    <div class="head2">
        <h1>GALLERY</h1>
    </div>
    <div class="image">
        <img src={img1} alt=""/>
        <img src={img2} alt=""/>
        <img src={img3} alt=""/>
    </div>
</div>
  );
}

export default Gallery;