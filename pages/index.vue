<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <h2>Vamos começar um novo jogo?</h2>
          <nuxt-link to="/criar" class="btn d-block">Criar novo jogo</nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
main {
  min-height: calc(100vh - 226px);
  display: flex;
  align-items: center;
}
h2 {
  font-size: 56px;
  text-align: center;
  color: #f78f00;
  text-transform: uppercase;
  margin-bottom: 60px;
}

</style>
