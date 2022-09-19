import React, { useState } from "react";

const SkillUpdate = ({ currentEmployee, handleEmployeeUpdate }) => {
  const [skills, setSkills] = useState(currentEmployee[0].skills);

  const handleAddSkill = (event) => {
    if (skills.includes(event.target.value)) {
      alert("skill already in the list");
    } else {
      skills.push(event.target.value);
    }
  };

  const handleSkillUpdate = (event) => {
    event.preventDefault();
    setSkills([...skills]);
  };

  return (
    <form onSubmit={handleSkillUpdate}>
      <h2>Skill Update</h2>
      <select name="skill-list" onChange={handleAddSkill} required>
        <option value="">Select skill</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>JavaScript</option>
        <option>ReactJs</option>
      </select>
      <input type="submit" value="add skill" />
      {skills.map((skill, i) => {
        return (
          <ul key={i}>
            <li>{skill}</li>
          </ul>
        );
      })}
    </form>
  );
};

export default SkillUpdate;
