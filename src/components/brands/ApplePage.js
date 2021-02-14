import React, { useEffect } from "react";
import { Row } from "antd";
import CardDevice from "../common/CardDevice";
import { loadApple } from "../../redux/actions/appleActions";
import { loadCart, addItemToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { handleError } from "../../api/apiUtils";
import { withRouter } from "react-router";

function ApplePage(props) {
  // console.log(props);
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

  // function handleAddToCart(item) {
  //   if (!props.cart.find((i) => i.id === item.id)) {
  //     props.addItemToCart({ ...item, quantity: 1, cost: item.price });
  //   }
  // }

  function addBrandToObj(arrOfDevices) {
    return { ...arrOfDevices, brand: "apple" };
  }

  const arrOfAllAppleGoods = Object.values(props.apple).flat();
  console.log(arrOfAllAppleGoods);

  function checkUrl() {
    switch (props.location.pathname) {
      case "/apple":
        return arrOfAllAppleGoods.map((d) => addBrandToObj(d));
      case "/apple/iphones":
        return props.apple.iphones.map((d) => addBrandToObj(d));
      case "/apple/ipads":
        return props.apple.ipads.map((d) => addBrandToObj(d));
      case "/apple/macbooks":
        return props.apple.macbooks.map((d) => addBrandToObj(d));
      default:
        return undefined;
    }
  }

  return (
    <>
      <h2>Apple</h2>
      <Row>
        <section className="list-devices-main-cont">
          <CardDevice
            list={checkUrl()}
            // onAddToCart={handleAddToCart}
          />
        </section>
        {/* {props.location.pathname === "/apple/iphones" && (
          <CardDevice
            list={props.apple.iphones}
            onAddToCart={handleAddToCart}
          />
        )}

        {props.location.pathname === "/apple/ipads" && (
          <CardDevice list={props.apple.ipads} onAddToCart={handleAddToCart} />
        )}

        {props.location.pathname === "/apple/macbooks" && (
          <CardDevice
            list={props.apple.macbooks}
            onAddToCart={handleAddToCart}
          />
        )} */}

        {/* {arrOfAllAppleGoods.map((item) => (
          <CardDevice
            list={arrOfAllAppleGoods}
            key={item.id}
            onAddToCart={() => handleAddToCart(item)}
            id={item.id}
            url={item.url}
            title={item.title}
            path={item.path}
            // description={item.description}
            price={"$" + item.price}
          />
        ))} */}
      </Row>
    </>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ApplePage));
