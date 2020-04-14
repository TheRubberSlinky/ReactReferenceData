const courses = [
  {
    id: 1,
    title: "Securing React Apps with Auth0",
    slug: "react-auth0-authentication-security",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 2,
    title: "React: The Big Picture",
    slug: "react-big-picture",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 3,
    title: "Creating Reusable React Components",
    slug: "react-creating-reusable-components",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "Building a JavaScript Development Environment",
    slug: "javascript-development-environment",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 5,
    title: "Building Applications with React and Redux",
    slug: "react-redux-react-router-es6",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 6,
    title: "Building Applications in React and Flux",
    slug: "react-flux-building-applications",
    authorId: 1,
    category: "JavaScript"
  },
  {
    id: 7,
    title: "Clean Code: Writing Code for Humans",
    slug: "writing-clean-code-humans",
    authorId: 1,
    category: "Software Practices"
  },
  {
    id: 8,
    title: "Architecting Applications for the Real World",
    slug: "architecting-applications-dotnet",
    authorId: 1,
    category: "Software Architecture"
  },
  {
    id: 9,
    title: "Becoming an Outlier: Reprogramming the Developer Mind",
    slug: "career-reboot-for-developer-mind",
    authorId: 1,
    category: "Career"
  },
  {
    id: 10,
    title: "Web Component Fundamentals",
    slug: "web-components-shadow-dom",
    authorId: 1,
    category: "HTML5"
  }
];

const authors = [
  { id: 1, name: "Cory House" },
  { id: 2, name: "Scott Allen" },
  { id: 3, name: "Dan Wahlin" }
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

const baseTree = [
  { title: "Branch1", key: "1", isLeaf: false },
  { title: "Branch2", key: "2", isLeaf: false },
  { title: "Branch3", key: "3", isLeaf: false },
  { title: "Branch4", key: "4", isLeaf: false }
];

const TreeKids = [
  { title: "Employee1", Parent: "1", key: "1,E", isLeaf: true },
  { title: "Employee2", Parent: "1", key: "2,E", isLeaf: true },
  { title: "Employee3", Parent: "1", key: "3,E", isLeaf: true },
  { title: "Employee4", Parent: "2", key: "4,E", isLeaf: true },
  { title: "Employee5", Parent: "2", key: "5,E", isLeaf: true },
  { title: "Employee6", Parent: "4", key: "6,E", isLeaf: true },
  { title: "Employee7", Parent: "4", key: "7,E", isLeaf: true }
];

const Employees = [
  {
    key: "1",
    data: [
      {
        name: "EmployeeNumber",
        value: "cc309921"
      },
      {
        name: "EmployeeName",
        value: "Tristan"
      },
      {
        name: "EmployeeSurname",
        value: "Donovan"
      },
      {
        name: "EmployeeLastLoggedIn",
        value: "2020-03-12"
      },
      {
        name: "EmployeeID",
        value: "9610225060083"
      },
      {
        name: "EmployeeBranch",
        value: 182
      }
    ]
  },
  {
    key: "2",
    data: [
      {
        name: "EmployeeNumber",
        value: "cc302066"
      },
      {
        name: "EmployeeName",
        value: "mulalo"
      },
      {
        name: "EmployeeSurname",
        value: "mudao"
      },
      {
        name: "EmployeeLastLoggedIn",
        value: "2020-03-12"
      },
      {
        name: "EmployeeID",
        value: "5678341290875"
      },
      {
        name: "EmployeeBranch",
        value: 77
      }
    ]
  },
  {
    key: "3",
    data: [
      {
        name: "EmployeeNumber",
        value: "cc059873"
      },
      {
        name: "EmployeeName",
        value: "herman"
      },
      {
        name: "EmployeeSurname",
        value: "Nel motors"
      },
      {
        name: "EmployeeLastLoggedIn",
        value: "2020-03-12"
      },
      {
        name: "EmployeeID",
        value: "45838489684353"
      },
      {
        name: "EmployeeBranch",
        value: 57
      }
    ]
  },
  {
    key: "4",
    data: [
      {
        name: "EmployeeNumber",
        value: "cc034568"
      },
      {
        name: "EmployeeName",
        value: "Louis"
      },
      {
        name: "EmployeeSurname",
        value: "Armstrong"
      },
      {
        name: "EmployeeLastLoggedIn",
        value: "2020-03-12"
      },
      {
        name: "EmployeeID",
        value: "2348794835435"
      },
      {
        name: "EmployeeBranch",
        value: 57
      }
    ]
  },
  {
    key: "5",
    data: [
      {
        name: "EmployeeNumber",
        value: "cc284564"
      },
      {
        name: "EmployeeName",
        value: "Tiisetso"
      },
      {
        name: "EmployeeSurname",
        value: "smith"
      },
      {
        name: "EmployeeLastLoggedIn",
        value: "2020-03-12"
      },
      {
        name: "EmployeeID",
        value: "4538963578493543"
      },
      {
        name: "EmployeeBranch",
        value: 57
      }
    ]
  },
  {
    key: "6",
    data: [
      {
        name: "EmployeeNumber",
        value: "cc309921"
      },
      {
        name: "EmployeeName",
        value: "Mark"
      },
      {
        name: "EmployeeSurname",
        value: "Holloway"
      },
      {
        name: "EmployeeLastLoggedIn",
        value: "2020-03-12"
      },
      {
        name: "EmployeeID",
        value: "345864839579843"
      },
      {
        name: "EmployeeBranch",
        value: 57
      }
    ]
  },
  {
    key: "7",
    data: [
      {
        name: "EmployeeNumber",
        value: "cc485647"
      },
      {
        name: "EmployeeName",
        value: "michael"
      },
      {
        name: "EmployeeSurname",
        value: "Jordan"
      },
      {
        name: "EmployeeLastLoggedIn",
        value: "2020-03-12"
      },
      {
        name: "EmployeeID",
        value: "3495867583464"
      },
      {
        name: "EmployeeBranch",
        value: 57
      }
    ]
  }
];

const Branches = [
  {
    key: 1,
    data: [
      {
        name: "BranchCode",
        value: "182"
      },
      {
        name: "BranchName",
        value: "Clearwater"
      },
      {
        name: "BranchCategory",
        value: "Branch"
      },
      {
        name: "ParentBranch",
        value: "Locale1"
      }
    ]
  },
  {
    key: 2,
    data: [
      {
        name: "BranchCode",
        value: "526"
      },
      {
        name: "BranchName",
        value: "cresta"
      },
      {
        name: "BranchCategory",
        value: "Credit card branch"
      },
      {
        name: "ParentBranch",
        value: "Locale1"
      }
    ]
  },
  {
    key: 3,
    data: [
      {
        name: "BranchCode",
        value: "55"
      },
      {
        name: "BranchName",
        value: "westgate"
      },
      {
        name: "BranchCategory",
        value: "Home loans branch"
      },
      {
        name: "ParentBranch",
        value: "Locale1"
      }
    ]
  },
  {
    key: 4,
    data: [
      {
        name: "BranchCode",
        value: "19"
      },
      {
        name: "BranchName",
        value: "key west"
      },
      {
        name: "BranchCategory",
        value: "Fraud branch"
      },
      {
        name: "ParentBranch",
        value: "Locale1"
      }
    ]
  }
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
  Employees,
  Branches,
  baseTree,
  TreeKids
};
