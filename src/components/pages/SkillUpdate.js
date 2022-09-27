import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./css/SkillUpdate.css";

const SkillUpdate = ({ currentEmployee, handleEmployeeUpdate }) => {
  const [skill, setskill] = useState();
  const { id } = useParams();
  const handleAddSkill = (event) => {
    setskill(event.target.value);
  };

  const handleSkillUpdate = (event) => {
    event.preventDefault();
    if (!currentEmployee[0].skills.includes(skill)) {
      currentEmployee[0].skills.push(skill);
      handleEmployeeUpdate(id, currentEmployee[0]);
    } else alert("Skill already present");
  };

  const handleDelete = (skillId) => {
    currentEmployee[0].skills.splice(skillId, 1);
    handleEmployeeUpdate(id, currentEmployee[0]);
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
          {currentEmployee[0].skills.length !== 0 ? (
            currentEmployee[0].skills.map((skill, i) => {
              return (
                <tr key={i}>
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
            <tr>
              <td>No Skills found</td>
            </tr>
          )}
        </tbody>
      </table>
    </form>
  );
};

export default SkillUpdate;
