using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirSniffer.Api.Models
{
    public class GasChemistryModel
    {
        public int recno { get; set; }
        public string name { get; set; }
        public string chemformula { get; set; }
        public double moleweight { get; set; }
    }
}
