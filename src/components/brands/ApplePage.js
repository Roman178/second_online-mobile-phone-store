import React, { useEffect } from "react";
import { Row } from "antd";
import CardDevice from "../common/CardDevice";
import { loadApple } from "../../redux/actions/appleActions";
import { addItemToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { handleError } from "../../api/apiUtils";

function ApplePage(props) {
  useEffect(() => {
    props.loadApple().catch((error) => console.log(error));
  }, []);

  function handAddToCart(event) {
    const id = parseInt(event.target.id);
    const foundIphone = props.apple.find((iphone) => iphone.id === id);
    props.addItemToCart(foundIphone);
  }

  return (
    <div>
      <h2>Apple Page</h2>
      <Row>
        {props.apple.map((iphone) => (
          <CardDevice
            key={iphone.id}
            onAddToCart={handAddToCart}
            id={iphone.id}
            url={iphone.url}
            title={iphone.title}
            path={iphone.path}
            // description={iphone.description}
            price={iphone.price}
          />
        ))}
      </Row>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    apple: state.apple,
    cart: state.cart,
  };
}

const mapDispatchToProps = {
  addItemToCart,
  loadApple,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplePage);
