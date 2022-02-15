import React from 'react'
import img1 from '../images/Top-7-Programing-Languages-for-Web-Development.jpg'
import img2 from '../images/Programing-2019.jpg'
import './Carousel.css'

export default function Carousel() {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>


  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={img1} alt="" style={{width:"100%",height:"500px"}} />
    <div class="carousel-caption ">
        <h5>It has survived not only five centuries</h5>
        <p>standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived</p>
      </div>
    </div>


    <div class="carousel-item">
    <img src={img2} alt="" style={{width:"100%",height:"500px"}} />
    <div class="carousel-caption ">
        <h5>It has survived not only five centuries</h5>
        <p>standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived</p>
      </div>
    </div>
   
    <div class="carousel-item">
     <div className="carousel-item-three">
     </div>
    </div>
   

  </div>
  <button class="carousel-control-prev" type="button" data-target="#carouselExampleIndicators" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-target="#carouselExampleIndicators" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </button>
</div>
    
    </>
  )
}
