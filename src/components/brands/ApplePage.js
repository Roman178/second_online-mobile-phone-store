import React, { useEffect } from "react";
import { Row } from "antd";
import CardDevice from "../common/CardDevice";
import { loadApple } from "../../redux/actions/appleActions";
import { loadCart, addItemToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { handleError } from "../../api/apiUtils";

function ApplePage(props) {
  useEffect(() => {
    props.loadApple().catch((error) => console.log(error));
    props.loadCart().catch((error) => console.error(error));
  }, []);

  // function handleAddToCart(event) {
  //   event.preventDefault();
  //   const foundIphone = props.apple.find(
  //     (iphone) => iphone.id === parseInt(event.target.id)
  //   );
  //   if (!props.cart.find((item) => item.id === foundIphone.id)) {
  //     props.addItemToCart(foundIphone);
  //   }
  // }

  const handleAddToCart = (iphone) => {
    if (!props.cart.find((item) => item.id === iphone.id)) {
      props.addItemToCart({ ...iphone, quantity: 1 });
    }
  };

  return (
    <div>
      <h2>Apple Page</h2>
      <Row>
        {props.apple.map((iphone) => (
          <CardDevice
            key={iphone.id}
            onAddToCart={() => handleAddToCart(iphone)}
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
  loadCart,
  addItemToCart,
  loadApple,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplePage);
