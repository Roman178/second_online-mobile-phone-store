import React from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Button } from "antd";
import Item from "antd/lib/list/Item";

function CardDevice(props) {
  return (
    <>
      {props.list.map((item) => (
        <NavLink
          to={props.location.pathname + item.url}
          style={{ margin: "1%" }}
        >
          <Card
            hoverable
            style={{ width: 220 }}
            cover={<img alt={item.title} src={item.path} />}
          >
            <Card.Meta title={item.title} />
            <span
              style={{
                fontSize: "160%",
                display: "block",
                margin: "5% 1% 5% 0",
              }}
            >
              {"$" + item.price}
            </span>
            <NavLink to="#">
              <Button
                onClick={() => props.onAddToCart(item)}
                type="primary"
                size="large"
                style={{ marginTop: "5%" }}
              >
                Add to Cart
              </Button>
            </NavLink>
          </Card>
        </NavLink>
      ))}
    </>
  );
}

export default withRouter(CardDevice);
