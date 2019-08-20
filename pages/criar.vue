<template>
  <main>
    <div class="container">
      <form v-on:submit.prevent="iniciaJogo" class="col-8 mx-auto">
        <label for="verbeteInicial">
          Verbete inicial
          <small>ex: "Nélson Gonçalves"</small>
          <input id="verbeteInicial" v-model="verbeteInicial" type="text">
        </label>
        <label class="final" for="verbeteFinal">
          Verbete final
          <small>ex: "Balaústre"</small>
          <input id="verbeteFinal" v-model="verbeteFinal" type="text">
        </label>

        <input class="btn" type="submit" value="Começar">
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data: function() {
    return {
      verbeteInicial: "Nélson Gonçalves",
      verbeteFinal: "Balaústre"
    };
  },
  methods: {
    iniciaJogo() {
      let verbeteInicial = this.verbeteInicial;
      let verbeteFinal = this.verbeteFinal;
      
      this.$store.dispatch('iniciaJogo', {verbeteInicial, verbeteFinal})
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  min-height: calc(100vh - 226px);
  display: flex;
  align-items: center;
}

form{
  display: flex;
  flex-direction: column;

  .final{
    margin-top: 60px;
    margin-bottom: 80px;
  }

  label{
  display: flex;
  flex-direction: column;
  color: #F78F00;
  font-size: 28px;
  text-transform: uppercase;

  small{
    color: #430475;
    margin-bottom: 20px;
  }

  input{
    padding: 10px 20px;
  }
}


}
</style>
