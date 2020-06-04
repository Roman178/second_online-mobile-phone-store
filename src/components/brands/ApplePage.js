import React, { useEffect } from "react";
import { Row } from "antd";
import CardDevice from "../common/CardDevice";
import { loadApple } from "../../redux/actions/appleActions";
import { connect } from "react-redux";

function ApplePage(props) {
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
            // description={iphone.description}
            price={iphone.price}
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
