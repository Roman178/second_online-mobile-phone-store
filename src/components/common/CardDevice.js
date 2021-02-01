import React, { useState } from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Button } from "antd";
import Item from "antd/lib/list/Item";

function CardDevice(props) {
  const checkPage = props.location.pathname.includes("/", 1);

  const [currentPageIsASubPage] = useState(checkPage);

  return (
    <>
      {props.list.map((item) => (
        <NavLink
          key={item.id}
          to={{
            pathname: currentPageIsASubPage
              ? props.location.pathname + "/" + item.url
              : props.location.pathname + "/" + item.category + "/" + item.url,
            state: item,
          }}
          style={{ margin: "1%" }}
        >
          <Card
            hoverable
            style={{ width: 220 }}
            cover={
              <img
                className="button-exmpl"
                alt={item.title}
                src={item.path}
                style={{
                  height: "212px",
                  width: "auto",
                  margin: "auto",
                  marginTop: "7%",
                }}
              />
            }
          >
            <Card.Meta
              title={item.title + " " + item.memory + " " + item.color}
            />
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
                // style={{ marginTop: "5%" }}
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
