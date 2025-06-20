import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  PlayFill,
} from "react-bootstrap-icons";

import bannerMan from "../../assets/img/logo/profile.png";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";
import bnArrow from "../../assets/img/banner/bn-arrow.png";
import VideoPlay from "../Shared/VideoPlay/VideoPlay";

const socalIcon = [
  {
    id: 1,
    icon: <Facebook />,
  },
  {
    id: 2,
    icon: <Twitter />,
  },
  {
    id: 3,
    icon: <Linkedin />,
  },
  {
    id: 4,
    icon: <Globe />,
  },
  {
    id: 5,
    icon: <Instagram />,
  },
];
const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if (!position) {
      setPosition(true)
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id="home">
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          {/* Left Side - Content */}
          <div
            style={{
              flex: "1 1 60%",
              minWidth: "300px",
            }}
          >
            <div className="banner__content">
              <Link to={""} className="bn__currently">
                <span className="d-block">
                  Currently available for freelance
                </span>
                <span className="d-flex gap-4 align-items-center">
                  worldwide
                  <i className="bi bi-arrow-up-right"></i>
                </span>
              </Link>
              <h1>
                <span className="hone text-xl"> Building Scalable Web Apps </span>
                <span className="d-block designers">
                  That Solve Real Problems
                </span>
              </h1>
              <div className="video__area">
                <img src={bnArrow} className="vid__arrow" alt="img" />
                <div onClick={openLightbox} className="video__80 video-btn">
                  <i>
                    <PlayFill />
                  </i>
                </div>
                <span className="proces">Work Process</span>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            style={{
              flex: "1 1 35%",
              minWidth: "250px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              margin: "auto",
              marginLeft: "2rem"
            }}

          >
            <div
              style={{
                animation: position ? "fadeInUp 1s ease-in-out" : "none",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <img
                src={bannerMan}
                alt="man-img"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginBottom: "20px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <Link to={""}>
            <img src={dial} alt="img" />
          </Link>
        </div>
        <div className="right__infoscroll">
          <Link className="scroll">
            scroll down
          </Link>
          <Link className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
      </div>
      {/* <div className="banner__rightinfo">
        <div className="right__infoscroll">
          <Link to={""} className="scroll">
            Follow Me
          </Link>
          <Link to={""} className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
        <div className="banner__xlsocial">
          <ul className="banner__soci d-grid justify-content-center">
            {socalIcon.map(({ icon, id }) => {
              return (
                <li key={id}>
                  <Link to={""} >
                    <i>{icon}</i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div> */}
      {lightboxOpen && (
        <VideoPlay
          setLightboxOpen={setLightboxOpen}
          url="https://www.youtube.com/embed/tgbNymZ7vqY"
        />
      )}
    </section>
  );
};

export default Banner;
