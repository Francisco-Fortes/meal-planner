import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ProfilePageTest = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [avatar, setAvatar] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (currentUser) {
      setAvatar(currentUser.avatar);
      setFirstName(currentUser.firstName);
      setLastName(currentUser.lastName);
    }
  }, [currentUser]);

  if (!currentUser) {
    return <div>There is an error loading your profile data</div>;
  }

  return (
    <div>
      <img src={avatar} alt="avatar" />
      <h2>{`${firstName} ${lastName}`}</h2>
    </div>
  );
};

export default ProfilePageTest;

// const LoggingOut = () => {
//   localStorage.removeItem("UserAccessToken");
//   localStorage.removeItem("firstName");
//   navigate("/");
// };
