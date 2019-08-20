<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-9 area-do-jogo">
          <header>
            <p>Verbete atual: {{ jogo.verbeteAtual }}</p>
            <p>Cliques: {{ jogo.cliques }}</p>
            <p>Tempo: {{ jogo.tempo }}</p>
            <p>Historico: {{ jogo.historico }}</p>
          </header>
          <article>
            <iframe :src="url" frameborder="0" onLoad="console.log('atualizou')" ></iframe>
          </article>
        </div>
        <aside class="col-3">
          <header>
            <p>Links no verbete atual:</p>
          </header>
          <div class="links">
            <div>
              <p>Links no verbete atual: {{ jogo.linksVerbeteAtual.length }}</p>
            </div>
            <ul>
              <li
                v-for="link in jogo.linksVerbeteAtual"
                @click="atualizaJogo(link.title)"
              >{{ link.title }}</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data: function() {
    return {
      filtro: []
    };
  },
  computed: {
    jogo() {
      return this.$store.state;
    },
    url() {
      if (this.jogo.verbeteAtual) {
        return `https://pt.wikipedia.org/wiki/${this.jogo.verbeteAtual}`;
      } else {
        return `https://pt.wikipedia.org/`;
      }
    }
  },
  methods: {
    atualizaJogo(titulo) {
      this.$store.dispatch('atualizaJogo', titulo)
    },
  },
  mounted: function() {
  }
};
</script>

<style lang="scss" scoped>
main {
  .container {
    .row {
      min-height: calc(100vh - 226px);
    }
  }
}

.area-do-jogo {
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    // background: red;
    height: 90px;
    margin: 20px 0px;
  }
  article {
    width: 100%;
    height: 550px;
    border: 2px solid #f78f00;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
}

aside {
  header {
    // background: red;
    height: 90px;
    margin: 20px 0px;
  }

  .links {
    height: 550px;
    div {
      height: 40px;
    }

    ul {
      height: 510px;
      overflow-y: auto;
    }
  }
}
</style>
