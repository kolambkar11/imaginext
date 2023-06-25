import React from "react";
import { MailIcon, BellIcon } from "@heroicons/react/outline";
import profileDp from "../assets/profile.png";
const Profile = () => {
  return (
    <>
      <img className="prodp" src={profileDp} alt="Workflow" />
      <p className="text-center">Jonathan Patton</p>
      <p className="text-center">User</p>
      <div className="profiledetails">
        <MailIcon className="mr-3 flex-shrink-0 h-6 w-6 text-black-300" aria-hidden="true" />
        <BellIcon className="mr-3 flex-shrink-0 h-6 w-6 text-black-300" aria-hidden="true" />
      </div>
    </>
  );
};

export default Profile;
