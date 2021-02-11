import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import {
  // loadCart,
  deleteItemFromCart,
  updateCart,
} from "../../redux/actions/cartActions";
import CardForCart from "./CardForCart";
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
    // await this.props.loadCart().catch((error) => console.error(error));
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

    const stateTax = (totalCost * 0.04).toFixed(2);

    return (
      <div>
        <h1>Cart Page</h1>
        <section className="cart-main-cont">
          <div className="cart-list-block">
            {this.state.cart.map((item) => (
              <CardForCart
                key={item.id}
                id={item.id}
                path={item.path}
                title={item.title}
                memory={item.memory}
                color={item.color}
                cost={item.cost}
                onDeleteItem={() => this.handleDeleteItem(item)}
                onChangeQuantity={(count) =>
                  this.handleChangeQuantity(item, count)
                }
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className="cart-totals">
            <h3 className="cart-totals-h3">Cart totals</h3>
            <table className="cart-totals-table" width="100%" rules="rows">
              <tbody className="cart-totals-table-tbody">
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
                <tr className="cart-totals-table-tbody-tr">
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
                className="cart-totals-btn-prcd-to-chckt"
                size="large"
                type="primary"
                disabled={totalCost === 0 ? true : false}
              >
                Proceed to checkout
              </Button>
            </NavLink>
          </div>
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
  // loadCart,
  deleteItemFromCart,
  updateCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
