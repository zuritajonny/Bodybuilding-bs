import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const BlackFriday = ({ TypeOfPlan }) => {
  return (
    <div className="card-wrapper">
      <div
        className={
          TypeOfPlan === "c"
            ? "card-hidden"
            : "black-friday-card card-container"
        }
      >
        <div className="item-price">
          {/* <div className="item-price-tail"></div> */}
          <h2 className="medium-text">
            {(() => {
              switch (TypeOfPlan) {
                case "a":
                  return "20% OFF! ";
                case "b":
                  return "30% OFF!";
                case "d":
                  return "40% OFF!";
                case "e":
                  return "50% OFF!";
              }
            })()}
          </h2>
        </div>
        <h2 className="medium-text">Ascending</h2>

        <p className="paragraph-text">
          Custom programming in the most afforable way possible
        </p>
        <p className="BF-deal">
          Before <br />
          <span>
            {(() => {
              switch (TypeOfPlan) {
                case "a":
                  return "$200 ";
                case "b":
                  return "$550 ";
                case "d":
                  return "$1000 ";
                case "e":
                  return "$1950 ";
              }
            })()}
          </span>
        </p>
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$160 ";
              case "b":
                return "$385 ";
              case "d":
                return "$600 ";
              case "e":
                return "$975 ";
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
          href={
            TypeOfPlan === "a" &&
            "https://app.businessoperatingsystem.ca/v2/preview/GJHNN317do8Z1x7XCUjR"
          }
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>
    </div>
  );
};

export default BlackFriday;
