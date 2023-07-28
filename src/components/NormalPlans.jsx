import { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import AffirmLogo from "../media/affirm-logo.webp";

const NormalPlans = ({ TypeOfPlan }) => {
  const [FaqActiveA, setFaqActiveA] = useState(false);
  const [FaqActiveB, setFaqActiveB] = useState(false);
  const [FaqActiveC, setFaqActiveC] = useState(false);
  const [FaqActiveD, setFaqActiveD] = useState(false);

  return (
    <div className="card-wrapper mn">
      <div className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}>
        <h2 className={TypeOfPlan == "b" ? "medium-text " : "medium-text"}>
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "Monthly";
              case "b":
                return "3-month";
              case "d":
                return "6-Month";
              case "e":
                return "Annual";
            }
          })()}
          <br />
          Coaching Plan
        </h2>

        {/*  <p className="paragraph-text">
          Custom programming in the most affordable way possible
        </p> */}
        {/* {TypeOfPlan == "b" && (
          <p className="summer-prg">
            Before <span className="summer-offer">$300</span>
          </p>
        )} */}
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$100 ";
              case "b":
                return "$240 ";
              case "c":
                return "$600 ";
              case "d":
                return "$600 ";
              case "e":
                return "$1200 ";
              default:
                return "$100 ";
            }
          })()}
          <span className="price-description">
            {(() => {
              switch (TypeOfPlan) {
                case "a":
                  return "/month";
                case "b":
                  return "/3 months";
                case "d":
                  return "/6 months";
                case "e":
                  return "/year";
              }
            })()}
          </span>
        </h4>
        <ul>
          <li className="card-list">Unlimited check-ins</li>
          <li className="card-list">
            Personalized training and nutritional programs
          </li>
          <li className="card-list">
            PED programming for monitors with reading bloodwork
          </li>
          <li
            className={
              TypeOfPlan == "e"
                ? " card-list card-list-line card-list--noL"
                : "card-list card-list-line"
            }
          >
            Text & phone support
            <span></span>
          </li>
        </ul>
        <a
          target="_blank"
          className="purchase-button-link"
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://effercoaching.com/normie-monthly";
              case "b":
                return "https://effercoaching.com/normie-3-months-ss";
              case "d":
                return "https://effercoaching.com/normie-6-months";
              case "e":
                return "https://effercoaching.com/normie-annual";
            }
          })()}
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
        <a
          target="_blank"
          className="purchase-button-link"
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://effercoaching.com/normie-monthly";
              case "b":
                return "https://effercoaching.com/normie-3-months-ss";
              case "d":
                return "https://effercoaching.com/normie-6-months";
              case "e":
                return "https://effercoaching.com/normie-annual";
            }
          })()}
        >
          <button className="button button--affirm">
            Pay with
            <img src={AffirmLogo} alt="Affirm Logo" className="img--afirm" />
          </button>
        </a>
      </div>
      <div className="faq--block">
        <div className="faq--item">
          <button
            className={FaqActiveA ? "button faq--button-active" : " button"}
            onClick={() => setFaqActiveA(!FaqActiveA)}
          >
            Lifestyle
            <FiChevronDown
              className={
                FaqActiveA ? "faq--icon faq--icon-active" : "faq--icon "
              }
            />
          </button>
          <p
            className={
              FaqActiveA
                ? "faq--descrition "
                : "faq--descrition faq--descrition--hidden"
            }
          >
            Your well-being is my main priority. I will help you make the
            necessary adjustments to achieve peak form and stay as healthy as
            you can be.
          </p>
        </div>
        <div className="faq--item">
          <button
            className={FaqActiveB ? "button faq--button-active" : " button"}
            onClick={() => setFaqActiveB(!FaqActiveB)}
          >
            Contest Prep
            <FiChevronDown
              className={
                FaqActiveB ? "faq--icon faq--icon-active" : "faq--icon "
              }
            />
          </button>
          <p
            className={
              FaqActiveB
                ? "faq--descrition "
                : "faq--descrition faq--descrition--hidden"
            }
          >
            Strength and physique competitions demand rigorous preparation,
            including specific goal setting, targeted training, precision
            nutrition, and caloric manipulation.
          </p>
        </div>
        <div className="faq--item">
          <button
            className={FaqActiveC ? "button faq--button-active" : " button"}
            onClick={() => setFaqActiveC(!FaqActiveC)}
          >
            Off-Season
            <FiChevronDown
              className={
                FaqActiveC ? "faq--icon faq--icon-active" : "faq--icon "
              }
            />
          </button>
          <p
            className={
              FaqActiveC
                ? "faq--descrition "
                : "faq--descrition faq--descrition--hidden"
            }
          >
            The off season is critical to prepare between competitions, so we
            will focus on recovery, muscle building, strength training, and
            nutritional adjustments.
          </p>
        </div>
        <div className="faq--item">
          <button
            className={FaqActiveD ? "button faq--button-active" : " button"}
            onClick={() => setFaqActiveD(!FaqActiveD)}
          >
            Custom Goals
            <FiChevronDown
              className={
                FaqActiveD ? "faq--icon faq--icon-active" : "faq--icon "
              }
            />
          </button>
          <p
            className={
              FaqActiveD
                ? "faq--descrition "
                : "faq--descrition faq--descrition--hidden"
            }
          >
            Whatever we set out to do, I can help you achieve it. From aesthetic
            progress to lifestyle improvements, I will provide support to help
            you stay focused.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NormalPlans;
