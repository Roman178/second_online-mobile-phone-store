import React from "react";
import PropTypes from "prop-types";
import { Row } from "antd";
import ListOfCardsDevices from "../common/ListOfCardsDevices";
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
      <h2>Samsung</h2>
      <Row>
        <section className="list-devices-main-cont">
          <ListOfCardsDevices
            list={arrOfAllSamsungGoods}
            // onAddToCart={handleAddToCart}
          />
        </section>
      </Row>
    </div>
  );
}

SamsungPage.propTypes = {
  samsung: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

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
