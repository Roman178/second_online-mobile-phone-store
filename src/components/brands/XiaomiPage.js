import React from "react";
import PropTypes from "prop-types";
import { Row } from "antd";
import ListOfCardsDevices from "../common/ListOfCardsDevices";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";

function XiaomiPage(props) {
  const arrOfAllXiaomiGoods = Object.values(props.xiaomi).flat();

  function checkUrl() {
    switch (props.location.pathname) {
      case "/xiaomi":
        return arrOfAllXiaomiGoods;
      case "/xiaomi/poco":
        return props.xiaomi.poco;
      case "/xiaomi/redmi":
        return props.xiaomi.redmi;
      case "/xiaomi/mi":
        return props.xiaomi.mi;
      default:
        return;
    }
  }

  return (
    <div>
      <h2>xiaomi</h2>
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

XiaomiPage.propTypes = {
  xiaomi: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    xiaomi: state.xiaomi,
    cart: state.cart,
  };
}

const mapDispatchToProps = {
  addItemToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(XiaomiPage);
