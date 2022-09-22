import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./css/SkillUpdate.css";

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
    skills.splice(skillId, 1);
    handleEmployeeUpdate(id, currentEmployee[0]);
    window.location.reload(true);
  };

  return (
    <form className="skill-container" onSubmit={handleSkillUpdate}>
      <h2>Skill Update</h2>
      <select
        className="skill-select"
        name="skill-list"
        onChange={handleAddSkill}
        required
      >
        <option className="skill-option" value="">
          Select skill
        </option>
        <option className="skill-option">HTML</option>
        <option className="skill-option">CSS</option>
        <option className="skill-option">JavaScript</option>
        <option className="skill-option">ReactJs</option>
      </select>
      <input className="add-skill-button" type="submit" value="Add Skill" />

      <table className="skill-table">
        <thead>
          <tr>
            <th className="column">Skills List</th>
            <th className="column">Action</th>
          </tr>
        </thead>
        <tbody>
          {skills.length !== 0 ? (
            skills.map((skill, i) => {
              return (
                <tr>
                  <td className="row">
                    <>{skill}</>
                  </td>
                  <td className="row">
                    <input
                      type="button"
                      value="Delete Skill"
                      onClick={() => handleDelete(i)}
                      className="delete-button"
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <p>No Skills found</p>
          )}
        </tbody>
      </table>
    </form>
  );
};

export default SkillUpdate;
