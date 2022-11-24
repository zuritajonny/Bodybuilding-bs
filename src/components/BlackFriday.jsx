import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const BlackFriday = ({ TypeOfPlan }) => {
  return (
    <div className="card-wrapper black-friday-wrapper">
      <div
        className={
          TypeOfPlan === "bf"
            ? "black-friday-card card-container"
            : "card-hidden"
        }
      >
        <div className="item-price">
          {/* <div className="item-price-tail"></div> */}
          <h2 className="medium-text">20% OFF!</h2>
        </div>
        <h2 className="medium-text">Ascending</h2>

        <p className="paragraph-text">
          Custom programming in the most afforable way possible
        </p>
        <p className="BF-deal">
          Before <br />
          <span>
            $200
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
          $160
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
            {" "}
            /month
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
          href="https://app.businessoperatingsystem.ca/v2/preview/M3yutKOvSuckIgmDE4wZ"
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      <div
        className={
          TypeOfPlan === "bf"
            ? "black-friday-card card-container"
            : "card-hidden"
        }
      >
        <div className="item-price">
          {/* <div className="item-price-tail"></div> */}
          <h2 className="medium-text">30% OFF!</h2>
        </div>
        <h2 className="medium-text">Ascending</h2>

        <p className="paragraph-text">
          Custom programming in the most afforable way possible
        </p>
        <p className="BF-deal">
          Before <br />
          <span>
            $550
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
          $385
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
            {" "}
            /3 months
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
          href="https://app.businessoperatingsystem.ca/v2/preview/64fUqmQAKBfg7Mj5jaPA"
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      <div
        className={
          TypeOfPlan === "bf"
            ? "black-friday-card card-container"
            : "card-hidden"
        }
      >
        <div className="item-price">
          {/* <div className="item-price-tail"></div> */}
          <h2 className="medium-text">40% OFF!</h2>
        </div>
        <h2 className="medium-text">Ascending</h2>

        <p className="paragraph-text">
          Custom programming in the most afforable way possible
        </p>
        <p className="BF-deal">
          Before <br />
          <span>
            $1000
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
          $600
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
            {" "}
            /6 months
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
          href="https://app.businessoperatingsystem.ca/v2/preview/m5ksqhpbQzjIQRzfljjN"
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>

      <div
        className={
          TypeOfPlan === "bf"
            ? "black-friday-card card-container"
            : "card-hidden"
        }
      >
        <div className="item-price">
          {/* <div className="item-price-tail"></div> */}
          <h2 className="medium-text">50% OFF!</h2>
        </div>
        <h2 className="medium-text">Ascending</h2>

        <p className="paragraph-text">
          Custom programming in the most afforable way possible
        </p>
        <p className="BF-deal">
          Before <br />
          <span>
            $1950
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
          $975
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
            {" "}
            /year
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
          href="https://app.businessoperatingsystem.ca/v2/preview/FnUCSGnWoICqsi1xDUNT"
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
