// import "./Rabbit.scss";
import Profile from "../../components/Profile/Profile";
import profiles from "../../data/data";

const Rabbit = () => {
  const rabbitProfile = profiles.map((profile, key) => {
    if (profile.name === "Rabbit") {
      const rabbitPostings = profile.postings.map((postings, key) => {
        return (
          <div key={key}>
            <img className="postings__item" src={postings} alt={key} />
          </div>
        );
      });
      return (
        <div key={key}>
          <Profile
            dp={profile.dp}
            Name={profile.name}
            bioTitle={profile.bio}
            description={profile.description}
            posts={profile.posts}
            followers={profile.followers}
            following={profile.following}
          />
          <div className="postings">{rabbitPostings}</div>
        </div>
      );
    }
  });

  return <div className="rabbit">{rabbitProfile}</div>;
};

export default Rabbit;
