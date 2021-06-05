using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace scrabble.Pages
{
    public class GamesModel : PageModel
    {
        private readonly ILogger<GamesModel> _logger;

        public GamesModel(ILogger<GamesModel> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }

        async public void OnPostAsync(int teams)
        {
            Console.WriteLine("Makes it to here");
            using var httpClient = new HttpClient();
            var result = await httpClient.PostAsync(
                $"{Request.Scheme}://{Request.Host}/rest/games",
                new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("teams", teams.ToString()),
                }));
            var responseData = JObject.Parse(await result.Content.ReadAsStringAsync());
            var gameId = responseData["id"];
        }
    }
}
