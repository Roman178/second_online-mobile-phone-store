import React from "react";
import { Card } from "antd";

function ApplePage(props) {
  return (
    <div>
      <h2>Apple Page</h2>

      <Card
        hoverable
        style={{ width: 150 }}
        cover={
          <img
            alt="iPhone XR"
            src="https://cdn.svyaznoy.ru/upload/iblock/f66/blue.jpg/resize/307x224/"
          />
        }
      >
        <Card.Meta title="iPhone XR" description="The most popular iPhone" />
      </Card>
    </div>
  );
}

export default ApplePage;
