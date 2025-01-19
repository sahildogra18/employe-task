let employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "hello@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare monthly report",
        taskDescription: "Compile and summarize this month's sales data.",
        taskDate: "2025-01-18",
        category: "Reporting",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        taskTitle: "Team meeting",
        taskDescription: "Attend the quarterly team meeting.",
        taskDate: "2025-01-20",
        category: "Meetings",
        active: false,
        newTask: false,
        complete: true,
        failed: false,
      },
      {
        taskTitle: "Client follow-up",
        taskDescription: "Follow up with clients regarding pending issues.",
        taskDate: "2025-01-19",
        category: "Client Relations",
        active: true,
        newTask: false,
        complete: false,
        failed: false,
      },
    ],
    taskSummary: {
      active: 2,
      newTask: 1,
      complete: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    firstName: "Priya",
    email: "hello1@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Software update",
        taskDescription: "Update company laptops with the latest software.",
        taskDate: "2025-01-18",
        category: "IT",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        taskTitle: "Inventory check",
        taskDescription: "Verify the office supply inventory.",
        taskDate: "2025-01-19",
        category: "Inventory",
        active: false,
        newTask: false,
        complete: true,
        failed: false,
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Social media campaign",
        taskDescription: "Draft and schedule posts for the new product launch.",
        taskDate: "2025-01-21",
        category: "Marketing",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        taskTitle: "Product training session",
        taskDescription: "Host a training session for the sales team.",
        taskDate: "2025-01-22",
        category: "Training",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        taskTitle: "Documentation update",
        taskDescription: "Update the user manual for the new software version.",
        taskDate: "2025-01-23",
        category: "Documentation",
        active: false,
        newTask: false,
        complete: true,
        failed: false,
      },
    ],
    taskSummary: {
      active: 2,
      newTask: 2,
      complete: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Schedule interviews",
        taskDescription: "Set up interviews for the new developer position.",
        taskDate: "2025-01-18",
        category: "HR",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        taskTitle: "Policy review",
        taskDescription: "Review the company's leave policy for updates.",
        taskDate: "2025-01-20",
        category: "HR",
        active: false,
        newTask: false,
        complete: true,
        failed: false,
      },
    ],
    taskSummary: {
      active: 1,
      newTask: 1,
      complete: 1,
      failed: 0,
    },
  },
  {
    id: 5,
    firstName: "Suresh",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Website maintenance",
        taskDescription: "Perform routine maintenance on the company website.",
        taskDate: "2025-01-19",
        category: "Web Development",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
      {
        taskTitle: "Bug fixing",
        taskDescription: "Fix reported bugs in the ticketing system.",
        taskDate: "2025-01-20",
        category: "Development",
        active: false,
        newTask: false,
        complete: true,
        failed: false,
      },
      {
        taskTitle: "Feature implementation",
        taskDescription: "Add a new payment feature to the mobile app.",
        taskDate: "2025-01-22",
        category: "Development",
        active: true,
        newTask: true,
        complete: false,
        failed: false,
      },
    ],
    taskSummary: {
      active: 2,
      newTask: 2,
      complete: 1,
      failed: 0,
    },
  },
];

let admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
    role: "admin",
  },
];

export let setLocaleStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export function getLocaleStorage() {
  let employees = JSON.parse(localStorage.getItem("employees"));
  // console.log(JSON.parse(data));
  let admin = JSON.parse(localStorage.getItem("admin"));
  // console.log(admin);
  return { employees, admin };
}
