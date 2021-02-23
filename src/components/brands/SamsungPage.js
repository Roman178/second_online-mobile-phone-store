import React from "react";
import PropTypes from "prop-types";
import { Row } from "antd";
import ListOfCardsDevices from "../common/ListOfCardsDevices";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";

function SamsungPage(props) {
  const arrOfAllSamsungGoods = Object.values(props.samsung).flat();

  function checkUrl() {
    switch (props.location.pathname) {
      case "/samsung":
        return arrOfAllSamsungGoods;
      case "/samsung/galaxys":
        return props.samsung.galaxys;
      case "/samsung/galaxya":
        return props.samsung.galaxya;
      case "/samsung/galaxynote":
        return props.samsung.galaxynote;
      case "/samsung/galaxytab":
        return props.samsung.galaxytab;

      // case "/apple/ipads":
      //   return props.apple.ipads;
      // case "/apple/macbooks":
      //   return props.apple.macbooks;
      default:
        return;
    }
  }

  return (
    <div>
      <h2>Samsung</h2>
      <Row>
        <section className="list-devices-main-cont">
          <ListOfCardsDevices
            list={checkUrl()}
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
