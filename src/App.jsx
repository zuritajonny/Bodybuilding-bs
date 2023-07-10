import { useRef, useState } from "react";
import Header from "./components/Header";
import { IoIosFitness } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbChristmasTree } from "react-icons/tb";
import Footer from "./components/Footer";
import background from "./media/presentation-background.png";
import johnCollage from "./media/john-collage.png";
import johnCrop from "./media/jonh-crop.png";
import maskGroup from "./media/mask-group.png";

import NormalPlans from "./components/NormalPlans";
import DiscordSection from "./components/DiscordSection";
import BlackFriday from "./components/BlackFriday";
import SpecialSale from "./components/SpecialSale";

function App() {
  const ref = useRef();
  const handleCTA = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  /* las personas que entren al website ya sabran de el, tendran informacion previa sobre lo 
  que hace, 2 step order form
  
  Normie, bronze
  Serious, silver
  Bodybuild, gold

  Foto de el en el medio
  Solo un hero y los planes debajo de el
  Alrededor del hero (imagen de el) 

  CAMBIAR LOS MESES MONTH
  Get started en mayusculas y subirle la fuente

  */

  /* Hacer un justify content abajo del boton de CTA con lo que ofrece John */
  const [TypeOfPlan, setTypeOfPlan] = useState("a");

  return (
    <div className="App">
      <Header />

      <main className="hero-section">
        <div className="heroImg"></div>
        {/* <img src={johnCrop} className="john-crop" alt="" /> */}
        <img src={maskGroup} className="maskImg" alt="" />
        <div className="hero-container">
          <div className="hero-text">
            <h1 className="heading-text">
              {/*   It’s Time <br />
              <span>To Get</span>
              <br /> <span>Srs</span> {/ */}
              Become The Best <br />
              Version Of You
            </h1>
            <button onClick={handleCTA} className="button">
              <IoIosFitness className="icon" />
              Get started
            </button>
          </div>
        </div>
      </main>

      <section className="pricing-container">
        {/*         <h4 className="black-friday-heading">Black Friday Sale Ends In:</h4>
        <Timer /> */}

        <h2 className="big-text">
          <span className="primary-color-accent">Affordable</span> Coaching
          Plans
        </h2>
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

        <h2 className="big-text" ref={ref}>
          Payment Plans
        </h2>
        {/*       <h2 className="big-text">Purchase now, start whenever you want!</h2> */}
        <div className="plan-toggle">
          {/*  <div
            className={
              TypeOfPlan === "bf"
                ? "plan-type-container black-friday-button"
                : "plan-type-container bf-hover"
            }
            onClick={() => setTypeOfPlan("bf")}
          >
            <TbChristmasTree className="icon" />
            <h4 className="medium-text">New Year's Deal</h4>
          </div> */}
          <div
            className={
              TypeOfPlan === "a"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("a")}
          >
            <h4 className="medium-text">Monthly</h4>
          </div>
          <div
            className={
              TypeOfPlan === "b"
                ? "plan-type-container color-accent"
                : "plan-type-container"
            }
            onClick={() => setTypeOfPlan("b")}
          >
            <h4 className="medium-text">3 Months</h4>
          </div>

          <div
            className={
              TypeOfPlan === "d"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("d")}
          >
            <h4 className="medium-text">6 Months</h4>
          </div>

          <div
            className={
              TypeOfPlan === "e"
                ? "plan-type-container color-accent"
                : "plan-type-container "
            }
            onClick={() => setTypeOfPlan("e")}
          >
            <h4 className="medium-text">Annual</h4>
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

        {/*    <BlackFriday TypeOfPlan={TypeOfPlan} /> */}
        <NormalPlans TypeOfPlan={TypeOfPlan} />
        {/*     <SpecialSale TypeOfPlan={TypeOfPlan} /> */}
        {/* */}
      </section>

      <section className="pricing-container">
        <h2 className="big-text">
          <span className="primary-color-accent">Single</span> Time, Posing
          Session
        </h2>
        <p className="paragraph-text hero-paragraph">
          What’s the point of having an outstanding physique if you can’t show
          it properly? Presentation makes all the difference!
        </p>

        <div className="card-wrapper">
          <div className="card-container">
            <h2 className="medium-text">20-minute posing session</h2>
            {/*  <p className="BF-deal">
              Before <br /> 
              <span>$50</span>
            </p> */}
            <h4 className="card-text-price">$50</h4>
            <ul>
              <li className="card-list">One-on-one session</li>
              <li className="card-list">Learn how to pose properly</li>
              <li className="card-list">
                20-minutes session (Better for advanced athletes)
              </li>
            </ul>
            <a
              target="_blank"
              className="purchase-button-link"
              href="https://effercoaching.com/20-minute-posing-session"
            >
              <button className="button">
                <AiOutlineShoppingCart className="icon" /> Purchase
              </button>
            </a>
          </div>

          <div className="card-container">
            <h2 className="medium-text">40-minute posing session</h2>
            {/*  <p className="BF-deal">
              Before <br />
              <span>$90</span>
            </p> */}
            <h4 className="card-text-price">$90</h4>
            <ul>
              <li className="card-list">One-on-one session</li>
              <li className="card-list">Learn the principles of posing</li>
              <li className="card-list">
                40-minutes session (Better for new athletes)
              </li>
            </ul>
            <a
              target="_blank"
              className="purchase-button-link"
              href="https://effercoaching.com/40-minute-posing-session"
            >
              <button className="button">
                <AiOutlineShoppingCart className="icon" /> Purchase
              </button>
            </a>
          </div>
        </div>
        <BlackFriday />
      </section>

      <section className="presentation-container">
        <div className="presentation-background">
          <img src={background} alt="" />
        </div>
        {/*   <DiscordSection /> */}
        <div className="presentation-wrapper">
          <div className="presentation-item">
            <h2 className="big-text">Only The Objective Is What Matters</h2>
            <p className="paragraph-text">
              You are in control of your progress. You make the effort. I am
              here to guide you in making the process as efficient as possible.
              <br />
              <br />– Giovanni “The Lad” DelBiondo
            </p>
          </div>
          <div className="presentation-item-wrapper">
            <img src={johnCollage} alt="" className="john-collage" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
