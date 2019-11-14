using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CopaDoMundo.Filmes.API.Contracts;
using CopaDoMundo.Filmes.API.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CopaDoMundo.Filmes.API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CopaFilmesController : ControllerBase
    {

        private readonly ILogger<CopaFilmesController> _logger;
        private readonly IFilmesData _filmesData;
        public CopaFilmesController(ILogger<CopaFilmesController> logger, IFilmesData filmesData)
        {
            _logger = logger;
            _filmesData = filmesData;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Filme>> BuscaCopaFilmes()
        {
            try
            {
                return Ok(_filmesData.BuscarFilmes());
            }
            catch (Exception ex)
            {
                _logger.LogError("BuscaCopaFilmes", ex);
                return StatusCode(500);
            }   
          
        }
    }
}
