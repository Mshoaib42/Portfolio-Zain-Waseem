import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src="https://plus.unsplash.com/premium_photo-1669312732419-a55959a56e6c?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" style={{ width: "100%", height: "80vh" }} />
      <div className="f-content">
        <span>zainwaseem9371@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/zainwaseemm/" target="_blank">


            <Insta color="white" size={"3rem"} />
          </a>
          <Facebook color="white" size={"3rem"} />
          <a href="https://github.com/zainwaseem" target="_blank">


            <Gitub color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
