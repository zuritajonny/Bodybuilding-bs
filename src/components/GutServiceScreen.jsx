import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Nick from "../media/nick.png";
import BBLogo from "../media/BBLogo.png";
import USflag from "../media/usflag.png";
import IFBB from "../media/ifbb.png";
import AffirmLogo from "../media/affirm-logo.webp";

function GutServiceScreen() {
  const navigate = useNavigate();
  const GutRef = useRef();
  const handleCTA = () => {
    GutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
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
              Version Of Yourself
            </h1>
            <button onClick={handleCTA} className="button button--robinson">
              Get started
            </button>
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
      <div className="gut-service__wrapper">
        <div className="gut--service__block" ref={GutRef}>
          <h2 className="mn--title">
            <span className="primary-color-accent">Essential Insight</span> Into
            Your Health
          </h2>
          <p>
            <span className="primary-color-accent">Nutrition</span> is based on
            sound science. In collaboration with healthcare professionals, we
            use blood work analysis and gut health tests to address any issues
            that might appear.
          </p>
          <div className="card-wrapper mn">
            <div className="card-container card-container--bloodwork">
              <h2 className="medium-text">Bloodwork</h2>

              <h4 className="card-text-price">$249</h4>
              <ul>
                <li className="card-list">
                  One Time Plan to improve condition
                </li>
                <li className="card-list">Supplements and remedy protocols</li>
                <li className="card-list">Dietary adjustments</li>
                <li className="card-list">Advice of lifestyle habits</li>
                <li className="card-list">Training if needed</li>
              </ul>
              <a target="_blank" className="purchase-button-link" href="">
                <button className="button">Purchase</button>
              </a>
              <a target="_blank" className="purchase-button-link" href="">
                <button className="button button--affirm">
                  Pay with
                  <img
                    src={AffirmLogo}
                    alt="Affirm Logo"
                    className="img--afirm"
                  />
                </button>
              </a>
            </div>

            <div className="blood-gut-text">
              <p>
                We use data about cholesterol and hormone levels, nutritional
                deficiencies and more to identify potential health risks, make
                dietary considerations, and adjust our training programs to
                support your well-being. 
              </p>
              <br />
              <br />
              <p>
                You can bring your most recent blood work to be evaluated or we
                can arrange a new blood work test at a trusted clinic for an
                extra fee.
              </p>
              {/*  <img src={Blood} alt="" /> */}
            </div>
          </div>
          <div className="card-wrapper card-wrapper--gut mn">
            <div className="blood-gut-text">
              <p>
                It’s important to understand your gut microbiome composition,
                and we test for parasites, bacteria, and any other digestive
                problems. These tests help me make dietary adjustments and
                recommendations to promote better digestion.
              </p>
            </div>
            <div className="card-container card-container--gutcard-container--gut">
              <h2 className="medium-text">Gut Health Test</h2>

              <h4 className="card-text-price">$349</h4>
              <ul>
                <li className="card-list">Test analysis</li>
                <li className="card-list">Full report</li>
                <li className="card-list">
                  Follow up consultation to act on findings
                </li>
              </ul>
              <a target="_blank" className="purchase-button-link" href="">
                <button className="button">Purchase</button>
              </a>
              <a target="_blank" className="purchase-button-link" href="">
                <button className="button button--affirm">
                  Pay with
                  <img
                    src={AffirmLogo}
                    alt="Affirm Logo"
                    className="img--afirm"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
        <button className="button button--return" onClick={() => navigate("/")}>
          <AiOutlineArrowLeft className="icon" />
          Go Back to the Homepage
        </button>
      </div>
    </>
  );
}

export default GutServiceScreen;
