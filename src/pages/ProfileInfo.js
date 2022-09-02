import React from "react";
import { RegisterConfig } from "../config/RegisterConfig";

const ProfileInfo = () => {
  const empInfo = JSON.parse(localStorage.getItem("token"));
  return (
    <div>
      {RegisterConfig.map((empdata) => {
        return (
          <div>
            {empdata.questionname} : {empInfo[empdata.questionname]}
          </div>
        );
      })}
    </div>
  );
};

export default ProfileInfo;
