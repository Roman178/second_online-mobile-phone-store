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
    <div className="list-devices-main-cont">
      {props.list.map((item) => (
        <div className="card-device-cont">
          <Card
            className="card-device"
            hoverable
            cover={
              <NavLink
                className="card-device-link-top"
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
              >
                <img
                  className="card-device-img"
                  alt={item.title}
                  src={item.path}
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
            >
              <Card.Meta
                className="card-device-description"
                title={item.title + " " + item.memory + " " + item.color}
              />
              <span className="card-device-title-span">{"$" + item.price}</span>
            </NavLink>

            <Button
              className="card-device-btn-add-to-cart"
              onClick={() => props.onAddToCart(item)}
              type="primary"
              size="small"
            >
              Add to Cart
            </Button>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default withRouter(CardDevice);
