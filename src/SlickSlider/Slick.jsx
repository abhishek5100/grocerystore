import React from "react";
import Slider from "react-slick";
import "./Slider.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slick() {
  var settings = {
 
    infinite:true,
    speed: 10000,
    slidesToShow:8,
    slidesToScroll:2,
    initialSlide:6,
    autoplay:false,
    // Speed: 5000,
    // autoplaySpeed:1000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11">
        <Slider {...settings}>
          <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645266329.png" alt="" className="sliderimg"/>
            <div>
              verity& brands
            </div>
        </div>
        <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645266329.png" alt="" className="sliderimg"/>
            <div>
              verity& brands
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190535.png" alt="" className="sliderimg"/>
            <div>
            verity& brands
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190150.png" alt="" className="sliderimg"/>
            <div>
            verity& brands
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190150.png" alt="" className="sliderimg"/>
            <div>
              verity& brands
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
            verity& brands
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190535.png" alt="" className="sliderimg"/>
            <div>
              verity& brands
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity& brands</h5>
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1695987359.png" alt="" className="sliderimg"/>
            <div>
              verity& brands
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190150.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity& brands</h5>
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity& brands</h5>
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity& brands</h5>
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity& brands</h5>
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
              verity& brands
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
            verity& brands
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1695987359.png" alt="" className="sliderimg"/>
            <div>
              verity& brands
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190150.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity& brands</h5>
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity5 brands</h5>
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity& brands</h5>
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity& brands</h5>
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity& brands</h5>
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity& brands</h5>
            </div>
        </div> <div  className="img">
            <img src="https://www.worldofmart.com/master/Banner/1645190214.png" alt="" className="sliderimg"/>
            <div>
              <h5>verity& brands</h5>
            </div>
        </div>
        </Slider>
      </div>

      </div>
    </div>
      
     
 
    </>
  )
}

export default Slick;
