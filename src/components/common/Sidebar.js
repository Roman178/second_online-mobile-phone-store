import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu } from "antd";
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
      </Sider>
    );
  }
}

Sidebar.propTypes = {
  apple: PropTypes.object.isRequired,
  samsung: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return { apple: state.apple, samsung: state.samsung };
}

export default connect(mapStateToProps)(withRouter(Sidebar));
