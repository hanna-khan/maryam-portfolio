import React, { useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
} from "react-bootstrap-icons";

import { Link } from "react-router-dom";
import personalInfoThumb from "../../assets/img/logo/profile.png";

import AOS from "aos";
import "aos/dist/aos.css";

const contactInfo = [
  {
    id: 1,
    system: "Email",
    contact: "devwithmariam@gmail.com",
  },
  {
    id: 2,
    system: "Location",
    contact: "Islamabad, Pakistan",
  },
  // {
  //   id: 4,
  //   system: "Follow",
  //   socalContact: [
  //     <Facebook />,
  //     <Twitter />,
  //     <Linkedin />,
  //     <Globe />,
  //     <Instagram />,
  //   ],
  // },
];
const AboutMe = ({ isTabActive }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={`tabitem ${isTabActive === "about" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-5">
            <div
              className="about__onethumb"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <img
                style={{ width: '300px', display: 'block', margin: 'auto', marginTop: '1rem' }}
                src={personalInfoThumb} alt="img" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2
                className="h2-head"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Personal Info
              </h2>
              <p
                className="p-descrip"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Hi, I’m Maryam, a Full-Stack Developer who thrives on solving complex problems with clean code and smart design. I specialize in building fast, responsive, and scalable web applications using React, Node.js, MongoDB, and Express. With hands-on experience delivering end-to-end solutions, I bridge the gap between beautiful frontends and powerful backends.

                Beyond code, I’m passionate about continuous learning, open-source collaboration, and turning real-world problems into digital products.
                <br />
                Fun Line: <br />

                When I’m not coding, I’m probably sketching UI ideas, reading tech blogs, or overthinking dark mode toggle animations.

              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {contactInfo.map(({ id, contact, socalContact, system }) => {
                    return (
                      <div
                        key={id}
                        className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                        data-aos="zoom-in"
                      >
                        <div className="abox">
                          <div className="about__contbox__item">
                            <span className="ptext fz-18 mb-20 d-block">
                              {system}
                            </span>
                            <Link to={""}
                              style={{ textTransform: "lowercase", fontSize: "1rem", paddingRight:"1rem" }}
                            >{contact}</Link>
                            {socalContact && (
                              <ul className="d-flex align-items-center gap-1 gap-xl-4">
                                {socalContact.map((info, index) => (
                                  <li key={index}>
                                    <Link to={""}>{info} </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
