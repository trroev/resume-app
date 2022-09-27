import React from "react";

const Education = ({ educationInfo }) => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Education</h2>
      </div>
      <form className="form">
        <div className="form-control">
          <label>School</label>
          <input
            type="text"
            name="school"
            placeholder="Michigan State University"
            value={educationInfo.school}
          />
        </div>
        <div className="form-control">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="East Lansing, MI"
            value={educationInfo.location}
          />
        </div>
        <div className="form-control">
          <label>Degree</label>
          <input
            type="text"
            name="degree"
            placeholder="Bachelor's"
            value={educationInfo.degree}
          />
        </div>
        <div className="form-control">
          <label>Major</label>
          <input
            type="text"
            name="degree"
            placeholder="Computer Science"
            value={educationInfo.major}
          />
        </div>
        <div className="form-control">
          <label>Start Date</label>
          <input
            type="text"
            name="startDate"
            placeholder="2005"
            value={educationInfo.startDate}
          />
        </div>
        <div className="form-control">
          <label>End Date</label>
          <input
            type="text"
            name="endDate"
            placeholder="2009"
            value={educationInfo.endDate}
          />
        </div>
      </form>
    </div>
  );
};

export default Education;
