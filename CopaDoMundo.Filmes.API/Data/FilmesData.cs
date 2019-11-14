using CopaDoMundo.Filmes.API.Contracts;
using CopaDoMundo.Filmes.API.Model;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace CopaDoMundo.Filmes.API.Data
{
    public class FilmesData : IFilmesData
    {
        public readonly IConfiguration Configuration;
        public FilmesData(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public List<Filme> BuscarFilmes()
        {
            HttpClient client = new HttpClient();
            var result = client.GetStringAsync(Configuration.GetSection("CopaFilmesApi").Value).Result;
            return JsonConvert.DeserializeObject<List<Filme>>(result);
        }
    }
}
