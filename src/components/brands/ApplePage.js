import React from "react";
import { Card, Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import { getApple } from "../../api/courseApi";

function ApplePage(props) {
  async function loadApple() {
    const _apple = await getApple().then((apple) => apple);
    return _apple;
  }

  const apple = async () => await loadApple();

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

export default ApplePage;
