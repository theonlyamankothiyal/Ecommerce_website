import React from 'react'
import img8 from './8.jpg'
import img4 from './4.jpg'
import img9 from './9.jpg'
/* import "./Hero.css"; */


const Hero = () => {
  return (
    <div className='hero'>
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
            <img src={img8} className="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <h2>Welcome to Bag Street</h2>
                    <p>""Bag Street: Unveiling the Art of Carrying 
                        Elegance, Comfort, and Utility in Every Bag.""</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
            <img src={img4} className="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block">
                <h2>Welcome to Bag Street</h2>
                    <p>Bag Street: Where Fashion Meets 
                        Function, Your Journey Begins Here.</p>
                </div>
            </div>
            <div class="carousel-item">
                <img src={img9}  className="d-block w-100" alt="..." />
                <div class="carousel-caption d-none d-md-block">
                <h2>Welcome to Bag Street</h2>
                    <p>"Bag Street: Where Style Meets
                         Functionality in Every Stitch."</p>
    
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    </div>
  )
}

export default Hero