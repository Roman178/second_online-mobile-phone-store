import React from "react";
import { connect } from "react-redux";
import { loadCart } from "../../redux/actions/cartActions";
import CardForCart from "./CardForCart";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteFromCart = this.handleDeleteFromCart.bind(this);
  }

  componentDidMount() {
    this.props.loadCart().catch((error) => console.error(error));
  }

  handleDeleteFromCart(event) {
    event.preventDefault();
    const foundIphone = this.props.cart.find(
      (iphone) => iphone.id === parseInt(event.target.id)
    );
    console.log(foundIphone);
  }

  render() {
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
              onDeleteItem={this.handleDeleteFromCart}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
