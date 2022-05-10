import React from "react";
import propTypes from "prop-types";

function Profile(Props) {
  return (
    <div className="profile">
      fullName={Props.fullName}
      bio={Props.bio}
      profession={Props.profession}
      {/* handleName={handleName} */}
    </div>
  );
}
Profile.propTypes = {
  fullName: propTypes.string,
  bio: propTypes.string,
  profession: propTypes.string,
  hundelname: propTypes.func,
};
Profile.defaultProps = {
  fullName: "",
  bio: "",
  profession: "",
  handleName: () => {
    alert("");
  },
};

export default Profile;
