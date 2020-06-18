import React from "react";
import { connect } from "react-redux";
import { loadCart } from "../redux/actions/cartActions";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadCart().catch((error) => console.error(error));
  }

  render() {
    return (
      <div>
        <h1>Cart Page</h1>
        {this.props.cart.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
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
