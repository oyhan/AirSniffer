using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirSniffer.Api.Controllers
{
    [ApiController]
    [Route("[controller]/[action]/{id?}")]
    public class BaseController : Controller
    {
    }
}
