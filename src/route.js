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
    path: `${process.env.PUBLIC_URL}/`,
    key: "ROOT",
    component: RenderRoutes,
    routes: [
      {
        path: `${process.env.PUBLIC_URL}/`,
        key: "HOME_PAGE",
        exact: true,
        component: HomePage,
      },
      {
        path: `${process.env.PUBLIC_URL}/apple`,
        key: "APPLE",
        component: RenderRoutes,
        routes: [
          {
            path: `${process.env.PUBLIC_URL}/apple`,
            exact: true,
            key: "APPLE_ROOT",
            component: ApplePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/apple/iphones/:urlName`,
            exact: true,
            key: "IPHONES",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/apple/iphones`,
            exact: true,
            key: "IPHONES",
            component: ApplePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/apple/ipads/:urlName`,
            exact: true,
            key: "IPADS",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/apple/ipads`,
            exact: true,
            key: "IPADS",
            component: ApplePage,
          },
        ],
      },
      {
        path: `${process.env.PUBLIC_URL}/samsung`,
        key: "SAMSUNG",
        component: RenderRoutes,
        routes: [
          {
            path: `${process.env.PUBLIC_URL}/samsung`,
            exact: true,
            key: "SAMSUNG_ROOT",
            component: SamsungPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/samsung/galaxys/:urlName`,
            exact: true,
            key: "GALAXY_S",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/samsung/galaxys`,
            exact: true,
            key: "GALAXY_S",
            component: SamsungPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/samsung/galaxya/:urlName`,
            exact: true,
            key: "GALAXY_A",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/samsung/galaxya`,
            exact: true,
            key: "GALAXY_A",
            component: SamsungPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/samsung/galaxynote/:urlName`,
            exact: true,
            key: "GALAXY_NOTE",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/samsung/galaxynote/`,
            exact: true,
            key: "GALAXY_NOTE",
            component: SamsungPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/samsung/galaxytab/:urlName`,
            exact: true,
            key: "GALAXY_TAB",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/samsung/galaxytab/`,
            exact: true,
            key: "GALAXY_TAB",
            component: SamsungPage,
          },
        ],
      },
      {
        path: `${process.env.PUBLIC_URL}/honor`,
        key: "HONOR",
        component: RenderRoutes,
        routes: [
          {
            path: `${process.env.PUBLIC_URL}/honor`,
            exact: true,
            key: "HONOR_ROOT",
            component: HonorPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/honor/nine/:urlName`,
            exact: true,
            key: "NINE",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/honor/nine/`,
            exact: true,
            key: "NINE",
            component: HonorPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/honor/ten/:urlName`,
            exact: true,
            key: "TEN",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/honor/ten/`,
            exact: true,
            key: "TEN",
            component: HonorPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/honor/thirty/:urlName`,
            exact: true,
            key: "THIRTY",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/honor/thirty/`,
            exact: true,
            key: "THIRTY",
            component: HonorPage,
          },
        ],
      },
      {
        path: `${process.env.PUBLIC_URL}/huawei`,
        key: "HUAWEI",
        component: RenderRoutes,
        routes: [
          {
            path: `${process.env.PUBLIC_URL}/huawei`,
            exact: true,
            key: "HUAWEI_ROOT",
            component: HuaweiPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/huawei/modelp/:urlName`,
            exact: true,
            key: "MODEL_P",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/huawei/modelp/`,
            exact: true,
            key: "MODEL_P",
            component: HuaweiPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/huawei/modely/:urlName`,
            exact: true,
            key: "MODEL_Y",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/huawei/modely/`,
            exact: true,
            key: "MODEL_Y",
            component: HuaweiPage,
          },
        ],
      },
      {
        path: `${process.env.PUBLIC_URL}/xiaomi`,
        key: "XIAOMI",
        component: RenderRoutes,
        routes: [
          {
            path: `${process.env.PUBLIC_URL}/xiaomi`,
            exact: true,
            key: "XIAOMI_ROOT",
            component: XiaomiPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/xiaomi/poco/:urlName`,
            exact: true,
            key: "POCO",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/xiaomi/poco/`,
            exact: true,
            key: "POCO",
            component: XiaomiPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/xiaomi/redmi/:urlName`,
            exact: true,
            key: "REDMI",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/xiaomi/redmi/`,
            exact: true,
            key: "REDMI",
            component: XiaomiPage,
          },
          {
            path: `${process.env.PUBLIC_URL}/xiaomi/mi/:urlName`,
            exact: true,
            key: "MI",
            component: DevicePage,
          },
          {
            path: `${process.env.PUBLIC_URL}/xiaomi/mi/`,
            exact: true,
            key: "MI",
            component: XiaomiPage,
          },
        ],
      },
      {
        path: `${process.env.PUBLIC_URL}/cart`,
        key: "CART_PAGE",
        component: CartPage,
      },
      {
        path: `${process.env.PUBLIC_URL}/checkout`,
        key: "CHECKOUT_PAGE",
        component: CheckoutPage,
      },
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
