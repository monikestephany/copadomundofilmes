using CopaDoMundo.Filmes.API.Contracts;
using CopaDoMundo.Filmes.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CopaDoMundo.Filmes.API.Services
{
    public class CopaFilmeService : ICopaFilmeService
    {
        private readonly IVerificacaoNotaService verificacaoNotaService;

        public CopaFilmeService(IVerificacaoNotaService verificacaoNotaService)
        {
            this.verificacaoNotaService = verificacaoNotaService;
        }

        public IEnumerable<Copafilmes> Disputa(IEnumerable<Copafilmes> copaFilmes)
        {
            var eliminatoria = verificacaoNotaService.TopFilmes(copaFilmes);
            var final = verificacaoNotaService.TopFilmes(eliminatoria);
            return final.OrderByDescending(p => p.Nota);
        }
    }
}
