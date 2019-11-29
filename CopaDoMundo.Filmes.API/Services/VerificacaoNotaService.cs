using CopaDoMundo.Filmes.API.Contracts;
using CopaDoMundo.Filmes.API.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CopaDoMundo.Filmes.API.Services
{
    public class VerificacaoNotaService : IVerificacaoNotaService
    {
        public IEnumerable<Copafilmes> TopFilmes(IEnumerable<Copafilmes> copaFilmes)
        {
            var ganhadores = new List<Copafilmes>();
            var ordemCrescente = copaFilmes.OrderBy(p => p.Titulo).ToArray();
            var ordemDecrescente = copaFilmes.OrderByDescending(p => p.Titulo).ToArray();

            for (int i = 0; i < (copaFilmes.Count() / 2); i++)
            {
                if (ordemCrescente[i].Nota > ordemDecrescente[i].Nota)
                    ganhadores.Add(ordemCrescente[i]);
                else if (ordemDecrescente[i].Nota > ordemCrescente[i].Nota)
                    ganhadores.Add(ordemDecrescente[i]);
                else
                    ganhadores.Add(ordemCrescente[i]);
            }
            return ganhadores;
        }
    }
}
