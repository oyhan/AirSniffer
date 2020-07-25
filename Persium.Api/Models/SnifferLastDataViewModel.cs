using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirSniffer.Api.Models
{
    public class SnifferLastDataViewModel
    {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public double Temperature { get; set; }
        public double  Pressure{ get; set; }
        public double Humidity { get; set; }
        public SensorViewModel S1 { get; set; }
        public SensorViewModel S2 { get; set; }
        public SensorViewModel S3 { get; set; }
        public SensorViewModel S4 { get; set; }
        public SensorViewModel S5 { get; set; }
        public SensorViewModel S6 { get; set; }
        public SensorViewModel S7 { get; set; }
        public SensorViewModel S8 { get; set; }
        public SensorViewModel S9 { get; set; }
        public SensorViewModel S10 { get; set; }
        public SensorViewModel S11 { get; set; }
        public SensorViewModel S12 { get; set; }
        public double HorizontalWind { get; set; }
        public double WindDirection { get; set; }

    }


    public class SensorViewModel
    {
        public string Type { get; set; }
        public string Ppm { get; set; }
        public string CubicMetter { get; set; }
    }
}
