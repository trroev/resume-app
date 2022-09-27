import React from "react";

const Personal = ({ personalInfo, onChange }) => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Personal Information</h2>
      </div>
      <form className="form">
        <div className="form-control">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="Trevor"
            value={personalInfo.firstName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-control">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Mathiak"
            value={personalInfo.lastName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-control">
          <label>Job Title</label>
          <input
            type="text"
            name="jobTitle"
            placeholder="Software Engineer"
            value={personalInfo.jobTitle}
            onChange={(e) => onChange(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Personal;
