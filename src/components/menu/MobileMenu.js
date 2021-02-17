import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Menu } from "antd";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <Menu mode="inline" className="main-mobile-menu">
        {Object.keys(this.props.brands).map((brand) => {
          return (
            <Menu.ItemGroup key={brand} className="li-mobile-menu">
              <Menu.Item
                className="submenu-title"
                onClick={() => {
                  this.props.history.push("/" + brand);
                  return this.props.onClose();
                }}
              >
                <h5 className="h5-mobile-menu">
                  {brand[0].toUpperCase() + brand.slice(1)}
                </h5>
              </Menu.Item>
              <SubMenu key={brand} className="submenu-mobile">
                {Object.keys(this.props.brands[brand]).map((device) => {
                  return (
                    <Menu.ItemGroup key={device}>
                      <Menu.Item
                        className="submenu-title"
                        onClick={() => {
                          this.props.history.push("/" + brand + "/" + device);
                          return this.props.onClose();
                        }}
                      >
                        <h6 className="h6-mobile-menu">{device}</h6>
                      </Menu.Item>
                      <SubMenu key={device}>
                        {this.props.brands[brand][device].map((item) => {
                          return (
                            <Menu.Item key={item.id} className="test-pest">
                              <NavLink
                                onClick={this.props.onClose}
                                to={`/${item.brand}/${item.category}/${item.url}`}
                              >
                                {`${item.title} ${item.memory} ${item.color}`}
                              </NavLink>
                            </Menu.Item>
                          );
                        })}
                      </SubMenu>
                    </Menu.ItemGroup>
                  );
                })}
              </SubMenu>
            </Menu.ItemGroup>
          );
        })}
      </Menu>
    );
  }
}

MobileMenu.propTypes = {
  brands: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    brands: {
      apple: state.apple,
      samsung: state.samsung,
      huawei: {},
      honor: {},
      xiaomi: {},
    },
  };
}

export default withRouter(connect(mapStateToProps)(MobileMenu));
