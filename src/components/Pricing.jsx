
import { AiOutlineShoppingCart } from "react-icons/ai";

const Pricing = ({ref}) => {



    const settings = {
        dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 4000,
          cssEase: "ease-in-out"
      };




  return (
    <section ref={ref} className='pricing-container'>

        <h2 className='big-text'>Different plans for different needs </h2>
        {/* <p className='description-text'>Starting at just $100</p> */}
        
        <div className="card-wrapper">
        <div className='card-container'>
            <div className='item-price'>$100 monthly</div>
            <h2 className='medium-text'>Bronze plan</h2>
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
            <h2 className='medium-text'>Silver plan</h2>
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
  )
}

export default Pricing