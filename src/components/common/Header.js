import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Layout } from "antd";
import MenuForHeader from "../common/MenuForHeader";
import { loadApple, loadSamsung } from "../../redux/actions/appleActions";
import { deleteItemFromCart } from "../../redux/actions/cartActions";
import Search from "../Search";
import CartBlockForHeader from "../cart/CartBlockForHeader";
import MobileHeader from "../MobileHeader";

const HeaderAntd = Layout.Header;

function Header(props) {
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    props.loadApple();
    props.loadSamsung();
  }, []);

  useEffect(() => {
    if (props.cart.length > 0) {
      const totalItemsQuantity = props.cart.reduce(
        (sum, current) => sum + parseInt(current.quantity),
        0
      );
      setQuantity(totalItemsQuantity);
    }

    if (props.cart.length === 0) {
      setQuantity(0);
    }
  }, [props]);

  useEffect(() => {
    if (props.cart.length > 0) {
      setCart(props.cart);
    }
  }, [props]);

  function handleDeleteItem(item) {
    setCart(cart.filter((i) => i.id !== item.id));
    props.deleteItemFromCart(item);
  }

  console.log(props);

  const options = props.allProducts.map((prod) => ({
    ...prod,
    value: `${prod.brand} ${prod.title} ${prod.memory} ${prod.color}`,
  }));

  console.log(options);
  return (
    <>
      <HeaderAntd className="main-header">
        <MenuForHeader />
        <Search options={options} />
        <CartBlockForHeader
          quantity={quantity}
          onDeleteItem={handleDeleteItem}
          cart={cart}
        />
      </HeaderAntd>
      <MobileHeader quantity={quantity} options={options} />
    </>
  );
}

Header.propTypes = {
  cart: PropTypes.array.isRequired,
  allProducts: PropTypes.array.isRequired,
  loadApple: PropTypes.func.isRequired,
  loadSamsung: PropTypes.func.isRequired,
  deleteItemFromCart: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  function getArrOfAllProducts() {
    let allProducts = [];
    for (let brand in state) {
      if (
        brand === "apple" ||
        brand === "samsung" ||
        brand === "huawei" ||
        brand === "honor" ||
        brand === "xiaomi"
      ) {
        let productsOfCurrBrand = [];

        for (let device in state[brand]) {
          productsOfCurrBrand.push(
            ...state[brand][device].map((d) => ({
              ...d,
              brand: d.brand[0].toUpperCase() + d.brand.slice(1),
            }))
          );
        }
        allProducts.push(...productsOfCurrBrand);
      }
    }
    return allProducts;
  }
  return { cart: state.cart, allProducts: getArrOfAllProducts() };
}

const mapDispatchToProps = {
  loadApple,
  loadSamsung,
  deleteItemFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
