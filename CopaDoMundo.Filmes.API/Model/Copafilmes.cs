using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CopaDoMundo.Filmes.API.Model
{
    public class Copafilmes
    {
        public string Id { get; set; }

        public string Titulo { get; set; }

        public long Ano { get; set; }

        public double Nota { get; set; }
    }
}
