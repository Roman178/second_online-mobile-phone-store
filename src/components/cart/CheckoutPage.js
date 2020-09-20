import React from "react";
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
      order: props.cart,
      subtotal: subtotal,
      stateTax: stateTax,
      total: total,
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

          {/* <Form
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              backgroundColor: "white",
              padding: "1.5%",
            }}
            name="order-form"
            onFinish={onFinish}
            validateMessages={validateMessages}
            // onFinishFailed={(obj) => console.log(obj)}
          >
            <Form.Item
              name={["first name"]}
              label="First name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["second name"]}
              label="Second name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item name={["company name"]} label="Company name (optional)">
              <Input />
            </Form.Item>
            <Form.Item name={["country"]} label="Country">
              <p style={{ margin: 0 }}>USA</p>
            </Form.Item>
            <Form.Item
              name={["state of country"]}
              label="State"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select state"
                onChange={(value) => setAmericanState(value)}
              >
                {statesOfAmerica.map((state) => (
                  <Select.Option value={state}>{state}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name={["street"]}
              label="Street address"
              rules={[{ required: true, message: "Address is required" }]}
            >
              <Input
                style={{ width: "50%" }}
                placeholder="House number and street name"
              />
            </Form.Item>

            <Form.Item
              name={["city"]}
              label="Town/City"
              rules={[{ required: true, message: "Address is required" }]}
            >
              <Input style={{ width: "50%" }} placeholder="Town/City name" />
            </Form.Item>

            <Form.Item
              name={["postal code"]}
              label="Postal code"
              rules={[{ required: true, message: "Postal code is required" }]}
            >
              <Input style={{ width: "50%" }} />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                addonBefore="+1"
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Button
              // onClick={success}
              size="large"
              type="primary"
              style={{ marginTop: "20px", width: "100px" }}
              htmlType="submit"
            >
              Submit
            </Button>
          </Form>
 */}
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
