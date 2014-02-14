using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace MvcApplication1.Controllers
{
    public class ValuesController : ApiController
    {
        public async Task<string> GetValuesAsync()
        {
            string s = "abcsas";

            return s;
        }
    }
}
