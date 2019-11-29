using CopaDoMundo.Filmes.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CopaDoMundo.Filmes.API.Contracts
{
    public interface ICopaFilmeService
    {
        IEnumerable<Copafilmes> Disputa(IEnumerable<Copafilmes> copaFilmes);
    }
}
