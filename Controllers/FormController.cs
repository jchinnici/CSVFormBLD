using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CSVFormBLDSite.Entities;
using Microsoft.AspNetCore.Mvc;

namespace CSVFormBLDSite.Controllers
{
    [Route("api/[controller]/[action]")]
    public class FormController : Controller
    {
        //[HttpGet("[action]")]
        //public IEnumerable<WeatherForecast> WeatherForecasts()
        //{
        //    var rng = new Random();
        //    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //    {
        //        DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
        //        TemperatureC = rng.Next(-20, 55),
        //        Summary = Summaries[rng.Next(Summaries.Length)]
        //    });
        //}

        [HttpPost]
        public IActionResult Submit([FromBody]Form form)
        {
            form.Id = Guid.NewGuid().ToString();
            Console.WriteLine(form);
            return Ok();
        }
    }
}
