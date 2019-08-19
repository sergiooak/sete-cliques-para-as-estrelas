<template>
  <div class="h-screen flex items-start justify-center pb-16">
    <div class="w-full px-4 pt-8">
      <label class="flex flex-col text-purple-700 font-bold" for>
        Verbete inicial
        <small class="text-purple-400">Título do verbete, ex: "Nélson Gonçalves"</small>
        <input v-model="urlInicio" class="p-4 mt-2 border-4 border-purple-300" type="text" />
      </label>
      <label class="flex flex-col text-purple-700 font-bold mt-8" for>
        Título do verbete, ex: "Balaústre"
        <small
          class="text-purple-400"
        >Título do verbete, ex: "Balaústre"</small>
        <input v-model="urlFim" class="p-4 mt-2 border-4 border-purple-300" type="text" />
      </label>
      <a
        @click.prevent="iniciaJogo"
        class="mt-16 bg-purple-600 border-4 border-purple-800 text-center text-white font-bold p-4 uppercase block"
      >começar</a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      urlInicio: "Nélson Gonçalves",
      urlFim: "Balaústre"
    };
  },
  methods: {
    iniciaJogo() {
      this.$store.commit('atualizaInicio', this.urlInicio);
      this.$store.commit('addHistorico', this.urlInicio);
      this.$store.commit('atualizaAtual', this.urlInicio);
      this.$store.commit('atualizaFim', this.urlFim);
      this.$router.push({ path: '/jogo'});
    }
  }
};
</script>

<style>
</style>
