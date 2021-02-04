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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {props.list.map((item) => (
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <Card
            hoverable
            style={{ width: 220 }}
            cover={
              <NavLink
                key={item.id}
                to={{
                  pathname: currentPageIsASubPage
                    ? props.location.pathname + "/" + item.url
                    : props.location.pathname +
                      "/" +
                      item.category +
                      "/" +
                      item.url,
                  state: item,
                }}
                style={{ marginTop: "9%" }}
              >
                <img
                  className="button-exmpl"
                  alt={item.title}
                  src={item.path}
                  style={{
                    height: "212px",
                    marginLeft: "auto",
                    display: "block",
                    margin: "auto",
                  }}
                />
              </NavLink>
            }
          >
            <NavLink
              key={item.id}
              to={{
                pathname: currentPageIsASubPage
                  ? props.location.pathname + "/" + item.url
                  : props.location.pathname +
                    "/" +
                    item.category +
                    "/" +
                    item.url,
                state: item,
              }}
              style={{ margin: "1%" }}
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
            </NavLink>

            {/* <NavLink to="#"> */}
            <Button
              onClick={() => props.onAddToCart(item)}
              type="primary"
              size="large"
              // style={{ marginTop: "5%" }}
            >
              Add to Cart
            </Button>
            {/* </NavLink> */}
          </Card>
        </div>
      ))}
    </div>
  );
}

export default withRouter(CardDevice);
