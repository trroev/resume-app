import React from "react";

const Sidebar = ({ personalInfo, contactInfo }) => {
  const { firstName, lastName, jobTitle } = personalInfo;
  const { location, phoneNumber, email, website, linkedin, github } =
    contactInfo;
  return (
    <div className="resume-preview-sidebar">
      <h1>
        {firstName} {lastName}
      </h1>
      <h5>{jobTitle}</h5>
      <p>{location}</p>
      <p>{phoneNumber}</p>
      <p>{email}</p>
      <p>{website}</p>
      <p>{linkedin}</p>
      <p>{github}</p>
    </div>
  );
};

export default Sidebar;
