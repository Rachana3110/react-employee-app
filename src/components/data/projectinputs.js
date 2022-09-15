const projectinputs = [
  {
    id: 1,
    name: "project_name",
    type: "text",
    placeholder: "Project Name",
    label: "Project Name",
    required: true,
  },
  {
    id: 2,
    name: "company_name",
    type: "text",
    placeholder: "Company Name",
    label: "Company Name",
    required: true,
  },
  {
    id: 3,
    name: "company_phone",
    type: "text",
    placeholder: "Company Phone",
    label: "Company Phone",
    required: false,
  },
  {
    id: 4,
    name: "project_status",
    type: "dropdown",
    options: [{ 0: "Active" }, { 1: "Inactive" }],
    placeholder: "Project_Status",
    label: "Project_Status",
    required: true,
  },
  {
    id: 5,
    name: "project_start_date",
    type: "date",
    placeholder: "Project Start Date",
    label: "Project Start Date",
    required: true,
  },
  {
    id: 6,
    name: "project_end_date",
    type: "date",
    placeholder: "Project End Date",
    label: "Project End Date",
    required: true,
  },
];

export default projectinputs;
