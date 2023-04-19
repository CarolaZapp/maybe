import "../styles/landing.css"
import { BsFillPersonFill } from "react-icons/bs"
import { FaPhoneAlt} from "react-icons/fa"
import { GrMail} from "react-icons/gr"
import { FaGithubSquare } from "react-icons/fa"
import { FaXingSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { GiTechnoHeart} from "react-icons/gi"
import { FaRegCopyright } from "react-icons/fa"
import { FaDownload} from "react-icons/fa"


const Landing = () => {

  return (
    <>
    <div>
      <div className="bgimg-one">
        <div className="caption-one">
          <h1>Maybe?</h1>
        </div>
      </div>
      <div className="textBox-big">
        <h3>Maybe I am the perfect match for your company?</h3>
        <h3 className="life"> Life is too short for a " Maybe "...</h3>
      </div>
      <div className="bgimg-two">
        <div className="caption-scroll">
          <span>scroll down</span>
        </div>
      </div>
      <div>
        <div className="text">
          <p>
            <strong>Let`s get in touch...</strong>
          </p>
          <div className="contact">
            <div className="contact-item">
              <h1 className="icons"> <BsFillPersonFill/> </h1>
              <p>Carola Zapp</p>
            </div>
            <div className="contact-item">
              <h1 className="icons"> <GrMail/> </h1>
              <a className="mailto" href="mailto:carola.zapp@gmx.net?subject=Contact from Maybe &body=Hallo Carola," target="_blank">carola.zapp@gmx.net</a> 
            </div>
            <div className="contact-item">
              <h1 className="phone"> <FaPhoneAlt/> </h1>
              <p>+49 151-59496998</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bgimg-three">
        <div className="caption-scroll">
          <span>scroll down</span>
        </div>
      </div>
        <div className="text">
          <p>
            <strong>Or have a look...</strong>
          </p>
          <div className="social-links">
          <p>
            <a href="https://www.github.com/CarolaZapp" target="_blank"
              > <h1 className="icons"> <FaGithubSquare/> </h1> </a>
          </p>
          <p>
            <a href="https://www.linkedin.com/in/carola-zapp-profile" target="_blank"
              > <h1 className="icons"> <FaLinkedin/> </h1> </a>
          </p>
          <p>
            <a href="https://www.xing.com/profile/Carola_Zapp/cv" target="_blank"
              > <h1 className="icons"> <FaXingSquare/> </h1> </a>
          </p>
          </div>
      </div>
      <div className="bgimg-one">
        <div className="caption-bottom">
        <h3> See you... Take care!</h3>
        <p className="passion">
          Made with passion < GiTechnoHeart/> by Carola Zapp, < FaRegCopyright/> 2023
        </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Landing;