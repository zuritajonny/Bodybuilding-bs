import Blood from "../media/blood.png";

function Bloodwork() {
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
          Blood work analysis can provide a lot of key information about a
          person’s health, and I work in collaboration with healthcare
          professionals to address potential risks, and make dietary changes as
          necessary.
        </p>

        <p>
          Tracking these results with not only help me recommend adjustments in
          our training program to optimize results and ensure your continued
          progress.
        </p>
        <button className="button button--robinson button__black">
          Call to Action
        </button>
      </div>
    </div>
  );
}

export default Bloodwork;
