import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
const SpecialSale = ({ TypeOfPlan }) => {
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
            <AiFillStar className="icon" /> 20% OFF!
          </h2>
        </div>
        <h2 className="medium-text">Normie</h2>

        <p className="paragraph-text">
          Custom programming in the most affordable way possible
        </p>
        <p className="BF-deal">
          Before <br />
          <span>
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
          </span>
        </p>
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$80 ";
              case "b":
                return "$240 ";
              case "c":
                return "$480 ";
              case "d":
                return "$480 ";
              case "e":
                return "$960 ";
              default:
                return "$100 ";
            }
          })()}
          <span className="price-description">
            {" "}
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
        {/*  <p className="second-cta">Start the program when you want </p> */}
        <a
          target="_blank"
          className="purchase-button-link"
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://effercoaching.com/normie-monthly-ny";
              case "b":
                return "https://effercoaching.com/normie-3-months-ny";
              case "d":
                return "https://effercoaching.com/normie-6-months-ny";
              case "e":
                return "https://effercoaching.com/normie-annual-ny";
            }
          })()}
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>
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
            <AiFillStar className="icon" /> 20% OFF!
          </h2>
        </div>
        <h2 className="medium-text">Ascending</h2>

        <p className="paragraph-text">
          Custom programming in the most affordable way possible
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
                case "c":
                  return "$1000 ";
                case "d":
                  return "$1000 ";
                case "e":
                  return "$1950 ";
                default:
                  return "$100 ";
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
                return "$440 ";
              case "c":
                return "$800 ";
              case "d":
                return "$800 ";
              case "e":
                return "$1560 ";
              default:
                return "$100 ";
            }
          })()}
          <span className="price-description">
            {" "}
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
        {/*  <p className="second-cta">Start the program when you want </p> */}
        <a
          target="_blank"
          className="purchase-button-link"
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://effercoaching.com/ascending-monthly-ny";
              case "b":
                return "https://effercoaching.com/ascending-3-month-ny";
              case "d":
                return "https://effercoaching.com/ascending-6-month-ny";
              case "e":
                return "https://effercoaching.com/ascending-annual-ny";
            }
          })()}
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>
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
            <AiFillStar className="icon" /> 20% OFF!
          </h2>
        </div>
        <h2 className="medium-text">Srs - Bodybuild</h2>

        <p className="paragraph-text">
          Custom programming in the most affordable way possible
        </p>
        <p className="BF-deal">
          Before <br />
          <span>
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
          </span>
        </p>
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$200 ";
              case "b":
                return "$544 ";
              case "c":
                return "$1040 ";
              case "d":
                return "$1040 ";
              case "e":
                return "$1800 ";
              default:
                return "$100 ";
            }
          })()}
          <span className="price-description">
            {" "}
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
        {/*  <p className="second-cta">Start the program when you want </p> */}
        <a
          target="_blank"
          className="purchase-button-link"
          href={(() => {
            switch (TypeOfPlan) {
              case "a":
                return "https://effercoaching.com/srs-bodybuild-monthly-ny";
              case "b":
                return "https://effercoaching.com/srs-bodybuild-3-months-ny";
              case "d":
                return "https://effercoaching.com/srs-bodybuild-6-months-ny";
              case "e":
                return "https://effercoaching.com/srs-bodybuild-annual-ny";
            }
          })()}
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div>
      {/*   <div className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}>
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
                return "https://effercoaching.com/normie-monthly";
              case "b":
                return "https://effercoaching.com/normie-3-months";
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
                return "https://effercoaching.com/ascending-monthly";
              case "b":
                return "https://effercoaching.com/ascending-3-month";
              case "d":
                return "https://effercoaching.com/ascending-6-month";
              case "e":
                return "https://effercoaching.com/ascending-annual";
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
                return "https://effercoaching.com/srs-bodybuild-monthly";
              case "b":
                return "https://effercoaching.com/srs-bodybuild-3-months";
              case "d":
                return "https://effercoaching.com/srs-bodybuild-6-months";
              case "e":
                return "https://effercoaching.com/srs-bodybuild-annual";
            }
          })()}
        >
          <button className="button">
            <AiOutlineShoppingCart className="icon" /> Purchase
          </button>
        </a>
      </div> */}

      {TypeOfPlan === "c" && (
        <div className="black-friday-card card-container">
          <div className="item-price">
            {/* <div className="item-price-tail"></div> */}
            <h2 className="medium-text">
              <AiFillStar className="icon" /> 20% OFF!
            </h2>
          </div>
          <h2 className="medium-text">
            16-week <br />
            Contest Prep
          </h2>

          <p className="paragraph-text">
            Custom programming in the most affordable way possible
          </p>
          <p className="BF-deal">
            Before <br />
            <span>$900</span>
          </p>
          <h4 className="card-text-price">
            $720
            <span className="price-description"> /16-weeks</span>
          </h4>
          <ul>
            <li className="card-list">Custom workout regimen and diet</li>
            <li className="card-list">Unlimited programming tweaks</li>
            <li className="card-list">Posing lessons and prep tips</li>
            <li className="card-list">E-mail and text me directly</li>
          </ul>
          {/*  <p className="second-cta">Start the program when you want </p> */}
          <a
            target="_blank"
            className="purchase-button-link"
            href="https://effercoaching.com/16-week-contest-prep-ny"
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

export default SpecialSale;
