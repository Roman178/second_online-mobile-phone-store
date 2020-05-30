import React, { useEffect } from "react";
import { Card, Row } from "antd";
import { NavLink } from "react-router-dom";
import CardDevice from "../common/CardDevice";
import { loadApple } from "../../redux/actions/appleActions";
import { connect } from "react-redux";

function ApplePage(props) {
  console.log(props);
  useEffect(() => {
    props.loadApple().catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h2>Apple Page</h2>
      <Row>
        {props.apple.map((iphone) => (
          <CardDevice
            key={iphone.id}
            url={iphone.url}
            title={iphone.title}
            path={iphone.path}
            description={iphone.description}
          />
        ))}
      </Row>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    apple: state.apple,
  };
}

const mapDispatchToProps = {
  loadApple,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplePage);
