import React from "react";
import { Layout } from "antd";

function Footer(props) {
  const FooterAntd = Layout.Footer;

  return (
    <FooterAntd
      style={{ backgroundColor: "#001529", height: "500px", padding: "0" }}
    >
      <div>
        <span>Footers content</span>
      </div>
    </FooterAntd>
  );
}

export default Footer;
