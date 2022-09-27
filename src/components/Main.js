import React, { useState } from "react";
import ResumeForm from "./Resume/Form/ResumeForm";
import ResumePreview from "./Resume/ResumePreview/ResumePreview";
import emptyResume from "./Resume/emptyResume";
import uniqid from "uniqid";

const Main = () => {
  const [resume, setResume] = useState(emptyResume);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;

    setResume((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeContact = (e) => {
    const { name, value } = e.target;

    setResume((prevState) => ({
      ...prevState,
      contactInfo: {
        ...prevState.contactInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;

    setResume((prevState) => {
      const newExperience = prevState.experienceInfo.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...prevState, experienceInfo: [...newExperience] };
    });
  };

  const handleAddExperience = () => {
    setResume((prevState) => ({
      ...prevState,
      experienceInfo: [
        ...prevState.experienceInfo,
        {
          id: uniqid(),
          position: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  const handleRemoveExperience = (id) => {
    setResume((prevState) => {
      const newExperience = prevState.experienceInfo.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experienceInfo: [...newExperience] };
    });
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;

    setResume((prevState) => {
      const newEducation = prevState.educationInfo.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...prevState, educationInfo: [...newEducation] };
    });
  };

  const handleAddEducation = () => {
    setResume((prevState) => ({
      ...prevState,
      educationInfo: [
        ...prevState.educationInfo,
        {
          id: uniqid(),
          school: "",
          location: "",
          degree: "",
          major: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  const handleRemoveEducation = (id) => {
    setResume((prevState) => {
      const newEducation = prevState.educationInfo.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, educationInfo: [...newEducation] };
    });
  };

  return (
    <div className="main">
      <ResumeForm
        resume={resume}
        onChangePersonal={handleChangePersonal}
        onChangeContact={handleChangeContact}
        onChangeExperience={handleChangeExperience}
        onChangeEducation={handleChangeEducation}
        onAddExperience={handleAddExperience}
        onAddEducation={handleAddEducation}
        onRemoveExperience={handleRemoveExperience}
        onRemoveEducation={handleRemoveEducation}
      />
      <ResumePreview resume={resume} />
    </div>
  );
};

export default Main;
