// import "./Dog.scss";
import Profile from "../../components/Profile/Profile";
import puppy from "../../assets/images/puppy.jpeg";

const Dog = () => {
  return (
    <div className="Dog">
      <Profile
        dp={puppy}
        Name="Dog"
        bioTitle="My dog's account"
        description="A document of my 's adventures"
        posts="12,5569"
        followers="9.1m"
        following="1"
      />
    </div>
  );
};

export default Dog;
