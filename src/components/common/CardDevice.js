import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Button } from "antd";

function CardDevice(props) {
  return (
    <NavLink to={props.location.pathname + props.url} style={{ margin: "1%" }}>
      <Card
        hoverable
        style={{ width: 220 }}
        cover={<img alt={props.title} src={props.path} />}
      >
        <Card.Meta title={props.title} />
        <span
          style={{ fontSize: "160%", display: "block", margin: "5% 1% 5% 0" }}
        >
          {props.price}
        </span>
        <NavLink to="#">
          <Button
            onClick={() => console.log("Hi asshole")}
            type="primary"
            size="large"
            style={{ marginTop: "5%" }}
          >
            Add to Cart
          </Button>
        </NavLink>
      </Card>
    </NavLink>
  );
}

export default withRouter(CardDevice);
