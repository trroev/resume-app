import React from "react";

const ExperienceItem = ({ id, experienceItem, onChange, onRemove }) => {
  return (
    <>
      <form className="form">
        <div className="form-control">
          <label>Position</label>
          <input
            type="text"
            name="position"
            placeholder="Software Engineer I"
            value={experienceItem.position}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Company</label>
          <input
            type="text"
            name="company"
            placeholder="Facebook"
            value={experienceItem.company}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Mountain View, CA"
            value={experienceItem.location}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>Start Date</label>
          <input
            type="text"
            name="startDate"
            placeholder="2010"
            value={experienceItem.startDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <div className="form-control">
          <label>End Date</label>
          <input
            type="text"
            name="endDate"
            placeholder="2020"
            value={experienceItem.endDate}
            onChange={(e) => onChange(e, id)}
          />
        </div>
        <button onClick={() => onRemove(id)}>Remove</button>
      </form>
    </>
  );
};

export default ExperienceItem;
