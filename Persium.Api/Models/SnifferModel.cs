using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirSniffer.Api.Models
{
    public class SnifferModel
    {
        public int ID { get; set; }
        public int clientID { get; set; }
        public string deviceID { get; set; }
        public double longitude { get; set; }
        public double latitude { get; set; }
        public DateTime installdate { get; set; }

        public string photo { get; set; }
    }
}
