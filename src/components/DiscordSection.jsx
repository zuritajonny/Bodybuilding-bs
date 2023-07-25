import { FiArrowUpRight } from "react-icons/fi";
import NickDiscord from "../media/NickDiscord.jpg";

function DiscordSection() {
  return (
    <div className="discord--block mn">
      <div className="discord--img">
        <img src={NickDiscord} alt="Discord logo on top of Nick's Face" />
      </div>
      <div className="discord--text">
        <h2>
          Join our discord
          <br />
          server, <span className="primary-color-accent">hard workers</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          molestie lectus mi. Proin cursus facilisis erat vitae accumsan.
          Integer id lacus eget diam maximus lobortis et sit amet ante through:
        </p>
        <ul className="list">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
          <li>Lorem ipsum dolor sit.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <a href="" className="button button--yellow button__robinson">
          Join The Server
          <FiArrowUpRight className="icon" />
        </a>
      </div>
    </div>
  );
}

export default DiscordSection;
