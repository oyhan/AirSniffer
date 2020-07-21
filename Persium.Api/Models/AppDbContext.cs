using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AirSniffer.Api.Models
{
    public class AppDbContext
    {
        public string ConnectionString { get; set; }

        public AppDbContext(string connectionString)
        {
            this.ConnectionString = connectionString;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnectionString);
        }


        public List<DataModel> GetAllSniffers()
        {
            List<DataModel> list = new List<DataModel>();

            using (MySqlConnection conn = GetConnection())
            {
                conn.Open();
                MySqlCommand cmd = new MySqlCommand("SELECT * FROM SnifferBot.data   group by deviceID order by dataTimeRcvd desc", conn);

                using (var reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        list.Add(new DataModel()
                        {
                            ID = Convert.ToInt32(reader[nameof(DataModel.ID)]),
                            deviceID = reader[nameof(DataModel.deviceID)].ToString(),
                            latitude = Convert.ToDouble(reader[nameof(DataModel.latitude)]),
                            longitude = Convert.ToDouble(reader[nameof(DataModel.longitude)]),
                            //dateTime = (DateTime)reader[nameof(DataModel.dateTime)],
                            //dateTimeRcvd = (DateTime)reader[nameof(DataModel.dateTimeRcvd)],
                            Temperature = Convert.ToDouble(reader[nameof(DataModel.longitude)]),
                            Pressure = Convert.ToDouble(reader[nameof(DataModel.Pressure)]),
                            Humidity = Convert.ToDouble(reader[nameof(DataModel.Humidity)]),
                            speed = Convert.ToDouble(reader[nameof(DataModel.speed)]),
                            Vref = Convert.ToDouble(reader[nameof(DataModel.Vref)]),
                            chipTemp= Convert.ToDouble(reader[nameof(DataModel.chipTemp)]),
                            Battery = Convert.ToInt32(reader[nameof(DataModel.chipTemp)]),
                            satsInView = Convert.ToInt32(reader[nameof(DataModel.satsInView)]),
                            satsLocked = Convert.ToInt32(reader[nameof(DataModel.satsLocked)]),
                            course = Convert.ToDouble(reader[nameof(DataModel.course)]),
                            windu = Convert.ToDouble(reader[nameof(DataModel.windu)]),
                            windv = Convert.ToDouble(reader[nameof(DataModel.windv)]),
                            windw = Convert.ToDouble(reader[nameof(DataModel.windw)]),
                            heading = Convert.ToDouble(reader[nameof(DataModel.heading)]),
                            pitch = Convert.ToDouble(reader[nameof(DataModel.pitch)]),
                            roll = Convert.ToDouble(reader[nameof(DataModel.roll)]),
                            //status = Convert.ToBoolean(reader[nameof(DataModel.status)]),
                            GPSAlt = Convert.ToDouble(reader[nameof(DataModel.GPSAlt)]),
                            RSSI = Convert.ToInt32(reader[nameof(DataModel.RSSI)]),
                            S1 = Convert.ToDouble(reader[nameof(DataModel.S1)]),
                            S2 = Convert.ToDouble(reader[nameof(DataModel.S2)]),
                            S3 = Convert.ToDouble(reader[nameof(DataModel.S3)]),
                            S5 = Convert.ToDouble(reader[nameof(DataModel.S5)]),
                            S4 = Convert.ToDouble(reader[nameof(DataModel.S4)]),
                            S6 = Convert.ToDouble(reader[nameof(DataModel.S6)]),
                            S7 = Convert.ToDouble(reader[nameof(DataModel.S7)]),
                            S8= Convert.ToDouble(reader[nameof(DataModel.S8)]),
                            S9= Convert.ToDouble(reader[nameof(DataModel.S9)]),
                            S10= Convert.ToDouble(reader[nameof(DataModel.S10)]),
                            S11= Convert.ToDouble(reader[nameof(DataModel.S11)]),
                            S12= Convert.ToDouble(reader[nameof(DataModel.S12)]),
                            


                        });
                    }
                }
            }
            return list;
        }



        public class DataModel
        {
            public int ID { get; set; }
            public string deviceID { get; set; }
            public double latitude { get; set; }
            public double longitude { get; set; }
            public DateTime dateTime { get; set; }
            public DateTime dateTimeRcvd { get; set; }
            public double Temperature { get; set; }
            public double Pressure { get; set; }
            public double Humidity  { get; set; }
            public double speed { get; set; }
            public double course { get; set; }
            public double windu { get; set; }
            public double windv { get; set; }
            public double windw { get; set; }
            public double heading { get; set; }
            public double pitch  { get; set; }
            public double roll { get; set; }
            public int satsInView { get; set; }
            public int satsLocked { get; set; }

            public bool status { get; set; }    
            public double Vref { get; set; }
            public double chipTemp { get; set; }
            public int Battery { get; set; }
            public double GPSAlt { get; set; }
            public int RSSI { get; set; }
            public double S1 { get; set; }
            public double S2 { get; set; }
            public double S3 { get; set; }
            public double S4 { get; set; }
            public double S5 { get; set; }
            public double S6 { get; set; }
            public double S7 { get; set; }
            public double S8 { get; set; }
            public double S9 { get; set; }
            public double S10 { get; set; }
            public double S11 { get; set; }
            public double S12 { get; set; }
        }
    }

    
}
