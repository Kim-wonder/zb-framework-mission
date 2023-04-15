import React from "react";
import "./CarouselView.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import digital from "../assets/img_shop_digital.jpeg";
import fashion from "../assets/img_shop_fashion.jpeg";
import grocery from "../assets/img_shop_grocery.jpeg";
import Button_ from "../components/BaroButton";

export default function CarouselView() {
  return (
    <div className="carousel-container">
      <Carousel autoPlay={false} infiniteLoop={true}>
        <div>
          <div className="ad_ment">
            <p>물빠진 청바지!</p>
            <p>이제 막 도착한 패션 청바지를 구경해보세요.</p>
            <Button_></Button_>
          </div>
          <img src={fashion} />
        </div>
        <div>
          <img src={grocery} />
        </div>
        <div>
          <img src={digital} />
        </div>
      </Carousel>
    </div>
  );
}
