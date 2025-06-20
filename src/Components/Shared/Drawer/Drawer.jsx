import React from "react";
import { XLg, ChevronRight } from "react-bootstrap-icons";
import logo from "../../../assets/img/logo/logo.png";
import { socialIcons } from "../../../Utlits/socilIcons";
import { Link } from "react-router-dom";

const Drawer = ({ isSidebarActive, setIsSidebarActive }) => {
  return (
    <div className={`subside__barmenu ${isSidebarActive ? "active" : ""}`}>
      <div
        onClick={() => setIsSidebarActive(false)}
        className="remove__click d-flex justify-content-center align-items-center"
      >
        <i>
          <XLg />
        </i>
      </div>
      <div className="sub__contact__wrapper d-grid">
        <Link to={""} className="side-logo">
          <img src={logo} alt="img" />
        </Link>
        <p>
        
        </p>
        <div className="sub__contact-left d-grid">
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> address </span>
              <span className="textp"> Islamabad, Pakistan </span>
            </div>
          </div>
          <div className="sub__contac-item">
            <div className="content">
              <span className="address d-block"> email </span>
              <Link className="textp"> matias999@.com </Link>
            </div>
          </div>
        </div>
        <Link
          to={""}
          className="d-flex justify-content-center fw-500 cmn--btn align-items-center gap-2"
        >
          <span>
            <i>
              <ChevronRight />
            </i>
          </span>
          <span className="get__text"> Let's Talk </span>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
