import React, { useState } from "react";
import { useParams } from "react-router-dom";

const SkillUpdate = ({ currentEmployee, handleEmployeeUpdate }) => {
  const [choice, setChoice] = useState();
  const skills = currentEmployee[0].skills;
  const { id } = useParams();

  const handleAddSkill = (event) => {
    setChoice(event.target.value);
  };

  const handleSkillUpdate = (event) => {
    event.preventDefault();
    if (!skills.includes(choice)) {
      skills.push(choice);
      handleEmployeeUpdate(id, currentEmployee[0]);
    } else alert("Skill already added");
    window.location.reload(true);
  };
  const handleDelete = (skillId) => {
    skills.splice(skillId, 2);
    handleEmployeeUpdate(id, currentEmployee[0]);
    window.location.reload(true);
  };

  return (
    <form onSubmit={handleSkillUpdate}>
      <select name="skill-list" onChange={handleAddSkill} required>
        <option value="">Select skill</option>
        <option>HTML</option>
        <option>CSS</option>
        <option>JavaScript</option>
        <option>ReactJs</option>
      </select>
      <input type="submit" value="Add Skill" />
      {skills.map((skill, i) => {
        return (
          <ul key={i}>
            <li>
              {skill}
              <input
                type="button"
                value="Delete Skill"
                onClick={() => handleDelete(i)}
              />
            </li>
          </ul>
        );
      })}
    </form>
  );
};

export default SkillUpdate;
