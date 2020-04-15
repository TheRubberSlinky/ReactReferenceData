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
    public class TreesController : ControllerBase
    {
        // GET: api/Trees
        [HttpGet]
        public ActionResult Get()
        {
            string con = "Server=localhost;Database=React_DB;Trusted_Connection=True;";

            List<GenResponse> rspns = new List<GenResponse>();

            using (SqlConnection myConnection = new SqlConnection(con))
            {
                string oString = "Select BranchName 'title', BranchCode 'key', 0 'isLeaf' from Branches where ParentBranch is null";
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

        // GET: api/Trees/5
        [HttpGet("{key}", Name = "Get")]
        public ActionResult Get(string key)
        {
            string con = "Server=localhost;Database=React_DB;Trusted_Connection=True;";

            List<GenResponse> rspns = new List<GenResponse>();

            using (SqlConnection myConnection = new SqlConnection(con))
            {
                try
                {
                    string oString = $"select ID,  cast(BranchCode as varchar(50)) 'code', BranchName 'name', 0 'isLeaf' from Branches where ParentBranch = " + key +
                        $" union all " +
                        $"select ID, NBNo 'code', CONCAT(Name, ' ', Surname) 'name', 1 'isLeaf' from employees where Branch = " + key;
                    
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
                catch
                {
                    return new BadRequestResult();
                }
            }
            return Ok(rspns.ToArray());
        }


        // POST: api/Trees
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        // PUT: api/Trees/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
