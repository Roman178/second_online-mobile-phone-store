import React from "react";
import PropTypes from "prop-types";
import { Row } from "antd";
import ListOfCardsDevices from "../common/ListOfCardsDevices";
import { connect } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";

function HuaweiPage(props) {
  const arrOfAllHuaweiGoods = Object.values(props.huawei).flat();

  function checkUrl() {
    switch (props.location.pathname) {
      case "/huawei":
        return arrOfAllHuaweiGoods;
      case "/huawei/modelp":
        return props.huawei.modelp;
      default:
        return;
    }
  }

  return (
    <div>
      <h2>huawei</h2>
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

HuaweiPage.propTypes = {
  huawei: PropTypes.object.isRequired,
  cart: PropTypes.array.isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    huawei: state.huawei,
    cart: state.cart,
  };
}

const mapDispatchToProps = {
  addItemToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(HuaweiPage);
