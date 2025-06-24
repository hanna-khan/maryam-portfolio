import React from "react";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import Form from "../../Components/Shared/Form/Form";
import { ScrollRestoration } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <PageHeader
        heading={"Let's Start Something"}
        page={"Let's Start Something"}
      />
      <section className="contact__section">
        <div className="container">

          <div className="contact__rightside cmn__bg">
            <h4 className="mb-30">Feel free to contact me anytime</h4>
            <div className="contact__item mb-20">
              <span className="he1">Email</span>
              <a href="#0" style={{ textTransform:"lowercase" }}>devwithmariam@gmail.com</a>
            </div>
            <div className="contact__item">
              <span className="he1">Address</span>
              <span className="address">Islamabad, Pakistan</span>
            </div>
          </div>
        </div>
      </section>
      <ScrollRestoration />
    </>
  );
};

export default Contact;
