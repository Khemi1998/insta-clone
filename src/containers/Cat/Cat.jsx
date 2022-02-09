import "./Cat.scss";
import { useEffect, useState } from "react";
import Profile from "../../components/Profile/Profile";
import profiles from "../../data/data";

const Cat = () => {
  const catProfile = profiles.map((profile, key) => {
    if (profile.name === "Cat") {
      const catPostings = profile.postings.map((postings, key) => {
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
          <div className="postings">{catPostings}</div>
        </div>
      );
    }
  });

  return <div className="cat">{catProfile}</div>;
};

export default Cat;
