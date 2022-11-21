import { useRef } from "react";
import Header from "./components/Header";
import { IoIosFitness } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import heroImg from "./media/background-gradient.png";
import johnImg from "./media/john-doe.png";
import background from "./media/presentation-background.png";
import johnCollage from "./media/john-collage.png";
import johnCrop from "./media/jonh-crop.png";
import maskGroup from "./media/mask-group.png";

 



function App() {
  const ref = useRef();

  const handleCTA = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  /* las personas que entren al website ya sabran de el, tendran informacion previa sobre lo 
  que hace, 2 step order form
  
  Normie, bronze
  Serious, silver
  Bodybuild, gold

  Foto de el en el medio
  Solo un hero y los planes debajo de el
  Alrededor del hero (imagen de el) 


  */

/* Hacer un justify content abajo del boton de CTA con lo que ofrece John */
  return (
    <div className="App">
      <Header/>


      <main className="hero-section">
      <img src={heroImg} className='heroImg' alt="" /> 
      <img src={johnCrop} className='john-crop' alt="" /> 
      <img src={maskGroup} className='maskImg' alt="" /> 
      <div className="hero-container">
        <div className="hero-text">
       {/*    <p className="description-text">Start the journey</p> */}
          <h1 className="heading-text">A srs <br/>transformation<br/> awaits {/* Ready to get buffed up? */}</h1>
          <button onClick={handleCTA} className="button" >
            <IoIosFitness className="icon"/>Get started
          </button>
        </div>
          {/* <div className="hero-text">
              <img src={johnImg} alt="" />
        <button onClick={handleCTA} className="button" >
              <IoIosFitness className="icon"/>Become a super-human
            </button> 
          </div> */}
      </div>
      
    </main>

    <section ref={ref} className='pricing-container'>

  <h2 className='big-text'><span className="primary-color-accent">Affordable</span> Coaching Plans</h2>
  <p className="paragraph-text hero-paragraph">
  With <span className="primary-color-accent">EFFER</span> coaching plans offer you a fully customized plan, workout regimen, and direct support from John during weekly check-ins with updates on your progress. 
  <br />
  <br />
  Additionally, our higher tier plans allow you to connect with John anytime you want. Text him, call him, let him critique your form or adjust your diet on the fly. We are committed to keeping our prices low—getting in shape shouldn't cost a fortune!
  </p>
{/* <p className='description-text'>Starting at just $100</p> */}

  <h2 className="big-text">
    Payment plans
  </h2>

  <div className="plan-toggle">
      <div className="plan-type-container">
        <h4 className="medium-text">Monthly</h4>
      </div>
      <div className="plan-type-container">
        <h4 className="medium-text">3 months</h4>
      </div>
      <div className="plan-type-container">
        <h4 className="medium-text">6 months</h4>
      </div>
      <div className="plan-type-container">
        <h4 className="medium-text">Annual</h4>
      </div>

  </div>

<div className="card-wrapper">
<div className='card-container'>
   {/*  <div className='item-price'>Starting at $100 </div>
   */}
    <h2 className='medium-text'>Normie</h2>
   {/*  <div className="select-box-container">
       <select name="" id="" className="select-box-wrapper">
        <option value="">Choose your plan</option>
        <option value="">Monthly</option>
          <option value="">3 Months</option>
          <option value="">6 Months</option>
      </select> 
    </div> */}
    <p className='paragraph-text'>Custom programming in the most afforable way <br />possible</p>
    <h4 className="card-text-price">$100 <span className="price-description">/month</span></h4>
    <ul>{/* ‣ Custom diet and workout regimen ‣ Bi-weekly programming tweaks ‣ E-Mail John directly */}
        <li className='card-list'>Custom workout regimen and diet</li>
        <li className='card-list'>Bi-weekly programming tweaks</li>
        <li className='card-list'>E-mail and text me directly
</li>
    </ul>
    <button className='button'><AiOutlineShoppingCart className="icon"/> Purchase</button>
</div>

<div className='card-container'>
{/*     <div className='item-price'>$200 monthly</div> */}
    <h2 className='medium-text'>Ascending</h2>
    <p className='paragraph-text'>Custom programming with constant feedback and more tweaks</p>
    <h4 className="card-text-price">$200 <span className="price-description">/month</span></h4>
    <ul>{/* ‣ Custom diet and workout regimen ‣ Bi-weekly programming tweaks ‣ E-Mail John directly */}
        <li className='card-list'>Custom workout regimen and diet</li>
        <li className='card-list'>Weekly programming tweaks</li>
        <li className='card-list'>E-mail and text me directly</li>
    </ul>
    <button className='button'><AiOutlineShoppingCart className="icon"/> Purchase</button>
</div>

<div className='card-container'>
  {/*   <div className='item-price'>$250 monthly</div> */}
    <h2 className='medium-text'>Srs - Bodybuild</h2>
    <p className='paragraph-text'>Custom programming with constant feedback and prep secrets</p>
    <h4 className="card-text-price">$250 <span className="price-description">/month</span></h4>
    <ul>{/* ‣ Custom diet and workout regimen ‣ Bi-weekly programming tweaks ‣ E-Mail John directly */}
        <li className='card-list'>Custom workout regimen and diet</li>
        <li className='card-list'>Unlimited programming tweaks</li>
        <li className='card-list'>Posing lessons and prep tips</li>
    </ul>
    <button className='button'><AiOutlineShoppingCart className="icon"/> Purchase</button>
</div>
</div>

<span className="subtitle-bottom"><p className="description-text">Top in the US</p></span>
</section>




<section className='pricing-container'>

  <h2 className='big-text'><span className="primary-color-accent">Single</span> Time, Posing Session</h2>
  <p className="paragraph-text hero-paragraph">
  What’s the point of having an outstanding physique if you can’t show it properly? Presentation makes all the difference!
  
 
  </p>
{/* <p className='description-text'>Starting at just $100</p> */}
{/* 
  <h2 className="big-text">
    Payment plans
  </h2>

  <div className="plan-toggle">
      <div className="plan-type-container">
        <h4 className="medium-text">Monthly</h4>
      </div>
      <div className="plan-type-container">
        <h4 className="medium-text">3-months</h4>
      </div>
      <div className="plan-type-container">
        <h4 className="medium-text">6-months</h4>
      </div>
      <div className="plan-type-container">
        <h4 className="medium-text">Annual</h4>
      </div>

  </div> */}

<div className="card-wrapper">
<div className='card-container'>
   {/*  <div className='item-price'>Starting at $100 </div>
   */}
    <h2 className='medium-text'>20-minute
posing session</h2>
   {/*  <div className="select-box-container">
       <select name="" id="" className="select-box-wrapper">
        <option value="">Choose your plan</option>
        <option value="">Monthly</option>
          <option value="">3 Months</option>
          <option value="">6 Months</option>
      </select> 
    </div> */}
  {/*   <p className='paragraph-text'>Receive custom programming in the most afforable way possible, for you.</p> */}
    <h4 className="card-text-price">$50 <span className="price-description">/month</span></h4>
    <ul>{/* ‣ Custom diet and workout regimen ‣ Bi-weekly programming tweaks ‣ E-Mail John directly */}
        <li className='card-list'>One-on-one session</li>
        <li className='card-list'>Learn how to pose properly</li>
        <li className='card-list'>20-minutes session (Better for advanced athletes)
</li>
    </ul>
    <button className='button'><AiOutlineShoppingCart className="icon"/> Purchase</button>
</div>

<div className='card-container'>
{/*     <div className='item-price'>$200 monthly</div> */}
    <h2 className='medium-text'>40-minute
posing session</h2>
    {/* <p className='paragraph-text'>Custom programming with constant feedback and more tweaks</p> */}
    <h4 className="card-text-price">$90 <span className="price-description">/month</span></h4>
    <ul>{/* ‣ Custom diet and workout regimen ‣ Bi-weekly programming tweaks ‣ E-Mail John directly */}
        <li className='card-list'>One-on-one session</li>
        <li className='card-list'>Learn the principles of posing</li>
        <li className='card-list'>40-minutes session (Better for new athletes)</li>
    </ul>
    <button className='button'><AiOutlineShoppingCart className="icon"/> Purchase</button>
</div>


</div>

{/* <span className="subtitle-bottom"><p className="description-text">Top in the US</p></span> */}
</section>



<section className="presentation-container">
  <div className="presentation-background"><img src={background} alt="" /></div>
  <div className="presentation-wrapper">
  <div className="presentation-item">
  <h2 className="big-text">
    Anyone can construct a diet plan and workout regimen
  </h2>
  <p className="paragraph-text">
  I've been very fortunate to have people around me both on and offline who push me and motivate me. I would like to be there for you during your journey as well.
    <br /><br />
– Giovanni “The Lad” DelBiondo
 
  
  </p>
  </div>
  <div className="presentation-item-wrapper">
    <img src={johnCollage} alt="" className="john-collage"/>
  </div>
  </div>
  
</section>


    </div>  
  )
}

export default App
