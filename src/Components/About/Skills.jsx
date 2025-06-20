import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
import api from "../../assets/img/about/api.png";
import word from "../../assets/img/about/word.png";
import html from "../../assets/img/about/html.png";
import tailwind from "../../assets/img/about/Tailwind CSS.png";
import js from "../../assets/img/about/js.png";
import typescript from "../../assets/img/about/TypeScript.png";
import css from "../../assets/img/about/css.png";
import react from "../../assets/img/about/react.png";
import node from "../../assets/img/about/node.png";
import express from "../../assets/img/about/express.png";
import stripe from "../../assets/img/about/stripe.png";
import jwt from "../../assets/img/about/jwt.png";
import mongodb from "../../assets/img/about/MongoDB (1).png";
import post from "../../assets/img/about/PostgresSQL.png";
import git from "../../assets/img/about/Git.png";
import github from "../../assets/img/about/GitHub.png";
import docker from "../../assets/img/about/Docker.png";
import postman from "../../assets/img/about/Postman.png";
import vercel from "../../assets/img/about/Vercel.png";
import firebase from "../../assets/img/about/Firebase.png";
import netlify from "../../assets/img/about/netlify.png";
import socket from "../../assets/img/about/Socket.io.png";

export const skillsList = [
  // Frontend
  { id: 1, skill: "React", percentage: "90%", image: react },
  { id: 2, skill: "HTML5", percentage: "95%", image: html },
  { id: 3, skill: "CSS3", percentage: "90%", image: css },
  { id: 4, skill: "Tailwind CSS", percentage: "85%", image: tailwind },
  { id: 5, skill: "JavaScript", percentage: "88%", image: js },
  { id: 6, skill: "TypeScript", percentage: "80%", image: typescript },

  // Backend
  { id: 7, skill: "Node.js", percentage: "85%", image: node },
  { id: 8, skill: "Express", percentage: "82%", image: express },
  { id: 9, skill: "REST APIs", percentage: "90%", image: api },

  // Database
  { id: 10, skill: "MongoDB", percentage: "80%", image: mongodb },
  { id: 11, skill: "PostgreSQL", percentage: "75%", image: post },

  // Tools
  { id: 12, skill: "Git", percentage: "85%", image: git },
  { id: 13, skill: "GitHub", percentage: "88%", image: github },
  { id: 14, skill: "Docker", percentage: "70%", image: docker },
  { id: 15, skill: "Postman", percentage: "90%", image: postman },
  { id: 16, skill: "Vercel", percentage: "85%", image: vercel },
  { id: 17, skill: "Netlify", percentage: "80%", image: netlify },

  // Others
  { id: 18, skill: "JWT", percentage: "85%", image: jwt },
  { id: 19, skill: "Firebase", percentage: "80%", image: firebase },
  { id: 20, skill: "Stripe API", percentage: "75%", image: stripe },
  { id: 21, skill: "WebSockets", percentage: "70%", image: socket },
];

const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">
          <div className="col-lg-12">
            <div className="about__onecontent">
              <h2>My Skills</h2>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                consectetur, aliquam quaerats voluptatem. Ut enim ad minima
                veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
                velit esse quam nihil
              </p>
              <div className="about__contactwrap">
                <div className="row g-4">
                  {skillsList.map(({ id, skill, image, percentage }) => {
                    return (
                      <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
                        <div className="abox myskill__item">
                          <div className="thumb">
                            <img
                              style={{ width: '6rem' }}
                              src={image} alt="img" />
                          </div>
                          <div className="mys">
                            <span className="ptext fz-18 mb-15 d-block">{skill}</span>
                            <h1 className="fw-600">{percentage}</h1>
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

export default Skills;
