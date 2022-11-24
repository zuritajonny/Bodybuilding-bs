import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NormalPlans = ({ TypeOfPlan }) => {
  return (
    <div className={TypeOfPlan === "bf" ? "card-hidden" : "card-wrapper"}>
      <div className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}>
        <h2 className="medium-text">Normie</h2>

        <p className="paragraph-text">
          Custom programming in the most afforable way possible
        </p>
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$100 ";
              case "b":
                return "$300 ";
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
          <li className="card-list">Custom workout regimen and diet</li>
          <li className="card-list">Bi-weekly programming tweaks</li>
          <li className="card-list">E-mail and text me directly</li>
        </ul>
        <a
          target="_blank"
          className="purchase-button-link"
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://app.businessoperatingsystem.ca/v2/preview/X9ZLVU1FRXZNK7FH8GGn";
              case "b":
                return "https://app.businessoperatingsystem.ca/v2/preview/asVQ33dec5iaVfLUnKhM";
              case "d":
                return "https://app.businessoperatingsystem.ca/v2/preview/HGYG5xOGQPcOeKJBiW0l";
              case "e":
                return "https://app.businessoperatingsystem.ca/v2/preview/oQP5pE1LB61RYKrO3d9l";
            }
          })()}
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      <div className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}>
        <h2 className="medium-text">Ascending</h2>
        <p className="paragraph-text">
          Custom programming with constant feedback and more tweaks
        </p>
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$200 ";
              case "b":
                return "$550 ";
              case "c":
                return "$1000 ";
              case "d":
                return "$1000 ";
              case "e":
                return "$1950 ";
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
          <li className="card-list">Custom workout regimen and diet</li>
          <li className="card-list">Weekly programming tweaks</li>
          <li className="card-list">E-mail and text me directly</li>
        </ul>
        <a
          target="_blank"
          className="purchase-button-link"
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://app.businessoperatingsystem.ca/v2/preview/89tP85PAcJdSfG0Oct4i";
              case "b":
                return "https://app.businessoperatingsystem.ca/v2/preview/FdSKjc5tcObiIATJgVsx";
              case "d":
                return "https://app.businessoperatingsystem.ca/v2/preview/Jouhb29CVrXG9B3w3QEj";
              case "e":
                return "https://app.businessoperatingsystem.ca/v2/preview/6nzXnQFWwZIGf6SpP6KJ";
            }
          })()}
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      <div className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}>
        <h2 className="medium-text">Srs - Bodybuild</h2>
        <p className="paragraph-text">
          Custom programming with constant feedback and prep secrets
        </p>
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$250 ";
              case "b":
                return "$680 ";
              case "d":
                return "$1300 ";
              case "e":
                return "$2250 ";
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
          <li className="card-list">Custom workout regimen and diet</li>
          <li className="card-list">Unlimited programming tweaks</li>
          <li className="card-list">Posing lessons and prep tips</li>
        </ul>
        <a
          target="_blank"
          className="purchase-button-link"
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://app.businessoperatingsystem.ca/v2/preview/q1diXk9BOTbwJ8ik5aWO";
              case "b":
                return "https://app.businessoperatingsystem.ca/v2/preview/PhTic0aJ2lkvfk5ub4lg";
              case "d":
                return "https://app.businessoperatingsystem.ca/v2/preview/k9iIAXhiboqacalzEJJx";
              case "e":
                return "https://app.businessoperatingsystem.ca/v2/preview/AwattiekYrHwMasaFmm5";
            }
          })()}
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      {TypeOfPlan === "c" && (
        <div className="card-container">
          <h2 className="medium-text">
            16-Week <br /> Contest Prep
          </h2>

          <p className="paragraph-text">
            Custom programming in the most affordable way possible
          </p>
          <h4 className="card-text-price">
            $900
            <span className="price-description"> /16-weeks</span>
          </h4>
          <ul>
            <li className="card-list">Custom workout regimen and diet</li>
            <li className="card-list">Bi-weekly programming tweaks</li>
            <li className="card-list">E-mail and text me directly</li>
          </ul>
          <a
            target="_blank"
            className="purchase-button-link"
            href="https://app.businessoperatingsystem.ca/v2/preview/WQ1Vpn5Roj5FnyyOmc94"
          >
            <button className="button">
              <AiOutlineShoppingCart className="icon" /> Purchase
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default NormalPlans;
