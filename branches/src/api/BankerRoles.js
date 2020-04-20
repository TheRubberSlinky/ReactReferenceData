const RolesURL = "https://localhost:44385/api/BankerRoles";

export async function GetRoles() {
  const url = `${RolesURL}`;
  let obj = [];
  const response = await fetch(url, {
    method: "GET",
  });
  const json = await response.json();
  json.map((Main) => {
    obj.push({
      id: Main.id,
      name: Main.name,
      isSaleRole: Main.isSaleRole ? "true" : "false",
      oldCode: Main.oldCode,
    });
  });
  return obj;
}
