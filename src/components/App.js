import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import { Layout } from "antd";
import ROUTES, { RenderRoutes } from "../route";

const { Content } = Layout;

function App(props) {
  return (
    <Layout>
      <Header />
      <Layout style={{ marginTop: "64px" }}>
        {props.location.pathname === "/" ? undefined : <Sidebar />}
        <Content>
          <RenderRoutes routes={ROUTES} />
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
}

export default withRouter(App);
