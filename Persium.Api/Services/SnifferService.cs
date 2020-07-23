using AirSniffer.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AirSniffer.Api.Models.AppDbContext;

namespace AirSniffer.Api.Services
{
    public class SnifferService
    {
        public double CalculateGasPpm(GasSensorModel sensore , double voltage)
        {

            var amplificationFactor = sensore.R2 / sensore.R1;
            var current = voltage / amplificationFactor;
            var result = current / sensore.sensitivity;
            return result;
        }

        internal double CaclulateWindDirction(DataModel s)
        {
            var wh = CalculateHorizontalWind(s);
            var direction = Math.Atan2(-(s.windv / wh), -(s.windu / wh));
            direction = direction * 180 / Math.PI;

            return direction < 0 ? direction + 360 : direction;
        }

        internal double CalculateHorizontalWind(DataModel s)
        {
            return Math.Sqrt(Math.Pow(s.windu, 2) + Math.Pow(s.windv, 2));

        }
    }
}
