import React from "react";
import { connect } from "react-redux";
import { loadCart, deleteItemFromCart } from "../../redux/actions/cartActions";
import CardForCart from "./CardForCart";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };

    // this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
  }

  componentDidMount() {
    this.props.loadCart().catch((error) => console.error(error));
  }

  componentDidUpdate(prevProps, prevState) {}

  // handleDeleteFromCart = (item) => {
  //   console.log(item);

  //   // const foundIphone = this.props.cart.find(
  //   //   (iphone) => iphone.id === parseInt(event.target.id)
  //   // );
  //   // this.props.deleteItemFromCart(foundIphone);
  // };

  // handlePlusItem = (item, count) => {
  //   console.log({ ...item, quantity: count });
  // };

  // handleMinusItem = (item, count) => {
  //   console.log({ ...item, quantity: count });
  // };

  handleChangeQuantity = (item, changedValue) => {
    if (isNaN(changedValue)) {
      console.log({ ...item, quantity: 1 });
    } else {
      console.log({ ...item, quantity: changedValue });
    }
  };

  render() {
    console.log(this.state);
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
          {this.props.cart.map((item) => (
            <CardForCart
              key={item.id}
              id={item.id}
              path={item.path}
              title={item.title}
              price={item.price}
              onDeleteItem={() => this.props.deleteItemFromCart(item)}
              onChangeQuantity={(count) =>
                this.handleChangeQuantity(item, count)
              }
              quantity={item.quantity}
            />
          ))}
          <h2 style={{ alignSelf: "flex-end" }}>Total: 1237$</h2>
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
