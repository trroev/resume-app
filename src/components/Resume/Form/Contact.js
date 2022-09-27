import React from "react";

const Contact = ({ contactInfo }) => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h2>Contact Information</h2>
      </div>
      <form className="form">
        <div className="form-control">
          <label>Location</label>
          <input
            type="text"
            name="location"
            placeholder="Grand Rapids, MI"
            value={contactInfo.location}
          />
        </div>
        <div className="form-control">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="269.760.6524"
            value={contactInfo.phoneNumber}
          />
        </div>
        <div className="form-control">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="tmathiak@gmail.com"
            value={contactInfo.email}
          />
        </div>
        <div className="form-control">
          <label>Website</label>
          <input
            type="text"
            name="website"
            placeholder="www.trevormathiak.dev"
            value={contactInfo.website}
          />
        </div>
        <div className="form-control">
          <label>LinkedIn</label>
          <input
            type="text"
            name="linkedin"
            placeholder="https://www.linkedin.com/in/trevormathiak"
            value={contactInfo.linkedin}
          />
        </div>
        <div className="form-control">
          <label>Github</label>
          <input
            type="text"
            name="github"
            placeholder="https://github.com/trroev"
            value={contactInfo.github}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
