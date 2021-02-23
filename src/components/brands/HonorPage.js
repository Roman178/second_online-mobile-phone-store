import React from "react";
import PropTypes from "prop-types";
import { Row } from "antd";
import ListOfCardsDevices from "../common/ListOfCardsDevices";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";

function HonorPage(props) {
  const arrOfAllHonorGoods = Object.values(props.honor).flat();

  function checkUrl() {
    switch (props.location.pathname) {
      case "/honor":
        return arrOfAllHonorGoods;
      case "/honor/nine":
        return props.honor.nine;
      default:
        return;
    }
  }

  return (
    <div>
      <h2>honor</h2>
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

HonorPage.propTypes = {
  honor: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    honor: state.honor,
    cart: state.cart,
  };
}

const mapDispatchToProps = {
  addItemToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(HonorPage);
