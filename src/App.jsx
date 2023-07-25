import { useRef, useState } from "react";
import USflag from "./media/usflag.png";
import IFBB from "./media/ifbb.png";
import Lift from "./media/lift.svg";
import Health from "./media/health.svg";
import Protein from "./media/protein.svg";

import PaintStroke from "./media/PaintStroke.png";
import Footer from "./components/Footer";

import BBLogo from "./media/BBLogo.png";
import Nick from "./media/nick.png";
import NormalPlans from "./components/NormalPlans";
import CustomPlans from "./components/CustomPlans";
import DiscordSection from "./components/DiscordSection";
import Bloodwork from "./components/Bloodwork";
import InquiryMessage from "./components/InquiryMessage";
import Services from "./components/Services";

function App() {
  const ref = useRef();
  const handleCTA = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [TypeOfPlan, setTypeOfPlan] = useState("a");

  return (
    <div className="App">
      <main className="hero-section">
        <div className="heroImg"></div>
        <img src={Nick} className="nick-crop" alt="" />
        {/*  <img src={maskGroup} className="maskImg" alt="" /> */}
        <div className="hero-container">
          <div className="hero-text">
            <img src={BBLogo} className="bbs--logo" alt="" />
            <h1 className="heading-text">
              Become The Best <br />
              Version Of You
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

      <section className="pricing-container">
        <div className="bg__text--background">
          <img src={PaintStroke} alt="" />
          <h2 className="big-text">CONSISTENCY IS THE NAME OF THE GAME</h2>
        </div>
        <p className="paragraph-text hero-paragraph">
          <span className="primary-color-accent">Effer Coaching</span> is a
          fully customized plan, workout regiment, and direct support me during
          weekly check-ins with updates on your progress.
          <br />
          <br />
          Additionally, the higher tier plans allow you to connect with me
          anytime you want. Text, call... I'll critique your form or adjust your
          diet on the fly. I'm committed to keeping my prices low because
          getting in shape shouldn't cost a fortune!
        </p>
        <div className="bullet--block_wrapper">
          <div className="bullet--facts">
            <img src={Lift} alt="" />
            <h5>Hard Work</h5>
            <p>
              <span className="primary-color-accent">The real secret</span> of
              success
            </p>
          </div>
          <div className="bullet--facts">
            <img src={Health} alt="" />
            <h5>Healthy Nutrition</h5>
            <p>
              <span className="primary-color-accent">High powered</span> diets
              to fuel your body
            </p>
          </div>
          <div className="bullet--facts">
            <img src={Protein} alt="" />
            <h5>Accountability</h5>
            <p>
              <span className="primary-color-accent">Support and advice</span>{" "}
              to keep you on track
            </p>
          </div>
        </div>

        <h2 className="big-text big-text__white" ref={ref}>
          FULL TIME <span className="primary-color-accent">COACHING PLANS</span>
        </h2>
        {/*       <h2 className="big-text">Purchase now, start whenever you want!</h2> */}
        <div className="plan-toggle">
          <div
            className={
              TypeOfPlan === "a"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("a")}
          >
            <h6 className="medium-text">Monthly</h6>
          </div>
          <div
            className={
              TypeOfPlan === "b"
                ? "plan-type-container color-accent"
                : "plan-type-container"
            }
            onClick={() => setTypeOfPlan("b")}
          >
            <h6 className="medium-text">3 Months</h6>
          </div>

          <div
            className={
              TypeOfPlan === "d"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("d")}
          >
            <h6 className="medium-text">6 Months</h6>
          </div>

          <div
            className={
              TypeOfPlan === "e"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("e")}
          >
            <h6 className="medium-text">Annual</h6>
          </div>
          {/*     <div
            className={
              TypeOfPlan === "c"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("c")}
          >
            <h4 className="medium-text">Contest Prep </h4>
          </div> */}
        </div>

        <NormalPlans TypeOfPlan={TypeOfPlan} />
        <CustomPlans />
        <Bloodwork />
        <Services />
      </section>
      <DiscordSection />
      <InquiryMessage />
      <Footer />
    </div>
  );
}

export default App;
