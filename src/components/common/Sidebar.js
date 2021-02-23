import React from "react";
import PropTypes from "prop-types";
import { Layout, Menu } from "antd";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import AppleMenu from "../menu/AppleMenu";
import SamsungMenu from "../menu/SamsungMenu";
import XiaomiMenu from "../menu/XiaomiMenu";
import HonorMenu from "../menu/HonorMenu";
import HuaweiMenu from "../menu/HuaweiMenu";

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
            apple={this.props.apple}
          />
        )}

        {this.props.location.pathname.startsWith("/samsung") && (
          <SamsungMenu
            galaxys={this.props.samsung.galaxys}
            galaxya={this.props.samsung.galaxya}
            galaxynote={this.props.samsung.galaxynote}
            galaxytab={this.props.samsung.galaxytab}
            samsung={this.props.samsung}
          />
        )}

        {this.props.location.pathname.startsWith("/xiaomi") && (
          <XiaomiMenu
            poco={this.props.xiaomi.poco}
            xiaomi={this.props.xiaomi}
          />
        )}

        {this.props.location.pathname.startsWith("/honor") && (
          <HonorMenu nine={this.props.honor.nine} honor={this.props.honor} />
        )}

        {this.props.location.pathname.startsWith("/huawei") && (
          <HuaweiMenu
            modelp={this.props.huawei.modelp}
            huawei={this.props.huawei}
          />
        )}
      </Sider>
    );
  }
}

Sidebar.propTypes = {
  apple: PropTypes.object.isRequired,
  samsung: PropTypes.object.isRequired,
  xiaomi: PropTypes.object.isRequired,
  honor: PropTypes.object.isRequired,
  huawei: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    apple: state.apple,
    samsung: state.samsung,
    huawei: state.huawei,
    honor: state.honor,
    xiaomi: state.xiaomi,
  };
}

export default connect(mapStateToProps)(withRouter(Sidebar));
