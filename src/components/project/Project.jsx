import React, { useContext } from "react";
import "./project.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import pwLms from "../../img/best digital marketing.png";
import blogWebApp from "../../img/blog web app.png";
import razorPay from "../../img/Razor pay website cloned.png";
import weatherApp from "../../img/web.png";
import miniProjects from "../../img/miniProject.png"
import youtubeClone from "../../img/YOUTUBE-CLONE.png"
import { themeContext } from "../../Context";


const Project = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        breakpoints={{
          480:{width:480,slidesPerView:1,},
          1280:{width:1280,slidesPerView:3,}
        }}
        // slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        
      >
        <SwiperSlide onClick={()=>window.location.href="https://pwlms-edutech-solution.vercel.app/"}>
          <img src={pwLms} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={()=>window.location.href="https://blog-web-app-five.vercel.app/login"}>
          <img src={blogWebApp} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={()=>window.location.href="https://youtube-clone-frontend-pi.vercel.app/"}>
          <img src={youtubeClone} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={()=>window.location.href="https://64cb2f2b77969a32ef5ce7c1--weather-webapp-066.netlify.app/"}>
          <img src={weatherApp} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={()=>window.location.href="https://superlative-pavlova-230ff9.netlify.app/"}>
          <img src={razorPay} alt="" />
        </SwiperSlide>
        <SwiperSlide onClick={()=>window.location.href="https://651401f9bbea0e008ba6dc61--legendary-madeleine-b8ceaf.netlify.app/"}>
          <img src={miniProjects} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Project;
