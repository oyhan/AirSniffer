using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirSniffer.Api.Models
{
    public class GasSensorModel
    {
        public int recno { get; set; }
        public string sensorID { get; set; }
        public string  deviceID { get; set; }
        public double sensitivity { get; set; }
        public int location { get; set; }
        public string type { get; set; }

        public double R1 { get; set; }
        public double R2 { get; set; }

    }



}

