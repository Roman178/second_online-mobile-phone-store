import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

function CardDevice(props) {
  return (
    <NavLink to={props.location.pathname + props.url} style={{ margin: "1%" }}>
      <Card
        hoverable
        style={{ width: 180 }}
        cover={<img alt={props.title} src={props.path} />}
      >
        <Card.Meta title={props.title} description={props.description} />
      </Card>
    </NavLink>
  );
}

export default withRouter(CardDevice);
