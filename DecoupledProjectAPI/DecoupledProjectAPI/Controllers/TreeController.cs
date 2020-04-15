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
        //[HttpGet]
        [HttpGet("{key}", Name = "SearchValue")]
        public ActionResult Get(string key)
        {
            string con = "Server=localhost;Database=React_DB;Trusted_Connection=True;";

            List<GenResponse> rspns = new List<GenResponse>();

            using (SqlConnection myConnection = new SqlConnection(con))
            {
                string oString = $"select ID,  cast(BranchCode as varchar(50)) 'code', BranchName 'name', 0 'isLeaf' from Branches where BranchName like '%" + key + "%'";
                SqlCommand oCmd = new SqlCommand(oString, myConnection);
                myConnection.Open();
                using (SqlDataReader oReader = oCmd.ExecuteReader())
                {
                    while (oReader.Read())
                    {
                        GenResponse rpsn = new GenResponse();
                        rpsn.Data = new List<GenResponseObj>();
                        rpsn.key = oReader["code"].ToString();
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