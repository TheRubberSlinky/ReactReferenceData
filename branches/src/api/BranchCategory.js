const BranchCategoryURL = "https://localhost:44385/api/BranchCategories";

export async function GetBranchCategory() {
  let url = `${BranchCategoryURL}`;
  let BranchCategory = [];
  let response = await fetch(url, {
    method: "GET",
  });
  let json = await response.json();
  json.map((Main) => {
    BranchCategory.push({
      id: Main.id,
      name: Main.name,
      isActive: Main.isActive ? "yes" : "no",
      isOutletBranch: Main.isOutletBranch ? "yes" : "no",
    });
  });
  return BranchCategory;
}
