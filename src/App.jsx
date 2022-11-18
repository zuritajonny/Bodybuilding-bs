import { useRef } from "react";
import Header from "./components/Header";
import { IoIosFitness } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";

 



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
      {/* <img src={heroImg} className='heroImg' alt="" /> */}
      <div className="hero-text">
        <p className="description-text">Start the journey</p>
        <h1 className="heading-text">hero hero hero hero{/* Ready to get buffed up? */}</h1>
        <button onClick={handleCTA} className="button" >
          <IoIosFitness className="icon"/>Become a super-human
        </button>
      </div>
      
    </main>

    <section ref={ref} className='pricing-container'>

<h2 className='big-text'>Different plans for different needs </h2>
{/* <p className='description-text'>Starting at just $100</p> */}

<div className="card-wrapper">
<div className='card-container'>
    <div className='item-price'>Starting at $100 </div>
  
    <h2 className='medium-text'>Normie plan</h2>
    <div className="select-box-container">
      <select name="" id="" className="select-box-wrapper">
        <option value="">Choose your plan</option>
        <option value="">Monthly</option>
          <option value="">3 Months</option>
          <option value="">6 Months</option>
      </select>
    </div>
    <p className='paragraph-text'>Custom programming in the most afforable way possible</p>
    <ul>{/* ‣ Custom diet and workout regimen ‣ Bi-weekly programming tweaks ‣ E-Mail John directly */}
        <li className='card-list'>Custom workout regime and diet</li>
        <li className='card-list'>Bi-weekly programming tweaks</li>
        <li className='card-list'>E-mail me directly</li>
    </ul>
    <button className='button'><AiOutlineShoppingCart className="icon"/> Purchase</button>
</div>

<div className='card-container'>
    <div className='item-price'>$200 monthly</div>
    <h2 className='medium-text'>Serious</h2>
    <p className='paragraph-text'>Custom programming with constant feedback and more tweaks</p>
    <ul>{/* ‣ Custom diet and workout regimen ‣ Bi-weekly programming tweaks ‣ E-Mail John directly */}
        <li className='card-list'>Custom workout regime and diet</li>
        <li className='card-list'>Weekly programming tweaks</li>
        <li className='card-list'>E-mail and text me directly</li>
    </ul>
    <button className='button'><AiOutlineShoppingCart className="icon"/> Purchase</button>
</div>

<div className='card-container'>
    <div className='item-price'>$250 monthly</div>
    <h2 className='medium-text'>Competition</h2>
    <p className='paragraph-text'>Custom programming with constant feedback and prep secrets</p>
    <ul>{/* ‣ Custom diet and workout regimen ‣ Bi-weekly programming tweaks ‣ E-Mail John directly */}
        <li className='card-list'>Custom workout regime and diet</li>
        <li className='card-list'>Unlimited programming tweaks</li>
        <li className='card-list'>Posing lessons and prep tips</li>
    </ul>
    <button className='button'><AiOutlineShoppingCart className="icon"/> Purchase</button>
</div>
</div>

<span className="subtitle-bottom"><p className="description-text">Top in the US</p></span>
</section>

    </div>  
  )
}

export default App
