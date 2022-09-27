import React from "react";
import Main from "./Main";
import Sidebar from "./Sidebar";

const ResumePreview = ({ resume }) => {
  return (
    <div className="resume-preview">
      <Sidebar
        personalInfo={resume.personalInfo}
        contactInfo={resume.contactInfo}
      />
      <Main
        experienceInfo={resume.experienceInfo}
        educationInfo={resume.educationInfo}
      />
    </div>
  );
};

export default ResumePreview;
