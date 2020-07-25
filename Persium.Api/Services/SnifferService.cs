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
        private readonly AppDbContext context;

        public SnifferService(AppDbContext context)
        {
            this.context = context;
        }
        public string CalculateGasPpm(GasSensorModel sensore , double voltage)
        {

            var amplificationFactor = sensore.R2 / sensore.R1;
            var preVoltage = voltage / amplificationFactor;
            var current = preVoltage / sensore.R1  ;
            var result = current / (sensore.sensitivity/ 1e9);
            return result.ToString("0.00");
        }
        public double CalculateGasPpmDouble(GasSensorModel sensore, double voltage)
        {

            var amplificationFactor = sensore.R2 / sensore.R1;
            var preVoltage = voltage / amplificationFactor;
            var current = preVoltage / sensore.R1;
            var result = current / (sensore.sensitivity / 1e9);
            return result;
        }
        internal double CaclulateWindDirction(DataModel s)
        {
            var wh = CalculateHorizontalWind(s);
            var direction = Math.Atan2(-(s.windv / wh), -(s.windu / wh));
            direction = Math.Round(direction * 180 / Math.PI,2);

            return direction < 0 ? direction + 360 : direction;
        }

        internal double CalculateHorizontalWind(DataModel s)
        {
            return Math.Round(Math.Sqrt(Math.Pow(s.windu, 2) + Math.Pow(s.windv, 2)),2);

        }

        internal string CalculateCubicMeter(GasSensorModel sensorModel, double voltage)
        {
            var chemistryInfo = context.GasChemistries().FirstOrDefault(c => c.chemformula == sensorModel.type);
            if (chemistryInfo==null)
            {
                throw new Exception($"No chemistry data record found for {sensorModel.type}");
            }
            return (CalculateGasPpmDouble(sensorModel, voltage) * 0.0409 * chemistryInfo.moleweight).ToString("0.00");
            

        }
    }
}
