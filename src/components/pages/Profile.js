import React from "react";
import { Link } from "react-router-dom";

const Profile = (props) => {
  const { empdata } = props;
  const getToken = JSON.parse(localStorage.getItem("token"));
  const currentEmployee = empdata.filter((emp) => {
    return emp.id === getToken.id;
  });
  return (
    <div>
      {currentEmployee &&
        currentEmployee.map((employee) => {
          return (
            <div>
              id : {employee.id}
              <br />
              first_name: {employee.first_name}
              <br />
              designation : {employee.designation}
              <br />
              <Link to={`/edit/${employee.id}`}>Edit</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Profile;
