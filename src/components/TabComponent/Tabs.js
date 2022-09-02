import React, { useState } from "react";
import TabNavItem from "../TabComponent/TabNavItem";
import TabContent from "../TabComponent/TabContent";
import "../TabComponent/css/Tabs.css";
import AddProject from "../../pages/AddProject";
import DisplayProject from "../../pages/DisplayProject";
import EmployeeList from "../../pages/EmployeeList";
import ProfileInfo from "../../pages/ProfileInfo";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("profile_info");

  return (
    <div className="Tabs">
      <ul className="nav">
        <TabNavItem
          title="Employee list"
          id="employee_list"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Profile Info"
          id="profile_info"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Add Project"
          id="add_project"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Display Project"
          id="display_project"
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
        <TabContent id="profile_info" activeTab={activeTab}>
          <ProfileInfo />
        </TabContent>
        <TabContent id="employee_list" activeTab={activeTab}>
          <EmployeeList />
        </TabContent>
        <TabContent id="add_project" activeTab={activeTab}>
          <AddProject />
        </TabContent>
        <TabContent id="display_project" activeTab={activeTab}>
        <DisplayProject />
        </TabContent>
        <TabContent id="edit_profile" activeTab={activeTab}>
          <p>Edit Profile</p>
        </TabContent>
      </div>
    </div>
  );
};

export default Tabs;
