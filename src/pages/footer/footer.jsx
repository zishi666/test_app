import React from "react";
import "./footer.css";

import youtube from "../../assets/footerImgs/youtube.png";
import github from "../../assets/footerImgs/github.png";
import discord from "../../assets/footerImgs/discord.png";
import redit from "../../assets/footerImgs/redit.png";
import telegram from "../../assets/footerImgs/telegram.png";
import twitter from "../../assets/footerImgs/twitter.png";

const footerImgs = [youtube, github, discord, redit, telegram, twitter];

const firstColumn = ["ETHER", "Grants", "Generator", "Careers", "Disclaimer"];
const secondColumn = ["GET CONNECTED", "Services", "Blog", "Newsletter"];

const Footer = () => {
  return (
    <footer>
      <div className="footer_bootom">
        <div className="footerSection1">
          <p>Ether</p>
          <p>Managed by Artificial Intelligence</p>
          <div>
            {footerImgs.map((image) => {
              return <img src={image} alt="" />;
            })}
          </div>
        </div>

        <div className="footerSection2">
          <div className="FS2_Column">
            {firstColumn.map((text) => {
              return <p>{text}</p>;
            })}
          </div>
          <div className="FS2_Column">
            {secondColumn.map((text) => {
              return <p>{text}</p>;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
