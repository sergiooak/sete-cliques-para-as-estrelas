export const state = () => ({
  urlInicio: "",
  urlFim: "",
  paginaAtual: "",
  linksPaginaAtual: [],
  cliques: 0,
  historico: []
});

export const mutations = {
  incrementaClique(state) {
    state.cliques++;
  },
  atualizaInicio(state, urlInicio) {
    state.urlInicio = urlInicio;
  },
  atualizaAtual(state, paginaAtual) {
    state.paginaAtual = paginaAtual;
  },
  atualizaLinks(state, links) {
    state.linksPaginaAtual = links;
  },
  atualizaFim(state, urlFim) {
    state.urlFim = urlFim;
  },
  addHistorico(state, pagina) {
    state.historico.push(pagina);
  }
};

export const actions = {
  pegaLinks(context, titulo) {
    this.$axios
      .$get(`https://cors-anywhere.herokuapp.com/https://pt.wikipedia.org/w/api.php?action=query&titles=${titulo}&prop=links&format=json&pllimit=500`)
      .then(function(response) {
        let object = response.query.pages
        context.commit('atualizaLinks', object[Object.keys(object)[0]].links)
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  },
};
