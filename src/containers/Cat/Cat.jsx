// import "./Cat.scss";
import Profile from "../../components/Profile/Profile";
import cat from "../../assets/images/cat.jpeg";

const Cat = () => {
  return (
    <div className="cat">
      <Profile
        dp={cat}
        Name="Cat"
        bioTitle="My cat's account"
        description="A document of my cat's adventures"
        posts="16,889"
        followers="13.1m"
        following="7"
      />
    </div>
  );
};

export default Cat;
