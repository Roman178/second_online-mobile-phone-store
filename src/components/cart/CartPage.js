import React from "react";
import { connect } from "react-redux";
import { loadCart, deleteItemFromCart } from "../../redux/actions/cartActions";
import CardForCart from "./CardForCart";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [], totalCost: 0 };

    // this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
  }

  async componentDidMount() {
    await this.props.loadCart().catch((error) => console.error(error));
    this.setState({ cart: this.props.cart });
  }

  handleChangeQuantity = (item, changedValue) => {
    if (isNaN(changedValue)) {
      // console.log({ ...item, quantity: 1 });
      const updatedCart = this.state.cart.map((i) => {
        if (i.id === item.id) {
          return { ...item, quantity: 1, cost: parseInt(item.price) * 1 };
        }
        return i;
      });
      this.setState({ cart: updatedCart });
    } else {
      // console.log({ ...item, quantity: changedValue });
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
    }
  };

  handleDeleteItem(item) {
    this.setState({ cart: this.state.cart.filter((i) => i.id !== item.id) });
    this.props.deleteItemFromCart(item);
  }

  render() {
    const listOfCarts = this.state.cart.map((item) => (
      <CardForCart
        key={item.id}
        id={item.id}
        path={item.path}
        title={item.title}
        cost={item.cost}
        onDeleteItem={() => this.handleDeleteItem(item)}
        onChangeQuantity={(count) => this.handleChangeQuantity(item, count)}
        quantity={item.quantity}
      />
    ));
    const totalCost = listOfCarts.reduce(
      (sum, current) => sum + parseInt(current.props.cost),
      0
    );
    return (
      <div>
        <h1>Cart Page</h1>
        <div
          style={{
            margin: "2% 15% 2% 15%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {listOfCarts}
          <h2 style={{ alignSelf: "flex-end" }}>Total: ${totalCost}</h2>
        </div>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
