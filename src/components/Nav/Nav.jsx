import "./Nav.scss";
import insta from "../../assets/images/Insta.svg";
import home from "../../assets/images/home.svg";
import send from "../../assets/images/send.svg";
import add from "../../assets/images/add.svg";
import compass from "../../assets/images/compass.svg";
import heart from "../../assets/images/heart.svg";
import profile from "../../assets/images/profile.svg";

const Nav = () => {
  return (
    <div className="nav">
      <img className="nav__logo" src={insta} alt="instaLogo" />
      <img className="nav__icon" src={home} alt="instahome" />
      <img className="nav__icon" src={send} alt="instaSend" />
      <img className="nav__icon" src={add} alt="instaAdd" />
      <img className="nav__icon" src={compass} alt="instaCompass" />
      <img className="nav__icon" src={heart} alt="instaHeart" />
      <img className="nav__icon" src={profile} alt="instaProfile" />
    </div>
  );
};

export default Nav;
