import React from "react";
import { Card } from "antd";
import { Route, Switch, NavLink } from "react-router-dom";
import IphoneXR from "./IphoneXR";

function ApplePage(props) {
  return (
    <div>
      <h2>Apple Page</h2>
      <div style={{ display: "flex" }}>
        <NavLink to={props.match.url + "/iphonexr"} style={{ margin: "5%" }}>
          <Card
            hoverable
            style={{ width: 150 }}
            cover={
              <img
                alt="iPhone XR"
                src="https://cdn.svyaznoy.ru/upload/iblock/f66/blue.jpg/resize/307x224/"
              />
            }
          >
            <Card.Meta
              title="iPhone XR"
              description="The most popular iPhone"
            />
          </Card>
        </NavLink>

        <NavLink to={props.match.url + "/iphonexr"} style={{ margin: "5%" }}>
          <Card
            hoverable
            style={{ width: 150 }}
            cover={
              <img
                alt="iPhone XR"
                src="https://cdn.svyaznoy.ru/upload/iblock/f66/blue.jpg/resize/307x224/"
              />
            }
          >
            <Card.Meta
              title="iPhone XR"
              description="The most popular iPhone"
            />
          </Card>
        </NavLink>

        <NavLink to={props.match.url + "/iphonexr"} style={{ margin: "5%" }}>
          <Card
            hoverable
            style={{ width: 150 }}
            cover={
              <img
                alt="iPhone XR"
                src="https://cdn.svyaznoy.ru/upload/iblock/f66/blue.jpg/resize/307x224/"
              />
            }
          >
            <Card.Meta
              title="iPhone XR"
              description="The most popular iPhone"
            />
          </Card>
        </NavLink>

        <NavLink to={props.match.url + "/iphonexr"} style={{ margin: "5%" }}>
          <Card
            hoverable
            style={{ width: 150 }}
            cover={
              <img
                alt="iPhone XR"
                src="https://cdn.svyaznoy.ru/upload/iblock/f66/blue.jpg/resize/307x224/"
              />
            }
          >
            <Card.Meta
              title="iPhone XR"
              description="The most popular iPhone"
            />
          </Card>
        </NavLink>
      </div>
    </div>
  );
}

export default ApplePage;
