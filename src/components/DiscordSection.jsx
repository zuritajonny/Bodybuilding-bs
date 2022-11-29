import React from "react";
import { FiArrowRight } from "react-icons/fi";
import discord from "../media/Icons/discordIcon.svg";

function DiscordSection() {
  return (
    <section className="discord">
      <img src={discord} alt="" />
      <h2 className="big-text">Ready to join the Srs Discord?</h2>
      <h5 className="big-text--subtitle">A very srs community...</h5>
      <p className="hero-paragraph paragraph-text text-discord">
        If you are looking to join an army of srs lads and chads you've found
        the spot. Epic ments and legendary gents helping each other ascend to
        unknown heights. You don't want to miss out... very srs,,,
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
