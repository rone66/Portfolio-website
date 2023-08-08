import React, { useContext } from "react";
import "./skill.css";
import react from '../../img/react.png';
import nodejs from '../../img/nodejs.png';
import js from '../../img/javascript.png';
import html from '../../img/html.png';
import css from '../../img/css.png';
import mongo from '../../img/mongo-db.png';
import tw from '../../img/tailwind.png';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Skill = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Skills that I have
          </span>
          <span>Languages & Frameworks</span>
          <span>
          Web development expert with a wide-ranging skill set.<br/>
          Adept at crafting captivating websites using HTML, CSS, and JavaScript,<br/>
          along with expertise in modern frameworks like nodejs,react,express,mongoose <br/>
          Committed to delivering seamless user experiences through responsive design.<br/>
          Enthusiastic about continuously upgrading knowledge to offer innovative solutions to clients.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 90 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
           <div className='w-secCircle'>
                    <img src={html} alt=''/>
                </div>

                <div className='w-secCircle'>
                    <img src={css} alt=''/>
                </div>

                <div className='w-secCircle'>
                    <img src={js} alt=''/>
                </div>

                <div className='w-secCircle'>
                    <img src={nodejs} alt=''/>
                </div>

                <div className='w-secCircle'>
                    <img src={react} alt=''/>
                </div>

                <div className='w-secCircle'>
                    <img src={mongo} alt=''/>
                </div>

                <div className='w-secCircle'>
                    <img src={tw} alt=''/>
                </div>

        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Skill;
