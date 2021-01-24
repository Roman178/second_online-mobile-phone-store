import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { Form, Input, Button, Select, Modal } from "antd";
import { statesOfAmerica } from "../../USAstates";
import { cleanCart } from "../../redux/actions/cartActions";
import { addOrderApi } from "../../api/ordersApi";
import FormCheckout from "./FormCheckout";

// const validateMessages = {
//   required: "${label} is required!",
// };

const CheckoutPage = (props) => {
  const [americanState, setAmericanState] = useState("");

  function onFinish(values) {
    console.log("Received values of form: ", values);
    addOrderApi({
      ...values,
      subtotal: subtotal,
      stateTax: stateTax,
      total: total,
      order: props.cart,
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
        <h5
          style={{
            backgroundColor: "white",
            height: "100px",
            paddingTop: "1%",
            marginRight: "70%",
          }}
        >
          Your cart is currently empty.
        </h5>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "2% 10% 0 10%",
          }}
        >
          <FormCheckout
            onFinish={onFinish}
            setAmericanStateProp={(value) => setAmericanState(value)}
          ></FormCheckout>

          <div
            style={{
              width: "40%",
              marginLeft: "30px",
              backgroundColor: "white",
              padding: "10px",
            }}
          >
            <h4>Your order</h4>
            <table
              width="100%"
              rules="rows"
              style={{
                width: "100%",
                height: "330px",
                borderBottom: "1px solid",
              }}
            >
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: "1.2em" }}>
                {props.cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {item.title} x {item.quantity}
                    </td>
                    <td>${item.cost}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot style={{ fontSize: "1.3em", fontWeight: "bold" }}>
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

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
  };
}

const mapDispatchToProps = {
  cleanCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
