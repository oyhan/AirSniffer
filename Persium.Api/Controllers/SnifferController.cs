using Microsoft.AspNetCore.Mvc;
using AirSniffer.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirSniffer.Api.Controllers
{
    public class SnifferController : BaseController
    {
        private readonly AppDbContext context;

        public SnifferController(AppDbContext context)
        {
            this.context = context;
        }

        public ActionResult List()
        {

            var sniffers = context.GetAllSniffers();

            return Ok(sniffers);

        }

    }
}
