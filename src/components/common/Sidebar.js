import React from "react";
import { Layout, Menu } from "antd";
import NavLink from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import AppleMenu from "../menu/AppleMenu";
import SamsungMenu from "../menu/SamsungMenu";

const { Sider } = Layout;
const { SubMenu } = Menu;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(Object.values(this.props.apple).flat());
    return (
      <Sider className="sidebar" width={200} style={{ marginTop: "100px" }}>
        {this.props.location.pathname.startsWith("/apple") && (
          <AppleMenu
            iphones={this.props.apple.iphones}
            ipads={this.props.apple.ipads}
            macbooks={this.props.apple.macbooks}
            apple={this.props.apple}
          />
        )}

        {this.props.location.pathname.startsWith("/samsung") && (
          <SamsungMenu galaxyS={this.props.samsung.galaxyS}></SamsungMenu>
        )}

        {/* <Menu mode="vertical" style={{ height: "100%" }}>
          <SubMenu
            key="sub1"
            title={<span>iPhone</span>}
            onTitleClick={(obj) => console.log(obj)}
          >
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span>iPad</span>}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span>Mac Book</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu> */}
      </Sider>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { apple: state.apple, samsung: state.samsung };
}

export default connect(mapStateToProps)(withRouter(Sidebar));
