import React, { useState } from "react";
import TabNavItem from "../TabComponent/TabNavItem";
import TabContent from "../TabComponent/TabContent";
import "../TabComponent/css/Tabs.css";
import EmployeeDetails from "../../pages/EmployeeDetails";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("employee_details");

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title="Employee Details"
          id="employee_details"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Project Information"
          id="project_information"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Edit Profile"
          id="edit_profile"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>

      <div className="outlet">
        <TabContent id="employee_details" activeTab={activeTab}>
         <EmployeeDetails/>
        </TabContent>
        <TabContent id="project_information" activeTab={activeTab}>
          <p>Project Information</p>
        </TabContent>
        <TabContent id="edit_profile" activeTab={activeTab}>
          <p>Edit Profile</p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
