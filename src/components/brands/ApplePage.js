import React from "react";
import PropTypes from "prop-types";
import { Row } from "antd";
import ListOfCardsDevices from "../common/ListOfCardsDevices";
import { addItemToCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { withRouter } from "react-router";

function ApplePage(props) {
  function addBrandToObj(arrOfDevices) {
    return { ...arrOfDevices, brand: "apple" };
  }

  const arrOfAllAppleGoods = Object.values(props.apple).flat();

  function checkUrl() {
    switch (props.location.pathname) {
      case "/apple":
        return arrOfAllAppleGoods;
      case "/apple/iphones":
        return props.apple.iphones;
      case "/apple/ipads":
        return props.apple.ipads;
      case "/apple/macbooks":
        return props.apple.macbooks;
      default:
        return undefined;
    }
  }
  return (
    <>
      <h2>Apple</h2>
      <Row>
        <section className="list-devices-main-cont">
          <ListOfCardsDevices list={checkUrl()} />
        </section>
      </Row>
    </>
  );
}

ApplePage.propTypes = {
  apple: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    apple: state.apple,
    cart: state.cart,
  };
}

const mapDispatchToProps = {
  addItemToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ApplePage));
