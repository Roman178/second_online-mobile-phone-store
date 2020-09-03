import React from "react";
import { Route, Switch } from "react-router-dom";
import HonorPage from "./components/brands/HonorPage";
import HuaweiPage from "./components/brands/HuaweiPage";
import SamsungPage from "./components/brands/SamsungPage";
import ApplePage from "./components/brands/ApplePage";
import XiaomiPage from "./components/brands/XiaomiPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/common/NotFoundPage";
import IphoneXR from "./components/brands/IphoneXR";
import CartPage from "./components/cart/CartPage";
import CheckoutPage from "./components/cart/CheckoutPage";

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    component: RenderRoutes,
    routes: [
      { path: "/", key: "HOME_PAGE", exact: true, component: HomePage },
      {
        path: "/apple",
        key: "APPLE",
        component: RenderRoutes,
        routes: [
          {
            path: "/apple",
            exact: true,
            key: "APPLE_ROOT",
            component: ApplePage,
          },
          {
            path: "/apple/iphonexr",
            exact: true,
            key: "IPHONE_XR",
            component: IphoneXR,
          },
        ],
      },
      { path: "/honor", key: "HONOR_PAGE", component: HonorPage },
      { path: "/huawei", key: "HUAWEI_PAGE", component: HuaweiPage },
      { path: "/samsung", key: "SAMSUNG_PAGE", component: SamsungPage },
      { path: "/xiaomi", key: "XIAOMI_PAGE", component: XiaomiPage },
      { path: "/cart", key: "CART_PAGE", component: CartPage },
      { path: "/checkout", key: "CHECKOUT_PAGE", component: CheckoutPage },
    ],
  },
];

export default ROUTES;

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => {
        return <route.component {...props} routes={route.routes} />;
      }}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export function RenderRoutes(props) {
  return (
    <Switch>
      {props.routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={NotFoundPage} />
    </Switch>
  );
}
