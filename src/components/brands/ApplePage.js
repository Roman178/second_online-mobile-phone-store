import React, { useEffect } from "react";
import { Row } from "antd";
import CardDevice from "../common/CardDevice";
import { loadApple } from "../../redux/actions/appleActions";
import { loadCart, addItemToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { handleError } from "../../api/apiUtils";

function ApplePage(props) {
  // useEffect(() => {
  //   props.loadApple().catch((error) => console.log(error));
  // }, []);

  // function handleAddToCart(event) {
  //   event.preventDefault();
  //   const foundIphone = props.apple.find(
  //     (iphone) => iphone.id === parseInt(event.target.id)
  //   );
  //   if (!props.cart.find((item) => item.id === foundIphone.id)) {
  //     props.addItemToCart(foundIphone);
  //   }
  // }

  const handleAddToCart = (item) => {
    if (!props.cart.find((i) => i.id === item.id)) {
      props.addItemToCart({ ...item, quantity: 1, cost: item.price });
    }
  };

  const arrOfAllAppleGoods = Object.values(props.apple).flat();

  return (
    <div>
      <h2>Apple Page</h2>
      <Row>
        {arrOfAllAppleGoods.map((item) => (
          <CardDevice
            key={item.id}
            onAddToCart={() => handleAddToCart(item)}
            id={item.id}
            url={item.url}
            title={item.title}
            path={item.path}
            // description={item.description}
            price={"$" + item.price}
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
  //   loadCart,
  addItemToCart,
  //   loadApple,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplePage);
