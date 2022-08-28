import React from "react";

const EmployeeDetails = () => {
  const empInfo = JSON.parse(localStorage.getItem("token"));
  return (
    <div>
      Employee_ID_Number: {empInfo.Employee_ID_Number}
      <br />
      Name: {empInfo.First_Name+" "+empInfo.Middle_Name+" "+empInfo.Last_Name}
      <br />
      Date_of_Birth: {empInfo.Date_of_Birth}
      <br />
      Phone_Number: {empInfo.Phone_Number}
      <br />
      Address: {empInfo.Address}
      <br />
      Postal_Code: {empInfo.Postal_Code}
      <br />
      Qualification: {empInfo.Qualification}
      <br />
      Total_Experience: {empInfo.Total_Experience}
      <br />
      Start_Date_Date: {empInfo.Start_Date_Date}
      <br />
      End_Date_Date: {empInfo.End_Date_Date}
      <br />
      Type_of_Employee: {empInfo.Type_of_Employee}
      <br />
      Designation:{empInfo.Designation}
      <br />
      Gender: {empInfo.Gender}
      <br />
      Marital_Status:{empInfo.Marital_Status}
    </div>
  );
};

export default EmployeeDetails;
