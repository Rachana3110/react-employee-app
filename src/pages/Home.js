import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  const empData = location.state[0];
  return (
    <div>
          <text>Employee Id: </text>
          <text>{empData.Employee_ID_Number}</text>
          <br />
          <text>Name: </text>
          <text>
            {empData.Employee_Details.First_Name}{" "}
            {empData.Employee_Details.Last_Name}
          </text>
          <br />
          <text>Designation: </text>
          <text>{empData.Employee_Details.Designation}</text>
    </div>
  );
}
export default HomePage;
