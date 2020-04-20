import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
    constructor(){
        this.state={
           featuredCollections :[]
        }
    }
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      return (
         <section className='bg-dark'>
        <Slider {...settings}>
         <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
         </section>
      );
    }
  }

  export default SimpleSlider ;