using Microsoft.AspNetCore.Mvc;
using AirSniffer.Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static AirSniffer.Api.Models.AppDbContext;
using AirSniffer.Api.Services;

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
            var snifferService = new SnifferService();
            var sniffers = context.GetAllSniffers();
            var respone = sniffers.Select(s =>
            {

                var sensorList = new List<SensorViewModel>();
                var s1 = context.GetSensor(s.deviceID, 1);
                var s2 = context.GetSensor(s.deviceID, 2);
                var s3 = context.GetSensor(s.deviceID, 3);
                var s4 = context.GetSensor(s.deviceID, 4);
                var s5 = context.GetSensor(s.deviceID, 5);
                var s6 = context.GetSensor(s.deviceID, 6);
                var s7 = context.GetSensor(s.deviceID, 7);
                var s8 = context.GetSensor(s.deviceID, 8);
                var s9 = context.GetSensor(s.deviceID, 9);
                var s10 = context.GetSensor(s.deviceID, 10);
                var s11 = context.GetSensor(s.deviceID, 11);
                var s12 = context.GetSensor(s.deviceID, 12);




                var snifferVm = new SnifferLastDataViewModel()
                {
                    Humidity = s.Humidity,
                    Pressure = s.Pressure,
                    Temperature = s.Temperature,
                    S1 = s1 != null ? new SensorViewModel() { Type = s1?.type, Ppm = snifferService.CalculateGasPpm(s1, s.S1) } : null,
                    S2 = s2 != null ? new SensorViewModel() { Type = s2.type, Ppm = snifferService.CalculateGasPpm(s2, s.S2) } : null,
                    S3 = s3 != null ? new SensorViewModel() { Type = s3.type, Ppm = snifferService.CalculateGasPpm(s3, s.S3) } : null,
                    S4 = s4 != null ? new SensorViewModel() { Type = s4.type, Ppm = snifferService.CalculateGasPpm(s4, s.S4) } : null,
                    S5 = s5 != null ? new SensorViewModel() { Type = s5.type, Ppm = snifferService.CalculateGasPpm(s5, s.S5) } : null,
                    S6 = s6 != null ? new SensorViewModel() { Type = s6.type, Ppm = snifferService.CalculateGasPpm(s6, s.S6) } : null,
                    S7 = s7 != null ? new SensorViewModel() { Type = s7.type, Ppm = snifferService.CalculateGasPpm(s7, s.S7) } : null,
                    S8 = s8 != null ? new SensorViewModel() { Type = s8.type, Ppm = snifferService.CalculateGasPpm(s8, s.S8) } : null,
                    S9 = s9 != null ? new SensorViewModel() { Type = s9.type, Ppm = snifferService.CalculateGasPpm(s9, s.S9) } : null,
                    S10 = s10 != null ? new SensorViewModel() { Type = s10.type, Ppm = snifferService.CalculateGasPpm(s10, s.S10) } : null,
                    S11 = s11 != null ? new SensorViewModel() { Type = s11.type, Ppm = snifferService.CalculateGasPpm(s11, s.S11) } : null,
                    S12 = s12 != null ? new SensorViewModel() { Type = s12.type, Ppm = snifferService.CalculateGasPpm(s12, s.S12) } : null,
                    HorizontalWind = snifferService.CalculateHorizontalWind(s),
                    Latitude = s.latitude,
                    Longitude = s.longitude,
                    WindDirection = snifferService.CaclulateWindDirction(s)



                };

                return snifferVm;
            });

            return Ok(respone);

        }

    }
}
