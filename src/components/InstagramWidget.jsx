import React from "react";
import { ElfsightWidget } from "react-elfsight-widget";

function InstagramWidget() {
  window.addEventListener("load", (event) => {
    const Message = document.querySelector("#eapps-instagram-feed-1 div + a");
    console.log(Message);
  });
  return (
    <div className="IG--block__wrapper">
      <ElfsightWidget widgetID="f0e3a281-00e6-490e-8d3d-9bfa866b7f78" />
    </div>
  );
}

export default InstagramWidget;
