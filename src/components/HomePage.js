import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

const HomePage = (props) => {
  return (
    <Carousel interval={3500} style={{ marginTop: "-64px" }} fade>
      <Carousel.Item>
        <NavLink to="/apple">
          <img className="d-block w-100" alt="iPhone SE" src="src/img/2.png" />
        </NavLink>
      </Carousel.Item>
      <Carousel.Item>
        <NavLink to="/xiaomi">
          <img className="d-block w-100" alt="Mi 8 Lite" src="src/img/4.png" />
        </NavLink>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePage;
