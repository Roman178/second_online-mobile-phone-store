import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
// import Container from "react-bootstrap/Container";
import { Layout } from "antd";
import HomePage from "./HomePage";
import ApplePage from "./brands/ApplePage";
import HonorPage from "./brands/HonorPage";
import HuaweiPage from "./brands/HuaweiPage";
import SamsungPage from "./brands/SamsungPage";
import XiaomiPage from "./brands/XiaomiPage";

function App() {
  console.log();
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Layout.Content>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/apple" component={ApplePage} />
            <Route path="/honor" component={HonorPage} />
            <Route path="/huawei" component={HuaweiPage} />
            <Route path="/samsung" component={SamsungPage} />
            <Route path="/xiaomi" component={XiaomiPage} />
          </Switch>
        </Layout.Content>
      </Layout>
      <Footer />
    </Layout>
  );
}

export default App;
