import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

function DeviceInfoBlock(props) {
  return (
    <Tabs
      id="info-block"
      defaultActiveKey="1"
      style={{
        paddingTop: "5%",
        marginTop: "5%",
        marginBottom: "100%",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        fontSize: "1.5em",
      }}
    >
      <TabPane tab="Description" key="1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Fermentum leo vel
        orci porta non pulvinar. Augue ut lectus arcu bibendum at varius vel
        pharetra. Mauris augue neque gravida in fermentum et. Nunc pulvinar
        sapien et ligula ullamcorper malesuada proin libero. Donec et odio
        pellentesque diam volutpat commodo sed egestas egestas. Tincidunt id
        aliquet risus feugiat in ante metus dictum. Nulla facilisi etiam
        dignissim diam quis. Turpis egestas integer eget aliquet nibh praesent
        tristique. Hendrerit gravida rutrum quisque non tellus orci ac auctor
        augue. Volutpat sed cras ornare arcu dui vivamus arcu felis. Felis eget
        velit aliquet sagittis id consectetur purus. Amet massa vitae tortor
        condimentum lacinia quis. Posuere morbi leo urna molestie at elementum
        eu facilisis sed. Rutrum tellus pellentesque eu tincidunt tortor aliquam
        nulla facilisi. Nisl pretium fusce id velit. Enim praesent elementum
        facilisis leo vel. Senectus et netus et malesuada fames ac. Praesent
        tristique magna sit amet purus gravida quis blandit turpis. Non nisi est
        sit amet facilisis magna. Id volutpat lacus laoreet non curabitur
        gravida arcu ac tortor. Enim ut tellus elementum sagittis vitae et.
        Viverra justo nec ultrices dui sapien eget. Ut lectus arcu bibendum at
        varius vel pharetra. Suspendisse in est ante in nibh. Elementum pulvinar
        etiam non quam lacus suspendisse.
      </TabPane>
      <TabPane tab="Specification" key="2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TabPane>
      <TabPane tab="Shipping" key="3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TabPane>
    </Tabs>
  );
}

export default DeviceInfoBlock;
