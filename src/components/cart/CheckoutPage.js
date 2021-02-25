import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useState } from "react";
import { Modal } from "antd";
import { cleanCart } from "../../redux/actions/cartActions";
import { addOrderApi } from "../../api/ordersApi";
import FormCheckout from "./FormCheckout";

const CheckoutPage = (props) => {
  const [americanState, setAmericanState] = useState("Ohio");

  function onFinish(values) {
    addOrderApi({
      ...values,
      subtotal: subtotal,
      stateTax: stateTax,
      total: total,
      order: props.cart.map((item) => {
        let updatedItem = {};
        for (let key in item) {
          if (key.startsWith("image") || key === "path") continue;
          updatedItem[key] = item[key];
        }
        return updatedItem;
      }),
    });
    props.cleanCart(props.cart);
    success();
  }

  function success() {
    Modal.success({
      content:
        "Your Order has been received! Our Manager will contact you soon to clarify the details and confirm the order.",
      maskClosable: true,
    });
  }

  const subtotal = props.cart.reduce(
    (sum, current) => sum + parseInt(current.cost),
    0
  );
  const stateTax = (subtotal * (0.01 * americanState.length)).toFixed(2);

  const total = (subtotal + parseFloat(stateTax) + 17).toFixed(2);

  return (
    <>
      {subtotal === 0 ? (
        <h5 className="empty-cart-h5">Your cart is currently empty.</h5>
      ) : (
        <div className="checkout-main-cont">
          <FormCheckout
            onFinish={onFinish}
            setAmericanStateProp={(value) => setAmericanState(value)}
          />
          <div className="checkout-table-cont">
            <h4>Your order</h4>
            <table className="checkout-table" width="100%" rules="rows">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody className="checkout-table-tbody">
                {props.cart.map((item) => (
                  <tr key={item.id}>
                    <td>{`${
                      item.brand[0].toUpperCase() + item.brand.slice(1)
                    } ${item.title} ${item.memory} ${item.color} x ${
                      item.quantity
                    }`}</td>
                    <td>${item.cost}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="checkout-table-tfoot">
                <tr>
                  <th>Subtotal</th>
                  <td>
                    <span>${subtotal}</span>
                  </td>
                </tr>

                <tr>
                  <th>
                    {americanState} State Tax {americanState.length}%
                  </th>
                  <td>
                    <span>${parseFloat(stateTax).toFixed(2)}</span>
                  </td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>
                    <span>DHL or Fedex (+ $17)</span>
                  </td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>
                    <span>${total}</span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

CheckoutPage.propTypes = {
  cart: PropTypes.array.isRequired,
  cleanCart: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
  };
}

const mapDispatchToProps = {
  cleanCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
