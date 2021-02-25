import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "antd";
import { NavLink } from "react-router-dom";
// import logo from "../img/logo.png";
import ListOfCardsDevices from "./common/ListOfCardsDevices";
import { connect } from "react-redux";
import huawei from "../img/Huawei-nova-3i.png";
import xiaomi from "../img/Xiaomi-Mi-10T.png";

export const logo = "http://localhost:3001/home-page-images/logo.png";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.refCarousel = React.createRef();
  }

  getSixRandomDevices() {
    const allDevices = {
      ...this.props.apple,
      ...this.props.samsung,
      ...this.props.huawei,
      ...this.props.honor,
      ...this.props.xiaomi,
    };
    const allProducts = [];
    for (let key in allDevices) {
      allProducts.push(...allDevices[key]);
    }
    const sixRandomNums = [];
    while (sixRandomNums.length < 6) {
      let num = parseInt((Math.random() * 170).toFixed());
      if (num > 153) continue;
      sixRandomNums.push(num);
    }
    return sixRandomNums.map((num) => allProducts[num]);
  }

  render() {
    console.log(this.props);
    const carouselData = [
      {
        url: "http://localhost:3001/home-page-images/poco-x3-nfc-blue.png",
        title: "Amazing Poco X3",
        to: "/xiaomi/poco/poco-x3-128-gb-blue",
      },
      {
        url: "http://localhost:3001/home-page-images/Xiaomi-Mi-10T.png",
        title: "Great Xiaomi Mi 10T Pro",
        to: "/xiaomi/mi/mi-10t-pro-256-gb-silver",
      },
      {
        url: "http://localhost:3001/home-page-images/huawei-p40-pro.png",
        title: "Unbelievable Huawei P40 Pro",
        to: "/huawei/modelp/p40-pro-256-gb-black",
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
            // autoplay
            dots={{ className: "carousel-dots" }}
            className="home-carousel"
            ref={this.refCarousel}
            arrows={false}
          >
            {carouselData.map((carouselSlide) => {
              return (
                <div
                  key={carouselSlide.title}
                  className="home-carousel-slide-ant"
                >
                  <NavLink
                    className="home-carousel-slide-link"
                    to={carouselSlide.to}
                  >
                    <div className="home-carousel-slide-own">
                      <h4 className="home-carousel-slide-imgtitle">
                        {carouselSlide.title}
                      </h4>
                      <div className="home-carousel-slide-cont-img">
                        <img
                          style={{
                            width:
                              carouselSlide.title === "Amazing Poco X3"
                                ? "95%"
                                : carouselSlide.title ===
                                  "Great Xiaomi Mi 10T Pro"
                                ? "130%"
                                : "",
                          }}
                          className="home-carousel-slide-img"
                          alt={carouselSlide.title}
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
          <h2 className="h2-top-sales">Top sales!</h2>
          <div>
            <div className="list-devices-main-cont-homepage list-devices-main-cont">
              <ListOfCardsDevices list={this.getSixRandomDevices()} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

HomePage.propTypes = {
  apple: PropTypes.object.isRequired,
  samsung: PropTypes.object.isRequired,
  xiaomi: PropTypes.object.isRequired,
  honor: PropTypes.object.isRequired,
  huawei: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    apple: state.apple,
    samsung: state.samsung,
    xiaomi: state.xiaomi,
    honor: state.honor,
    huawei: state.huawei,
  };
}

export default connect(mapStateToProps)(HomePage);
