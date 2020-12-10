import React from "react";
import { Form, Input, Button, Select } from "antd";
import { statesOfAmerica } from "../../USAstates";

const validateMessages = {
  required: "${label} is required!",
};

function FormCheckout(props) {
  return (
    <Form
      style={{
        display: "flex",
        flexDirection: "column",
        width: "60%",
        backgroundColor: "white",
        padding: "1.5%",
      }}
      name="order-form"
      onFinish={props.onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["first_name"]}
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
        name={["second_name"]}
        label="Second name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["company_name"]} label="Company name (optional)">
        <Input />
      </Form.Item>
      <Form.Item name={["country"]} label="Country">
        <p style={{ margin: 0 }}>USA</p>
      </Form.Item>
      <Form.Item
        name={["state_of_country"]}
        label="State"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select state"
          onChange={(value) => props.setAmericanStateProp(value)}
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
        name={["postal_code"]}
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
  );
}

export default FormCheckout;
