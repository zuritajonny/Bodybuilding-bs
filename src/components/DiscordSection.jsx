import React from "react";
import { FiArrowRight } from "react-icons/fi";

function DiscordSection() {
  return (
    <section className="discord">
      <h2 className="big-text">Join our Discord server!</h2>
      <h5 className="big-text--subtitle">
        A place for discussion, learning and getting better.
      </h5>
      <p className="hero-paragraph paragraph-text">
        Learn from other people with likeminded goals and become your better and
        bigger version. Everyone is welcome.
        <br />
        We are building more than a fitness community! Tune in for more if that
        interests you srs
      </p>

      <a href="https://discord.gg/srsbodybuild" target="_blank">
        <button className="button">
          Join now <FiArrowRight className="icon" />
        </button>
      </a>
    </section>
  );
}

export default DiscordSection;
