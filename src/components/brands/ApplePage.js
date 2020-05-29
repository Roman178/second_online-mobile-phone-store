import React, { useEffect } from "react";
import { Card, Row } from "antd";
import { NavLink } from "react-router-dom";
import * as appleActions from "../../redux/actions/appleActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function ApplePage(props) {
  console.log(props);
  useEffect(() => {
    if (props.apple === 0) {
      props.actions.loadApple().catch((error) => console.log(error));
    }
  }, []);

  return (
    <div>
      <h2>Apple Page</h2>
      <Row>
        <NavLink to={props.match.url + "/iphonexr"} style={{ margin: "1%" }}>
          <Card
            hoverable
            style={{ width: 180 }}
            cover={
              <img
                alt="iPhone 11 pro MAX"
                src="https://cdn2.biggeek.ru/1/212/29e7/9943-189iphone-11-pro-max-silver-select-2019.jpeg"
              />
            }
          >
            <Card.Meta
              title="iPhone 11 pro MAX"
              description="The best iPhone"
            />
          </Card>
        </NavLink>

        <NavLink to={props.match.url + "/iphonexr"} style={{ margin: "1%" }}>
          <Card
            hoverable
            style={{ width: 180 }}
            cover={
              <img
                alt="iPhone SE"
                src="https://cdn2.biggeek.ru/1/212/07f5/11340-521iphone-se-black-select-2020.png"
              />
            }
          >
            <Card.Meta title="iPhone SE" description="The lovely iPhone" />
          </Card>
        </NavLink>

        <NavLink to={props.match.url + "/iphonexr"} style={{ margin: "1%" }}>
          <Card
            hoverable
            style={{ width: 180 }}
            cover={
              <img
                alt="iPhone XR"
                src="https://cdn2.biggeek.ru/1/212/c1d0/xr-black_2.jpg"
              />
            }
          >
            <Card.Meta
              title="iPhone XR"
              description="The most popular iPhone"
            />
          </Card>
        </NavLink>

        <NavLink to={props.match.url + "/iphonexr"} style={{ margin: "1%" }}>
          <Card
            hoverable
            style={{ width: 180 }}
            cover={
              <img
                alt="iPhone XS"
                src="https://cdn2.biggeek.ru/1/212/0ce7/xs-gold_1.jpg"
              />
            }
          >
            <Card.Meta title="iPhone XS" description="The very ... iPhone" />
          </Card>
        </NavLink>
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
  loadApple: appleActions.loadApple,
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplePage);
