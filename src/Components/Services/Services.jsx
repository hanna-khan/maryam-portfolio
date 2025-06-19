import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";
const serviceList = [
  {
    id: "01",
    heading: "Webflow Development",
    subHeading: "Custom Web Experiences",
    para: "We craft dynamic, fully-responsive websites using Webflow, tailored to your brand’s vision with seamless animations and a no-code approach.",
  },
  {
    id: "02",
    heading: "E-commerce Development",
    subHeading: "Scalable Online Stores",
    para: "Build powerful e-commerce platforms with secure checkout, product management, and optimized performance to grow your online business effectively.",
  },
  {
    id: "03",
    heading: "Web UI/UX Design",
    subHeading: "User-Centered Design",
    para: "We design intuitive and engaging user interfaces with a focus on seamless user experience to boost satisfaction and retention.",
  },
  {
    id: "04",
    heading: "CRM & SAAS Development",
    subHeading: "Custom Web Applications",
    para: "From CRMs to SaaS platforms, we develop scalable web applications with robust features tailored to your business processes and goals.",
  },
];

const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="My Special Service For Your Business Development"
            sortTitle="Services That i Provide"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
