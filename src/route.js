import React from "react";
import { Route, Switch } from "react-router-dom";
import HonorPage from "./components/brands/HonorPage";
import HuaweiPage from "./components/brands/HuaweiPage";
import SamsungPage from "./components/brands/SamsungPage";
import ApplePage from "./components/brands/ApplePage";
import XiaomiPage from "./components/brands/XiaomiPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/common/NotFoundPage";
import DevicePage from "./components/common/DevicePage";
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
            path: "/apple/iphones/:urlName",
            exact: true,
            key: "IPHONES",
            component: DevicePage,
          },
          {
            path: "/apple/iphones",
            exact: true,
            key: "IPHONES",
            component: ApplePage,
          },
          {
            path: "/apple/ipads/:urlName",
            exact: true,
            key: "IPADS",
            component: DevicePage,
          },
          {
            path: "/apple/ipads",
            exact: true,
            key: "IPADS",
            component: ApplePage,
          },
        ],
      },
      {
        path: "/samsung",
        key: "SAMSUNG",
        component: RenderRoutes,
        routes: [
          {
            path: "/samsung",
            exact: true,
            key: "SAMSUNG_ROOT",
            component: SamsungPage,
          },
          {
            path: "/samsung/galaxys/:urlName",
            exact: true,
            key: "GALAXY_S",
            component: DevicePage,
          },
          {
            path: "/samsung/galaxys",
            exact: true,
            key: "GALAXY_S",
            component: SamsungPage,
          },
          {
            path: "/samsung/galaxya/:urlName",
            exact: true,
            key: "GALAXY_A",
            component: DevicePage,
          },
          {
            path: "/samsung/galaxya",
            exact: true,
            key: "GALAXY_A",
            component: SamsungPage,
          },
          {
            path: "/samsung/galaxynote/:urlName",
            exact: true,
            key: "GALAXY_NOTE",
            component: DevicePage,
          },
          {
            path: "/samsung/galaxynote/",
            exact: true,
            key: "GALAXY_NOTE",
            component: SamsungPage,
          },
          {
            path: "/samsung/galaxytab/:urlName",
            exact: true,
            key: "GALAXY_TAB",
            component: DevicePage,
          },
          {
            path: "/samsung/galaxytab/",
            exact: true,
            key: "GALAXY_TAB",
            component: SamsungPage,
          },
        ],
      },
      {
        path: "/honor",
        key: "HONOR",
        component: RenderRoutes,
        routes: [
          {
            path: "/honor",
            exact: true,
            key: "HONOR_ROOT",
            component: HonorPage,
          },
          {
            path: "/honor/nine/:urlName",
            exact: true,
            key: "NINE",
            component: DevicePage,
          },
          {
            path: "/honor/nine/",
            exact: true,
            key: "NINE",
            component: HonorPage,
          },
          {
            path: "/honor/ten/:urlName",
            exact: true,
            key: "TEN",
            component: DevicePage,
          },
          {
            path: "/honor/ten/",
            exact: true,
            key: "TEN",
            component: HonorPage,
          },
          {
            path: "/honor/thirty/:urlName",
            exact: true,
            key: "THIRTY",
            component: DevicePage,
          },
          {
            path: "/honor/thirty/",
            exact: true,
            key: "THIRTY",
            component: HonorPage,
          },
        ],
      },
      {
        path: "/huawei",
        key: "HUAWEI",
        component: RenderRoutes,
        routes: [
          {
            path: "/huawei",
            exact: true,
            key: "HUAWEI_ROOT",
            component: HuaweiPage,
          },
          {
            path: "/huawei/modelp/:urlName",
            exact: true,
            key: "MODEL_P",
            component: DevicePage,
          },
          {
            path: "/huawei/modelp/",
            exact: true,
            key: "MODEL_P",
            component: HuaweiPage,
          },
          {
            path: "/huawei/modely/:urlName",
            exact: true,
            key: "MODEL_Y",
            component: DevicePage,
          },
          {
            path: "/huawei/modely/",
            exact: true,
            key: "MODEL_Y",
            component: HuaweiPage,
          },
        ],
      },
      {
        path: "/xiaomi",
        key: "XIAOMI",
        component: RenderRoutes,
        routes: [
          {
            path: "/xiaomi",
            exact: true,
            key: "XIAOMI_ROOT",
            component: XiaomiPage,
          },
          {
            path: "/xiaomi/poco/:urlName",
            exact: true,
            key: "POCO",
            component: DevicePage,
          },
          {
            path: "/xiaomi/poco/",
            exact: true,
            key: "POCO",
            component: XiaomiPage,
          },
          {
            path: "/xiaomi/redmi/:urlName",
            exact: true,
            key: "REDMI",
            component: DevicePage,
          },
          {
            path: "/xiaomi/redmi/",
            exact: true,
            key: "REDMI",
            component: XiaomiPage,
          },
          {
            path: "/xiaomi/mi/:urlName",
            exact: true,
            key: "MI",
            component: DevicePage,
          },
          {
            path: "/xiaomi/mi/",
            exact: true,
            key: "MI",
            component: XiaomiPage,
          },
        ],
      },
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
