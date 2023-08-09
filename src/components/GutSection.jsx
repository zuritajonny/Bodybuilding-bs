import { useNavigate } from "react-router-dom";
import GutEnzime from "../media/gut-enzime.jpg";
import GutMicrobiome from "../media/gut-microbiome.jpg";
import GutBacteria from "../media/gut-bacteria.jpg";

function GutSection({ IsGutActive, setIsGutActive }) {
  const navigate = useNavigate();

  const HandleGutButton = () => {
    setIsGutActive(true);
    navigate("/blookworkandguttest");
    console.log(IsGutActive);
  };
  return (
    <div className="gut--section-wrapper">
      <h2 className="text--white mn--title">
        What About Your <br />
        <span className="primary-color-accent">Gut Health?</span>
      </h2>
      <p className="text--white">
        Your gut microbiome plays a key role in your digestion and immune
        function. Knowing about your composition will help me adjust your diet
        to optimize your nutrition.
      </p>
      {/* <p className="text--white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        maximus vel orci a tristique.
      </p> */}
      <div className="gut-section--container">
        <img src={GutEnzime} alt="" />
        <img src={GutMicrobiome} alt="" />
        <img src={GutBacteria} alt="" />
      </div>
      <button className="button" onClick={HandleGutButton}>
        LEARN MORE
      </button>
    </div>
  );
}

export default GutSection;
