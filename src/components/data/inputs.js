const inputs = [
  {
    id: 1,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "It should be a valid email address!",
    label: "Email",
    required: true,
  },
  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    label: "Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 3,
    name: "first_name",
    type: "text",
    placeholder: "First Name",
    errorMessage: "First Name shouldn't include any special character!",
    label: "First Name",
    // pattern: `^[A-Za-z]$`,
    required: true,
  },
  {
    id: 4,
    name: "last_name",
    type: "text",
    placeholder: "Last Name",
    errorMessage: "Last Name shouldn't include any special character!",
    label: "Last Name",
    // pattern: `^[A-Za-z]$`,
    required: false,
  },
  {
    id: 5,
    name: "date_of_birth",
    type: "date",
    placeholder: "Date Of Birth",
    errorMessage: "",
    label: "Date Of Birth",
    // pattern: `^[A-Za-z0-9]$`,
    required: false,
  },
  {
    id: 6,
    name: "phone_number",
    type: "number",
    placeholder: "Phone Number",
    errorMessage: "Enter 10 digit phone number",
    label: "Phone Number",
    pattern: `^[0-9]{1,10}$`,
    required: false,
  },
  {
    id: 7,
    name: "address",
    type: "text",
    placeholder: "Address",
    errorMessage: "",
    label: "Address",
    // pattern: `^[A-Za-z0-9]$`,
    required: false,
  },
  {
    id: 8,
    name: "qualification",
    type: "dropdown",
    options: [
      { 0: "B.E" },
      { 1: "M.B.A" },
      { 2: "B.S.C" },
      { 3: "M.S" },
      { 4: "B.B.A" },
    ],
    placeholder: "Qualification",
    errorMessage: "",
    label: "Qualification",
    // pattern: `^[A-Za-z0-9]$`,
    required: false,
  },
  {
    id: 9,
    name: "total_experience",
    type: "number",
    placeholder: "Total Experience",
    errorMessage: "Enter valid number",
    label: "Total Experience",
    pattern: `^[0-9]$`,
    required: false,
  },
  {
    id: 10,
    name: "start_date",
    type: "date",
    placeholder: "Start Date",
    errorMessage: "",
    label: "Start Date",
    // pattern: `^[A-Za-z0-9]$`,
    required: false,
  },
  {
    id: 11,
    name: "type_of_employee",
    type: "dropdown",
    options: [{ 0: "Permanent" }, { 1: "Part-time" }],
    placeholder: "Type Of Employee",
    errorMessage: "",
    label: "Type Of Employee",
    // pattern: `^[A-Za-z0-9]$`,
    required: false,
  },
  {
    id: 12,
    name: "designation",
    type: "dropdown",
    options: [{ 0: "Manager" }, { 1: "Developer" }],
    placeholder: "Designation",
    errorMessage: "",
    label: "Designation",
    // pattern: `^[A-Za-z0-9]$`,
    required: true,
  },
  {
    id: 13,
    name: "gender",
    type: "dropdown",
    options: [{ 0: "Male" }, { 1: "Female" }],
    placeholder: "Gender",
    errorMessage: "",
    label: "Gender",
    // pattern: `^[A-Za-z0-9]$`,
    required: false,
  },
  {
    id: 14,
    name: "marital_status",
    type: "dropdown",
    options: [{ 0: "Married" }, { 1: "Unmarried" }],
    placeholder: "Marital Status",
    errorMessage: "",
    label: "Marital Status",
    // pattern: `^[A-Za-z0-9]$`,
    required: false,
  },
];

export default inputs;
