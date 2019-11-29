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
    [Route("api/[controller]")]
    public class CopaFilmesController : ControllerBase
    {

        private readonly ILogger<CopaFilmesController> _logger;
        private readonly IFilmesData _filmesData;
        private readonly ICopaFilmeService _copaFilmeService;
        public CopaFilmesController(ILogger<CopaFilmesController> logger, IFilmesData filmesData, ICopaFilmeService copaFilmeService)
        {
            _logger = logger;
            _filmesData = filmesData;
            _copaFilmeService = copaFilmeService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Copafilmes>> BuscaCopaFilmes()
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
        [HttpPost]
        public ActionResult<IEnumerable<Copafilmes>> CopaFilmes(IEnumerable<Copafilmes> copafilmes)
        {
            try
            {
                return Ok(_copaFilmeService.Disputa(copafilmes));
            }
            catch (Exception ex)
            {
                _logger.LogError("BuscaCopaFilmes", ex);
                return StatusCode(500);
            }

        }
    }
}
