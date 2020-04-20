const BranchURL = "https://localhost:44385/api/Branches";

export async function GetBranch(BranchKey) {
  let url = `${BranchURL}${BranchKey}`;
  let Branch = [];
  let response = await fetch(url, {
    method: "GET",
  });
  let json = await response.json();
  json.map((Main) => {
    Branch.push({
      Id: Main.id,
      BranchCode: Main.branchCode,
      BranchName: Main.branchName,
      BranchCategoryId: Main.branchCategory.id,
      ChannelId: Main.channel.id,
      CanReceiveSale: Main.CanReceiveSale,
      ParentBranchId: Main.Branch, //or null
      RegionId: Main.region.id, //or null
      IsActive: Main.isActive,
      IsPostBox: Main.isPostBox,
      OldCode: Main.oldCode, //or null
    });
  });
  return Branch;
}

export async function UpdateBranch(BranchKey, BranchData) {
  const url = `${BranchURL}${BranchKey}`;
  //create a body to put the info in
  const response = await fetch(url, {
    method: "PUT",
    body: JSON.stringify(BranchData),
  });
  const json = await response.json();
  if (json) return true;
  return false;
}
