import React, { useState } from "react";
import { Card } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Button } from "antd";
import Item from "antd/lib/list/Item";
import { addItemToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";

function CardDevice(props) {
  const checkPage = props.location.pathname.includes("/", 1);

  const [currentPageIsASubPage] = useState(checkPage);
  console.log(props);

  function handleAddToCart(item) {
    if (!props.cart.find((i) => i.id === item.id)) {
      props.addItemToCart({ ...item, quantity: 1, cost: item.price });
    }
  }

  return (
    <>
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
              onClick={() => handleAddToCart(item)}
              type="primary"
              size="small"
            >
              Add to Cart
            </Button>
          </Card>
        </div>
      ))}
    </>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
  };
}

const mapDispatchToProps = {
  addItemToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CardDevice));
