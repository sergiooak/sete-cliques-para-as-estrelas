export const state = () => ({
  verbeteInicial: "",
  verbeteFinal: "",
  verbeteAtual: "",
  linksVerbeteAtual: [],
  cliques: 0,
  tempo: "",
  historico: []
});

export const mutations = {
  atualizaVerbeteInicial(state, verbeteInicial) {
    state.verbeteInicial = verbeteInicial;
  },
  atualizaVerbeteFinal(state, verbeteFinal) {
    state.verbeteFinal = verbeteFinal;
  },
  atualizaVerbeteAtual(state, verbeteAtual) {
    state.verbeteAtual = verbeteAtual;
  },
  atualizaLinksVerbeteAtual(state, linksVerbeteAtual) {
    state.linksVerbeteAtual = linksVerbeteAtual;
  },
  resetaVerbeteAtual(state) {
    state.verbeteAtual = "";
    state.linksVerbeteAtual = [];
  },
  incrementaCliques(state) {
    state.cliques++;
  },
  resetaCliques(state) {
    state.cliques = 0;
  },
  resetaTempo(state) {
    state.tempo = Date.now();
  },
  addHistorico(state, pagina) {
    state.historico.push(pagina);
  },
  resetaHistorico(state) {
    state.historico = [];
  }
};

export const actions = {
  pegaLinks(context, titulo) {
    this.$axios
      .$get(
        `https://cors-anywhere.herokuapp.com/https://pt.wikipedia.org/w/api.php?action=query&titles=${titulo}&prop=links&format=json&pllimit=500`
      )
      .then(function(response) {
        let object = response.query.pages;
        context.commit(
          "atualizaLinksVerbeteAtual",
          object[Object.keys(object)[0]].links
        );
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  },
  iniciaJogo(context, payload) {
    context.commit("atualizaVerbeteInicial", payload.verbeteInicial);
    context.commit("atualizaVerbeteFinal", payload.verbeteFinal);
    context.commit("atualizaVerbeteAtual", payload.verbeteInicial);
    context.commit("resetaCliques");
    context.commit("resetaTempo");
    context.commit("resetaHistorico");

    context.dispatch("pegaLinks", payload.verbeteInicial);

    this.$router.push({ path: "/jogo" });
  },
  atualizaJogo(context, titulo) {
    context.commit("atualizaVerbeteAtual", titulo);
    context.dispatch("pegaLinks", titulo);
  }
};
