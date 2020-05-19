import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";

function CardDevice(props) {
  console.log(props.match.url);
  return (
    <NavLink to={props.match.url + "/iphonexr"} style={{ margin: "1%" }}>
      <Card
        hoverable
        style={{ width: 180 }}
        cover={
          <img
            alt="iPhone 11 pro MAX"
            src="https://cdn2.biggeek.ru/1/212/29e7/9943-189iphone-11-pro-max-silver-select-2019.jpeg"
          />
        }
      >
        <Card.Meta title="iPhone 11 pro MAX" description="The best iPhone" />
      </Card>
    </NavLink>
  );
}

export default CardDevice;
