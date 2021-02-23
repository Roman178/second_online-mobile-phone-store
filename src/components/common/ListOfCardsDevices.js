import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, notification } from "antd";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { Button } from "antd";
import { addItemToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";

const openNotification = (placement) => {
  notification.success({
    message: "You just added 1 item to your cart",
    placement,
  });
};

function ListOfCardsDevices(props) {
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
      {props.list.map((item = {}) => (
        <div className="card-device-cont">
          <Card
            className="card-device"
            hoverable
            cover={
              <NavLink
                className="card-device-link-top"
                key={item.id}
                to={`/${item.brand}/${item.category}/${item.url}`}
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
              to={`/${item.brand}/${item.category}/${item.url}`}
            >
              <Card.Meta
                className="card-device-description"
                title={item.title + " " + item.memory + " " + item.color}
              />
              <span className="card-device-title-span">{"$" + item.price}</span>
            </NavLink>

            <Button
              className="card-device-btn-add-to-cart"
              onClick={() => {
                handleAddToCart(item);
                openNotification("topLeft");
              }}
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

ListOfCardsDevices.propTypes = {
  cart: PropTypes.array.isRequired,
  addItemToCart: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

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
)(withRouter(ListOfCardsDevices));
