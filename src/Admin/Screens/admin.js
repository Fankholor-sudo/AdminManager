import React from "react";
import SideBar from "./sidebar";
import { Client } from "paho-mqtt";

export default function Admin() {
  const clientId = "client-id" + Math.random().toString(27);
  const host = 'wss://a2fr1lhmxa6xyh-ats.iot.us-east-1.amazonaws.com/mqtt';
  const accessKey = ""; //I removed the keys due to security issues.
  const secretKey = "";
  const region = "us-east-1";
  const topic = "reactTest/status";

  var connectOptions = {
    onSuccess: onConnect,
    onFailure: onFailure,
    useSSL: true,
    timeout: 1000
  };

  let mqtt_client = new Client(host, clientId);

  mqtt_client.onMessageArrived = onMessageArrived;
  mqtt_client.onConnectionLost = onConnectionLost;

  function onConnect() {
    console.log("OK: Connected!");
    mqtt_client.subscribe(topic);
  }

  React.useEffect(() => {
    // mqtt_client.connect(connectOptions);

  // mqtt_client.on("error", err => {
  //   console.log("on Error: " + err);
  //   // mqtt_client.end();
  // });
  // mqtt_client.on("reconnect", () => {
  //   console.log("Reconnecting...");
  // });
  // mqtt_client.on("connect", () => {
  //   console.log("Client Connected : ", clientId);
  // });

  }, []);

  function onMessageArrived(m) {
    console.log("onMessage Arrived:" + m);
  }

  function onFailure(e) {
    console.log("onFailure error: ", e);
  }
  function onConnectionLost(e) {
    console.log("onConnection Lost:" + e);
  }

  return (
    <div className={"admin"}>
      <div>
        <SideBar />
      </div>
    </div>
  );
}