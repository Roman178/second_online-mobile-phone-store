import React from "react";
import { Layout } from "antd";

function Footer(props) {
  const FooterAntd = Layout.Footer;

  return (
    <FooterAntd>
      <div>
        <span>Footers content</span>
      </div>
    </FooterAntd>
  );
}

export default Footer;
