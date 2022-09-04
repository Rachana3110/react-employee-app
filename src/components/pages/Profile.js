import React from "react";

const Profile = (employee) => {
  return (
    <div>
      <h3>Profile</h3>
      id : {employee.id}
      <br />
      first_name: {employee.first_name}
      <br />
      designation : {employee.designation}
      <br />
    </div>
  );
};

export default Profile;
