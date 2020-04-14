import axios from "axios";

const baseTree = [
  { title: "Branch1", key: "1", isLeaf: false },
  { title: "Branch2", key: "2", isLeaf: false },
  { title: "Branch3", key: "3", isLeaf: false },
  { title: "Branch4", key: "4", isLeaf: false }
];

const TreeKids = [
  { title: "cc309921", Parent: "1", key: "cc309921", isLeaf: true },
  { title: "cc302066", Parent: "1", key: "cc302066", isLeaf: true },
  { title: "cc059873", Parent: "1", key: "cc059873", isLeaf: true },
  { title: "cc034568", Parent: "2", key: "cc034568", isLeaf: true },
  { title: "cc284564", Parent: "2", key: "cc284564", isLeaf: true },
  { title: "cc502365", Parent: "4", key: "cc502365", isLeaf: true },
  { title: "cc485647", Parent: "4", key: "cc485647", isLeaf: true }
];

const Employees = [
  {
    key: "cc309921",
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
    key: "cc302066",
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
    key: "cc059873",
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
    key: "cc034568",
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
    key: "cc284564",
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
    key: "cc502365",
    data: [
      {
        name: "EmployeeNumber",
        value: "cc502365"
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
    key: "cc485647",
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

export function GetTreeData() {
  //let obj = JSON.parse(test);
  return baseTree;
  const url = `https://localhost:5001/api/trees`;
  let obj = [];
  axios
    .get(url)
    .then(response => {
      console.log(response);
      response.data.map(Main => {
        obj.push({
          title: Main.data[0].value,
          key: Main.data[1].value,
          isLeaf: Main.data[2].value
        });
      });
      //return baseTree;
      return obj;
      //{ title: "Branch1", key: "1", isLeaf: false },
      // [{"key":"1","data":[{"key":"title","value":"Roodepoort"},{"key":"key","value":"1"},{"key":"isLeaf","value":"0"}]},{"key":"2","data":[{"key":"title","value":"Krugersdorp"},{"key":"key","value":"2"},{"key":"isLeaf","value":"0"}]},{"key":"4","data":[{"key":"title","value":"Fairlands"},{"key":"key","value":"4"},{"key":"isLeaf","value":"0"}]},{"key":"5","data":[{"key":"title","value":"Fourways"},{"key":"key","value":"5"},{"key":"isLeaf","value":"0"}]}]
    })
    .catch(error => {
      console.log(error);
    });

  //const result = obj.filter(x => x);
  //return baseTree;
}
export function GetTreeChildren(parentKey) {
  //debugger;
  return TreeKids.filter(x => x.Parent === parentKey);
}

export const getSpecificBranchByKey = key => {
  //TODO: make the actual call
  const url = `https://localhost:5001/api/tree?code=${key}&type=0`;
  let obj = [];
  let objDta = [];
  fetch(url, {
    method: "GET",
    headers: new Headers({
      Accept: "application/vnd.github.cloak-preview"
    })
  })
    .then(res => res.json())
    .then(response => {
      //console.log(response);
      response[0].map(Main => {
        objDta.push({
          name: Main.name,
          value: Main.value
        });
        // title: Main.data[0].value,
        // key: Main.data[1].value,
        // isLeaf: Main.data[2].value === "0" ? false : true
      });
      obj.push({ key: response[0].key, Data: objDta });
      return obj.length === 0
        ? [{ key: "5-9", data: [{ name: "", value: "" }] }]
        : obj;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getSpecificEmployeeByKey = param => {
  const results = Employees.filter(q => q.key == param);
  return results.length === 0
    ? [{ key: "5-9", data: [{ name: "", value: "" }] }]
    : results;
};
export const getSpecificEmployeeByData = (Name, value) => {
  const results = Employees.filter(q =>
    q.data.filter(x => x.name === Name && x.value === value)
  );
  return results.length === 0
    ? [{ key: "4-7", data: [{ name: "", value: "" }] }]
    : results;
};

export const PostData = (Type, isEdit, data) => {
  //push data to api

  return true;
};
