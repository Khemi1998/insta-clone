// import "./Rabbit.scss";
import Profile from "../../components/Profile/Profile";
import rabbit from "../../assets/images/rabbit.jpeg";

const Rabbit = () => {
  return (
    <div className="Rabbit">
      {" "}
      <Profile
        dp={rabbit}
        Name="Rabbit"
        bioTitle="My rabbit's account"
        description="A document of my rabbit's adventures"
        posts="25,999"
        followers="15.6m"
        following="108"
      />
    </div>
  );
};

export default Rabbit;
