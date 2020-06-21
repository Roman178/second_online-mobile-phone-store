import React from "react";
import { connect } from "react-redux";
import { loadCart } from "../../redux/actions/cartActions";
import Counter from "./Counter";
import { DeleteOutlined } from "@ant-design/icons";

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
        <div
          style={{
            margin: "2% 15% 2% 15%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {this.props.cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "1.1rem",
                marginTop: "1%",
                backgroundColor: "white",
              }}
            >
              <img width="150px" src={item.path}></img>
              <div>{item.title}</div>
              <Counter></Counter>
              {/* <div>Counter will be here</div> */}
              <div>{item.price}</div>
              <DeleteOutlined
                style={{ marginRight: "5%" }}
                onClick={() => console.log("Hi")}
              />
            </div>
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
