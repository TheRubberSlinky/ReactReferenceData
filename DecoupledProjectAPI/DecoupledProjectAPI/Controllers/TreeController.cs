using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DecoupledProjectAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TreeController : ControllerBase
    {
        [HttpGet]
        public ActionResult GetTreeHeads(string code, int type)
        {
            string con = "Server=localhost;Database=React_DB;Trusted_Connection=True;";

            List<GenResponse> rspns = new List<GenResponse>();

            using (SqlConnection myConnection = new SqlConnection(con))
            {
                string oString = $"Select * from Branches where BranchCode = '{code}'";
                if (type == 1)
                    oString = $"select * from employees where nbno = '{code}'";
                SqlCommand oCmd = new SqlCommand(oString, myConnection);
                myConnection.Open();
                using (SqlDataReader oReader = oCmd.ExecuteReader())
                {
                    while (oReader.Read())
                    {
                        GenResponse rpsn = new GenResponse();
                        rpsn.Data = new List<GenResponseObj>();
                        rpsn.key = oReader[1].ToString();
                        for (int i = 0; i < oReader.FieldCount; i++)
                        {
                            var value = oReader[i];

                            rpsn.Data.Add(new GenResponseObj()
                            {
                                name = oReader.GetName(i),
                                value = oReader[i].ToString()
                            });
                        }
                        rspns.Add(rpsn);
                    }

                    myConnection.Close();
                }
            }
            return Ok(rspns.ToArray());
        }
        
        
    }

    public class GenResponse
    {
        public string key { get; set; }
        public List<GenResponseObj> Data { get; set; }
    }

    public class GenResponseObj
    {
        public string name;
        public object value;
    }
    public class ChildController : ControllerBase
    {
        [HttpGet]
        public ActionResult GetChildren(string key)
        {
            string con = "Server=localhost;Database=React_DB;Trusted_Connection=True;";

            List<GenResponse> rspns = new List<GenResponse>();

            using (SqlConnection myConnection = new SqlConnection(con))
            {
                string oString = $"select ID, BranchCode, BranchName, 0 'isLeaf' " +
                    $"from Branches where ParentBranch = "+ key +
                    $"union all " +
                    $"select ID, NBNo, CONCAT(Name, ' ', Surname), 1 'isLeaf' from employees where Branch = " + key;
                SqlCommand oCmd = new SqlCommand(oString, myConnection);
                myConnection.Open();
                using (SqlDataReader oReader = oCmd.ExecuteReader())
                {
                    while (oReader.Read())
                    {
                        GenResponse rpsn = new GenResponse();
                        rpsn.Data = new List<GenResponseObj>();
                        rpsn.key = oReader["BranchCode"].ToString();
                        for (int i = 0; i < oReader.FieldCount; i++)
                        {
                            var value = oReader[i];

                            rpsn.Data.Add(new GenResponseObj()
                            {
                                name = oReader.GetName(i),
                                value = oReader[i].ToString()
                            });
                        }
                        rspns.Add(rpsn);
                    }

                    myConnection.Close();
                }
            }
            return Ok(rspns.ToArray());
        }

    }


}