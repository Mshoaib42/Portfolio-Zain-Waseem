import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Your attention to detail, expertise, and professionalism were evident throughout the entire project. Not only did you meet my expectations, but you exceeded them in every way. The quality of your work and your commitment to delivering on time were truly outstanding. I also appreciate your excellent communication skills. You were always responsive to my questions and open to feedback, which made the collaboration seamless and enjoyable.",
    },
    {
      img: profilePic2,
      review:
        "I recently hired a full stack web developer on Fiverr, and I am extremely impressed with the results. The developer demonstrated a deep understanding of both front-end and back-end technologies, delivering a website that not only looks visually stunning but also performs flawlessly. Their attention to detail and ability to implement complex functionalities were remarkable..",
    },
    {
      img: profilePic3,
      review:
        "Amazing service excellent work and great delivery. would recommend to others. He is very collaborative and will call or ask for any more further assistance. I would recommend this person to many different buyers for what ever work they may need.",
    },
    {
      img: profilePic4,
      review:
        "Zain was excellent to work with. He took all my revisions and made my very first website exactly how I wanted it. I would recommend Zain to anyone looking to build their custom website.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
