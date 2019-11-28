using CopaDoMundo.Filmes.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CopaDoMundo.Filmes.API.Contracts
{
    public interface IFilmesData
    {
        List<Copafilmes> BuscarFilmes();
    }
}
