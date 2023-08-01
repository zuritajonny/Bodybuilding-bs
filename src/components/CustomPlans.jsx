import React from "react";
import AffirmLogo from "../media/affirm-logo.webp";

function CustomPlans() {
  return (
    <div className="plans--container plans--container__custom mn">
      <h3 className="heading text--white mn--title">
        One Time <span className="primary-color-accent">Custom Plans</span>
      </h3>
      <p className="text--white">
        Everybody has different goals and I can help you achieve all of them.
        Choose any of my custom plans depending on your needs.
      </p>
      <div className="plan--block-wrapper">
        <div className="plan--block__container">
          <h3>3-month bulking plan</h3>
          <p>
            Get stronger building your muscles as bigger as they have ever been.
          </p>
          <h4>$499</h4>
          <ul>
            <li>Specialized Diet</li>
            <li>Training Routine</li>
            <li>Tracking & Accountability App</li>
            <li>Customized</li>
            <li>Fast Delivery</li>
          </ul>
          <div className="buttons--wrapper buttons--wrapper__horizontal">
            <a href="" className="button button--affirm">
              Pay with
              <img src={AffirmLogo} alt="Affirm Logo" className="img--afirm" />
            </a>
            <a
              href="https://payments.bodybuildingandbs.com/3-months-bulking-plan"
              target="_blank"
              className="button button--cta"
            >
              Purchase
            </a>
          </div>
        </div>

        <div className="plan--block__container">
          <h3>3-month shredding plan</h3>
          <p>
            Time to build yourself up. Get in top shape for contests and catch
            the attention of everybody everywhere.
          </p>
          <h4>$499</h4>
          <ul>
            <li>Specialized Diet</li>
            <li>Training Routine</li>
            <li>Tracking & Accountability App</li>
            <li>Customized</li>
            <li>Fast Delivery</li>
          </ul>
          <div className="buttons--wrapper buttons--wrapper__horizontal">
            <a href="" className="button button--affirm">
              Pay with
              <img src={AffirmLogo} alt="Affirm Logo" className="img--afirm" />
            </a>
            <a
              href="https://payments.bodybuildingandbs.com/3-months-sherdding-plan"
              target="_blank"
              className="button button--cta"
            >
              Purchase
            </a>
          </div>
        </div>
        <div className="plan--block__container">
          <h3>3-month body recomposition plan</h3>
          <p>
            Building muscle and getting stronger while burning body fat is
            possible, you just need the right plan.
          </p>
          <h4>$499</h4>
          <ul>
            <li>Specialized Diet</li>
            <li>Training Routine</li>
            <li>Tracking & Accountability App</li>
            <li>Customized</li>
            <li>Fast Delivery</li>
          </ul>
          <div className="buttons--wrapper buttons--wrapper__horizontal">
            <a href="" className="button button--affirm">
              Pay with
              <img src={AffirmLogo} alt="Affirm Logo" className="img--afirm" />
            </a>
            <a
              href="https://payments.bodybuildingandbs.com/3-months-body-recomposition-plan"
              target="_blank"
              className="button button--cta"
            >
              Purchase
            </a>
          </div>
        </div>
        <div className="plan--block__container">
          <h3>6-week reverse diet plan</h3>
          <p>
            Focus on increasing your calorie intake without the risk of losing
            progress or regaining body fat.
          </p>
          <h4>$299</h4>
          <ul>
            <li>Specialized Diet</li>
            <li>Training Routine</li>
            <li>Tracking & Accountability App</li>
            <li>Customized</li>
            <li>Fast Delivery</li>
          </ul>
          <div className="buttons--wrapper buttons--wrapper__horizontal">
            <a href="" className="button button--affirm">
              Pay with
              <img src={AffirmLogo} alt="Affirm Logo" className="img--afirm" />
            </a>
            <a
              href="https://payments.bodybuildingandbs.com/6-week-revers-diet-plan"
              target="_blank"
              className="button button--cta"
            >
              Purchase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomPlans;
