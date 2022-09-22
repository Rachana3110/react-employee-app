import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import inputs from "../data/inputs";
import "./css/AllEmployee.css";

const EmployeeInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:3001/employees/${id}`);
      setEmployee(result.data);
    };
    loadUser();
  }, [id]);

  return (
    <div className="root-container">
      <h2>Employee Information</h2>
      <div className="table-container">
        {inputs.map((input, i) => {
          return (
            <React.Fragment key={i}>
              {input.label !== "Password" && (
                <table className="table">
                  <thead>
                    <tr>
                      <th className="column" key={i}>
                        {input.label}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="row">
                        {employee && employee[input.name]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              )}
            </React.Fragment>
          );
        })}
      </div>
      <button onClick={() => navigate("/projectinformation")}>Back</button>
    </div>
  );
};

export default EmployeeInfo;
