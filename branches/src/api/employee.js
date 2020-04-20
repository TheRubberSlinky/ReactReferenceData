const EmployeeURL = "https://localhost:44385/api/Employees";

export async function GetEmployee(EmployeeKey) {
  let url = `${EmployeeURL}/${EmployeeKey}`;
  let Employee = [];
  let response = await fetch(url, {
    method: "GET",
  });
  let json = await response.json();
  json.map((Main) => {
    Employee.push({
      empId: Main.id,
      empIsActive: Main.isActive,
      empBranchId: Main.Branch,
      empChannelId: Main.channel.id,
      empEmail: Main.empEmail,
      empFirstName: Main.firstName,
      empLastName: Main.lastName,
      empBankerRoleId: Main.bankerRole.id,
      empStaffNo: Main.staffNo,
    });
  });
  return Employee;
}

export async function UpdateEmployee(EmployeeKey, EmployeeData) {
  const body = [
    {
      id: EmployeeData.id,
      isActive: EmployeeData.isActive,
      branchId: EmployeeData.branchId,
      channelId: EmployeeData.channelId,
      email: EmployeeData.email,
      firstName: EmployeeData.firstName,
      lastName: EmployeeData.lastName,
      bankerRoleId: EmployeeData.bankerRoleId,
      staffNo: EmployeeData.staffNo,
    },
  ];
  if (EmployeeKey) {
    const url = `${EmployeeURL}/${EmployeeKey}`;
    //create a body to put the info in
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(body),
    });
    const json = await response.json();
    if (json) return true;
    return false;
  } else {
    const url = `${EmployeeURL}`;
    //create a body to put the info in
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
    });
    const json = await response.json();
    if (json) return true;
    return false;
  }
}
