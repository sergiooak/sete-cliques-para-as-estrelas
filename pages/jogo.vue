<template>
  <div class="h-screen flex flex-col items-center justify-start pb-16">
    <div class="w-full px-6 pt-8 pb-4 flex justify-between items-center">
      <div class="flex items-center">
        cliques
        <h2 class="text-xl font-bold ml-2">{{ cliques }}</h2>
      </div>
      <div @click="mostraHistorico">ver histórico atual</div>
    </div>
    <div class="border-t-2 border-purple-600 w-full px-6 py-4 flex justify-between items-center">
      <label class="flex flex-col text-purple-700 font-bold" for>
        Pesquisar
        <small class="text-purple-400">Filtre e clique no link</small>
        <input v-model="filtro" class="p-4 mt-2 border-4 border-purple-300" type="text" />
      </label>
    </div>
    <div class="border-t-2 border-purple-600 w-full px-6 pt-4 flex justify-between items-center">
      <ul>
        <li v-for="link in links" @click="mudaPagina(link.title)">
            {{ link.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      filtro: []
    };
  },
  computed: {
    cliques() {
      return this.$store.state.cliques;
    },
    paginaAtual() {
      return this.$store.state.paginaAtual;
    },
    links() {
      return this.$store.state.linksPaginaAtual;
    },
    historico() {
      return this.$store.state.historico;
    }
  },
  methods: {
    mostraHistorico() {
      alert(this.historico);
    },
    mudaPagina(titulo) {
      this.$store.commit('addHistorico', titulo);
      this.$store.commit('atualizaAtual', titulo);
      this.$store.commit('incrementaClique');
      this.$store.dispatch('pegaLinks', titulo);    
    }
  },
  mounted: function() {
    this.$store.dispatch('pegaLinks', this.paginaAtual)
  }
};
</script>

<style>
</style>
