import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  loadCart,
  deleteItemFromCart,
  updateCart,
} from "../../redux/actions/cartActions";
import CardForCart from "./CardForCart";
import { Table } from "antd";
import { Button } from "antd";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };

    // this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
    this.componentCleanup = this.componentCleanup.bind(this);
  }

  componentCleanup() {
    this.props.updateCart(this.state.cart);
  }

  async componentDidMount() {
    await this.props.loadCart().catch((error) => console.error(error));
    this.setState({ cart: this.props.cart });
    window.addEventListener("beforeunload", this.componentCleanup);
  }

  componentWillUnmount() {
    this.componentCleanup();
    window.removeEventListener("beforeunload", this.componentCleanup);
    // this.props.updateCart(this.state.cart);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ cart: nextProps.cart });
  }

  handleChangeQuantity = (item, changedValue) => {
    const updatedCart = this.state.cart.map((i) => {
      if (i.id === item.id) {
        return {
          ...item,
          quantity: changedValue,
          cost: parseInt(item.price) * changedValue,
        };
      }
      return i;
    });
    this.setState({ cart: updatedCart });
  };

  handleDeleteItem(item) {
    this.setState({ cart: this.state.cart.filter((i) => i.id !== item.id) });
    this.props.deleteItemFromCart(item);
  }

  render() {
    const totalCost = this.state.cart.reduce(
      (sum, current) => sum + parseInt(current.cost),
      0
    );

    const stateTax = (totalCost * 0.09).toFixed(2);

    return (
      <div>
        <h1>Cart Page</h1>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "15%",
            marginRight: "15%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
            }}
          >
            {this.state.cart.map((item) => (
              <CardForCart
                key={item.id}
                id={item.id}
                path={item.path}
                title={item.title}
                cost={item.cost}
                onDeleteItem={() => this.handleDeleteItem(item)}
                onChangeQuantity={(count) =>
                  this.handleChangeQuantity(item, count)
                }
                quantity={item.quantity}
              />
            ))}
          </div>
          <div
            style={{
              width: "40%",
              marginLeft: "30px",
              height: "350px",
              backgroundColor: "white",
              padding: "10px",
            }}
          >
            <h3>Cart totals</h3>
            <table
              width="100%"
              rules="rows"
              style={{
                width: "100%",
                height: "200px",
                borderBottom: "1px solid",
              }}
            >
              <tbody style={{ fontSize: "1.2em" }}>
                <tr>
                  <th>Subtotal</th>
                  <td>${totalCost}</td>
                </tr>
                <tr>
                  <th>Ohio State Tax 9%</th>
                  <td>${parseFloat(stateTax).toFixed(2)}</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>DHL or Fedex (+ $17)</td>
                </tr>
                <tr style={{ fontSize: "1.4em" }}>
                  {" "}
                  <th>Total</th>
                  <td>
                    $
                    {totalCost === 0
                      ? 0
                      : (totalCost + parseFloat(stateTax) + 17).toFixed(2)}
                  </td>
                </tr>
              </tbody>
            </table>
            <NavLink to="/checkout">
              <Button
                size="large"
                type="primary"
                style={{ marginTop: "20px" }}
                disabled={totalCost === 0 ? true : false}
              >
                Proceed to checkout
              </Button>
            </NavLink>
          </div>

          {/* <Table
            style={{ width: "40%", marginLeft: "10px" }}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
          /> */}
        </section>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cart: state.cart,
  };
}

const mapDispatchToProps = {
  loadCart,
  deleteItemFromCart,
  updateCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
