import React from "react";
// import Carousel from "react-bootstrap/Carousel";
import { Carousel } from "antd";

import { NavLink } from "react-router-dom";
import iPhonePic from "../img/2.png";
import xiaomiPic from "../img/4.png";
import logo from "../img/logo.png";
import CardDevice from "./common/CardDevice";
import { connect } from "react-redux";
import huawei from "../img/Huawei-nova-3i.png";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.refCarousel = React.createRef();
  }

  componentDidMount() {
    this.currenList = this.getSixRandomNums();
  }

  // getAllProducts() {
  //   const allDevices = { ...this.props.apple, ...this.props.samsung };
  //   const allProducts = [];
  //   for (let key in allDevices) {
  //     allProducts.push(...allDevices[key]);
  //   }
  //   return allProducts;
  // }

  getSixRandomNums() {
    const allDevices = { ...this.props.apple, ...this.props.samsung };
    const allProducts = [];
    for (let key in allDevices) {
      allProducts.push(...allDevices[key]);
    }
    const sixRandomNums = [];
    while (sixRandomNums.length < 6) {
      let num = parseInt((Math.random() * 20).toFixed());
      if (num > 14) continue;
      sixRandomNums.push(num);
    }
    return sixRandomNums.map((num) => allProducts[num]);
  }

  render() {
    // const allProducts = this.getAllProducts();
    // const currenList = this.getSixRandomNums();
    console.log(this.currenList);
    const carouselData = [
      {
        url:
          "https://i01.appmifile.com/webfile/globalimg/gaoruijia/poco-x3-nfc-blue.png",
        title: "Amazing Poco X3",
        to: "/xiaomi",
      },
      {
        url: "https://www.ixbt.com/img/n1/news/2021/1/1/11111_large.png",
        title: "Great Xiaomi Mi 11",
        to: "/xiaomi",
      },
      {
        url: huawei,
        title: "Unbelievable Huawei Nova 3",
        to: "/huawei",
      },
    ];

    // function getAllProducts() {
    //   const test = { ...this.props.apple, ...this.props.samsung };
    //   let arr = [];
    //   for (let key in test) {
    //     arr.push(...test[key]);
    //   }
    //   return arr;
    // }
    // const allProducts = getAllProducts();
    // console.log(allProducts.length);

    // function getSixRandomDevices() {
    //   const arr = [];
    //   while (arr.length < 6) {
    //     let num = parseInt((Math.random() * 20).toFixed());
    //     if (num > 14) continue;
    //     arr.push(num);
    //   }
    //   return arr.map((index) => allProducts[index]);
    // }
    // const test2 = getSixRandomDevices();
    // // const topSalesSixDevices = getSixRandomDevices();
    // // let num = parseInt((Math.random() * 20).toFixed());
    // console.log(test2);

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
          <h2 className="h2-top-sales">Top sales!</h2>
          <div>
            <div className="list-devices-main-cont-homepage list-devices-main-cont">
              <CardDevice list={this.getSixRandomNums()} />
            </div>
          </div>
        </section>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { apple: state.apple, samsung: state.samsung };
}

export default connect(mapStateToProps)(HomePage);

// https://www.ixbt.com/img/n1/news/2021/1/1/11111_large.png
