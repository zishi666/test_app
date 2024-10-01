import React from "react";
import "./midleSection.css";

import youtube from "../../assets/youtubeicon.png";
import podcast from "../../assets/podcadst.png";

const activeUser = [
  ["10.2M+", "Active accounts"],
  ["300+", "projects"],
  ["1000+", "topics"],
];

const MidleSection = () => {
  return (
    <section className="middleSection">
      <div className="cardSection">
        <div className="card">
          <p>Automated Image Synthesis and Design</p>
          <p>
            With AI-powered image generation, designers and creatives can
            streamline their workflows and unlock new levels of efficiency.
          </p>
          <div className="socialSection">
            <div>
              YOUTUBE
              <img src={youtube} alt="" />
            </div>
            <div>
              PODCAST
              <img src={podcast} alt="" />
            </div>
          </div>
        </div>
        <div className="card">
          <p>Create stunning visual in seconds</p>
          <p>
            Generating innovative ideas is a crucial aspect of any creative
            endeavor. AI tools can help spark inspiration by analyzing vast
            amounts of data
          </p>
          <div className="searchingInput">
            <input type="text" placeholder="Write Prompt to generate image" />
            <button>Generate</button>
          </div>
        </div>
      </div>
      <div className="community">
        <div className="comunitySection">
          <p className="communityMessage">Join a community of millions.</p>
          <div className="activeUserSection">
            {activeUser.map((user) => {
              return (
                <div className="userBox">
                  <div>{user[0]}</div>
                  <p>{user[1]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidleSection;
