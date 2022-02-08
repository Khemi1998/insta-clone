import "./Profile.scss";
import verified from "../../assets/images/verified.svg";
import dots from "../../assets/images/dots.svg";
import grid from "../../assets/images/grid.svg";
import video from "../../assets/images/video.svg";
import play from "../../assets/images/play.svg";
import pic from "../../assets/images/picOf.svg";

const Profile = (props) => {
  const { dp, Name, bioTitle, description, posts, followers, following } =
    props;

  return (
    <div className="profile">
      <div className="profile__head__container">
        <img className="profile__head__pic" src={dp} alt="profile" />
        <div className="profile__connect">
          <div className="profile__head">
            <h2>{Name}</h2>
            <img src={verified} alt="verified" />
            <img src={dots} alt="dots" />
          </div>
          <button className="profile__followbtn">Follow</button>
          <button className="profile__arrowbtn">˅</button>
        </div>
      </div>
      <strong className="profile__content">{bioTitle}</strong>
      <p className="profile__content">{description}</p>
      <div className="profile__info">
        <div className="profile__info__item">
          <strong>{posts}</strong>
          <p className="profile__info_grey">posts</p>
        </div>
        <div className="profile__info__item">
          <strong>{followers}</strong>
          <p className="profile__info_grey">followers</p>
        </div>
        <div className="profile__info__item">
          <strong>{following}</strong>
          <p className="profile__info_grey">following</p>
        </div>
      </div>
      <div className="profile__icons">
        <img className="profile__icons__item" src={grid} alt="grid" />
        <img className="profile__icons__item" src={video} alt="video" />
        <img className="profile__icons__item" src={play} alt="play" />
        <img className="profile__icons__item" src={pic} alt="pic" />
      </div>
    </div>
  );
};

export default Profile;
