import { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NormalPlans = ({ TypeOfPlan }) => {
  return (
    <div className={TypeOfPlan === "bf" ? "card-hidden" : "card-wrapper"}>
      <div className={TypeOfPlan === "c" ? "card-hidden" : "card-container"}>
        <h2 className={TypeOfPlan == "b" ? "medium-text " : "medium-text"}>
          Monthly <br />
          Coaching Plan
        </h2>

        <p className="paragraph-text">
          Custom programming in the most affordable way possible
        </p>
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
      </div>

      <div
        className={
          TypeOfPlan === "c"
            ? "card-hidden"
            : "card-container card-container-accent"
        }
      >
        {/*  {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>} */}
        <h2 className={TypeOfPlan == "b" ? "medium-text" : "medium-text"}>
          6 Months <br />
          Coaching Plan
        </h2>
        <p className="paragraph-text">
          Custom programming with constant feedback and more tweaks
        </p>
        {TypeOfPlan == "b" && (
          <p className="summer-prg">
            Before <span className="summer-offer">$550</span>
          </p>
        )}
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$200 ";
              case "b":
                return "$440 ";
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
                return "https://effercoaching.com/ascending-3-month-ss";
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
        {/* {TypeOfPlan == "b" && <div className="item-price">20% OFF!</div>} */}

        <h2 className={TypeOfPlan == "b" ? "medium-text " : "medium-text"}>
          12 Month <br />
          Coaching Plan
        </h2>
        <p className="paragraph-text">
          Custom programming with constant feedback and prep secrets
        </p>
        {/* {TypeOfPlan == "b" && (
          <p className="summer-prg">
            Before <span className="summer-offer">$680</span>
          </p>
        )} */}
        <h4 className="card-text-price">
          {(() => {
            switch (TypeOfPlan) {
              case "a":
                return "$250 ";
              case "b":
                return "$544 ";
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
                return "https://effercoaching.com/srs-bodybuild-3-months-ss";
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
            <li className="card-list">Unlimited programming tweaks</li>
            <li className="card-list">Posing lessons and prep tips</li>
            <li className="card-list">E-mail and text me directly</li>
          </ul>
          <a
            target="_blank"
            className="purchase-button-link"
            href="https://effercoaching.com/16-week-contest-prep"
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
