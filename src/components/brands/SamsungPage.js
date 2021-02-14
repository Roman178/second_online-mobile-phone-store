import React from "react";
import { Row } from "antd";
import CardDevice from "../common/CardDevice";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";

function SamsungPage(props) {
  const handleAddToCart = (item) => {
    if (!props.cart.find((i) => i.id === item.id)) {
      props.addItemToCart({ ...item, quantity: 1, cost: item.price });
    }
  };

  function addBrandToObj(arrOfDevices) {
    return { ...arrOfDevices, brand: "samsung" };
  }

  const arrOfAllSamsungGoods = Object.values(props.samsung)
    .flat()
    .map((d) => addBrandToObj(d));

  return (
    <div>
      <h2>Samsung Page</h2>
      <Row>
        <CardDevice list={arrOfAllSamsungGoods} onAddToCart={handleAddToCart} />
        {/* {arrOfAllSamsungGoods.map((item) => (
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
        ))} */}
      </Row>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    samsung: state.samsung,
    cart: state.cart,
  };
}

const mapDispatchToProps = {
  addItemToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SamsungPage);
