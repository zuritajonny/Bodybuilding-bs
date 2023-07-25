import { useState, useEffect } from "react";
import LSCoaching from "../media/services/lifestyle-coaching-min.png";
import CPrep from "../media/services/competition-prep-min.png";
import MProgram from "../media/services/mass-program-min.png";
import SProgram from "../media/services/shred-program-min.png";
import NPlans from "../media/services/nutrition-plan-min.png";

function Services() {
  const [ActiveImage, setActiveImage] = useState("a");
  useEffect(() => {
    console.log(ActiveImage);
  }, [ActiveImage]);

  return (
    <div className="mn services--block">
      <h2 className="mn--title">This is What I Do</h2>
      <p>
        As a certified nutritionist with more than 20 years of professional
        experience in bodybuilding, I began my career at age 16, winning Top
        Teen at the Bodybuilding Team Nationals. I continued my award-winning
        career moving on to become an IFBB Pro and winning the highly coveted
        Mr. USA title in 2014.
      </p>

      <div className="services--block__container">
        <ul className="services--grid">
          <li
            className={ActiveImage == "a" && "active"}
            onClick={() => setActiveImage("a")}
          >
            <span>Lifestyle Coaching</span>

            <img src={LSCoaching} alt="" />
          </li>
          <li
            className={ActiveImage == "b" && "active"}
            onClick={() => setActiveImage("b")}
          >
            <span>Shred program</span>
            <img src={SProgram} alt="" />
          </li>
          <li
            className={ActiveImage == "c" && "active"}
            onClick={() => setActiveImage("c")}
          >
            <span>Competition Prep</span>
            <img src={CPrep} alt="" />
          </li>
          <li
            className={ActiveImage == "d" && "active"}
            onClick={() => setActiveImage("d")}
          >
            <span>Nutrition Plans</span>
            <img src={NPlans} alt="" />
          </li>
          <li
            className={ActiveImage == "e" && "active"}
            onClick={() => setActiveImage("e")}
          >
            <span>Mass Program</span>
            <img src={MProgram} alt="" />
          </li>
          <li
            className={ActiveImage == "f" && "active"}
            onClick={() => setActiveImage("f")}
          >
            <span>Protocols and more</span>
          </li>
        </ul>
        <ul className="services--img">
          <li>
            <img
              src={LSCoaching}
              alt=""
              className={
                ActiveImage === "a" ? "span--img" : "span--img span--img-active"
              }
            />
          </li>
          <li>
            <img
              src={SProgram}
              alt=""
              className={
                ActiveImage === "b" ? "span--img" : "span--img span--img-active"
              }
            />
          </li>
          <li>
            <img
              src={CPrep}
              alt=""
              className={
                ActiveImage === "c" ? "span--img" : "span--img span--img-active"
              }
            />
          </li>
          <li>
            <img
              src={NPlans}
              alt=""
              className={
                ActiveImage === "d" ? "span--img" : "span--img span--img-active"
              }
            />
          </li>
          <li>
            <img
              src={MProgram}
              alt=""
              className={
                ActiveImage === "e" ? "span--img" : "span--img span--img-active"
              }
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
