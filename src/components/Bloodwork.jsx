import Blood from "../media/blood.png";
import { useNavigate } from "react-router-dom";

function Bloodwork() {
  const navigate = useNavigate();

  return (
    <div className="blood-work--block mn">
      <div className="work--block__img">
        <img src={Blood} alt="" />
      </div>
      <div className="work--block__text">
        <h3>
          Have You Done <br />
          Your Blood Work?
        </h3>
        <p>
          Blood work analyses provide a lot of key information about a person’s
          health, and I work in collaboration with healthcare professionals to
          address potential risks, and make dietary changes as necessary.
        </p>

        <p>
          Tracking these results will help me recommend adjustments in our
          training to optimize results and ensure continued progress.
        </p>
        <button
          className="button button--robinson button__black"
          onClick={() => navigate("/onlinecoaching/gutservice")}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Bloodwork;
