import React from "react";
import { useNavigate } from "react-router-dom";
import Nick from "../media/nick.png";
import BBLogo from "../media/BBLogo.png";
import USflag from "../media/usflag.png";
import IFBB from "../media/ifbb.png";
function GutServiceScreen() {
  const navigate = useNavigate();
  return (
    <main className="hero-section">
      <div className="heroImg"></div>
      <img src={Nick} className="nick-crop" alt="" />
      {/*  <img src={maskGroup} className="maskImg" alt="" /> */}
      <div className="hero-container">
        <div className="hero-text">
          <img
            src={BBLogo}
            onClick={() => navigate("/")}
            className="bbs--logo"
            alt=""
          />
          <h1 className="heading-text">
            Become The Best <br />
            Version Of You
          </h1>
          <button className="button button--robinson">Get started</button>
        </div>
      </div>
      <div className="hero__bullet-points">
        <div>
          <img src={IFBB} alt="" />
          <p>IFBB Pro</p>
        </div>
        <div className="">
          <img src={USflag} alt="" />
          <p>Former Mr. Usa</p>
        </div>
      </div>
    </main>
  );
}

export default GutServiceScreen;
