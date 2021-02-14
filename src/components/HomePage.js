import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import { Carousel } from "antd";

import { NavLink } from "react-router-dom";
import iPhonePic from "../img/2.png";
import xiaomiPic from "../img/4.png";
import logo from "../img/logo.png";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.refCarousel = React.createRef();
  }

  render() {
    const carouselData = [
      {
        url:
          "https://i01.appmifile.com/webfile/globalimg/gaoruijia/poco-x3-nfc-blue.png",
        title: "Amazing Poco X3",
      },
      {
        url: "https://www.ixbt.com/img/n1/news/2021/1/1/11111_large.png",
        title: "Great Xiaomi M11",
      },
    ];
    return (
      <>
        <section>
          <div className="logo-cont">
            <img className="logo-img" src={logo} />
          </div>
        </section>
        <section className="home-carousel-cont">
          <Carousel
            autoplay
            dots={{ className: "carousel-dots" }}
            className="home-carousel"
            ref={this.refCarousel}
            arrows={false}
          >
            {carouselData.map((carouselSlide) => {
              return (
                <div className="home-carousel-slide-ant">
                  <NavLink className="home-carousel-slide-link" to="/xiaomi">
                    <div className="home-carousel-slide-own">
                      <h4 className="home-carousel-slide-imgtitle">
                        {carouselSlide.title}
                      </h4>
                      <div className="home-carousel-slide-cont-img">
                        <img
                          className="home-carousel-slide-img"
                          alt="iPhone SE"
                          src={carouselSlide.url}
                        />
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </Carousel>
        </section>
        <section>
          <h3>Hot sales!</h3>
        </section>
      </>
    );
  }
}

export default HomePage;

// https://www.ixbt.com/img/n1/news/2021/1/1/11111_large.png
