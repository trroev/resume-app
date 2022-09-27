import React from "react";

const EducationItem = ({ id, educationItem, onChange, onRemove }) => {
  return (
    <>
      <form className="form">
        <div className="form-control">
          <label>School</label>
          <input
            type="text"
            name="school"
            placeholder="Michigan State University"
            value={educationItem.school}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="East Lansing, MI"
            value={educationItem.location}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Degree</label>
          <input
            type="text"
            name="degree"
            placeholder="Bachelor's"
            value={educationItem.degree}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Major</label>
          <input
            type="text"
            name="major"
            placeholder="Computer Science"
            value={educationItem.major}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Start Date</label>
          <input
            type="text"
            name="startDate"
            placeholder="2005"
            value={educationItem.startDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>End Date</label>
          <input
            type="text"
            name="endDate"
            placeholder="2009"
            value={educationItem.endDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <button onClick={() => onRemove(id)}>Remove</button>
      </form>
    </>
  );
};

export default EducationItem;
