import React from "react";
import { connect } from "react-redux";
import { Menu } from "antd";

const { SubMenu } = Menu;

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { brands } = this.props;
    const arrOfBrandsKeys = Object.keys(brands);
    return (
      <Menu mode="inline">
        {Object.keys(brands).map((brand) => {
          return (
            <Menu.ItemGroup className="li-mobile-menu">
              <Menu.Item className="submenu-title">{brand}</Menu.Item>
              <SubMenu key={brand} className="submenu-mobile">
                {Object.keys(brands[brand]).map((device) => {
                  return (
                    <Menu.ItemGroup>
                      <Menu.Item className="submenu-title">{device}</Menu.Item>
                      <SubMenu key={device}></SubMenu>
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

export default connect(mapStateToProps)(MobileMenu);
