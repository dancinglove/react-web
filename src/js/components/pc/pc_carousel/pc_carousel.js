import React from "react";
import { Carousel } from "antd";


export default class PCCarousel extends React.Component{
  render(){
    const settings = {		
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			autoplay: true
		};
    return(
      <div className="carousel">
        <div className="carousel">
          <Carousel {...settings}>
            <div><img src={this.props.Carousel1}/></div>
            <div><img src={this.props.Carousel2}/></div>
            <div><img src={this.props.Carousel3}/></div>
            <div><img src={this.props.Carousel4}/></div>
          </Carousel>
        </div>
      </div>
    )
  }
}
