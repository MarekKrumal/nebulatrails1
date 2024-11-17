import React, { Component } from "react";
import pic2 from "../assets/pic2.avif";

export class HeroImage extends Component {
  render() {
    return (
      <div
        className="bg-cover bg-center h-[600px] relative"
        style={{ backgroundImage: `url(${pic2})` }}
      >
        <div className="text-center p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-white pb-5 text-5xl font-bold">
            {this.props.heading}
          </h1>
          <p className="text-white text-3xl">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImage;
