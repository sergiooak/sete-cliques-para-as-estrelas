<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-9 area-do-jogo">
          <header>
            <div class="desc">
              <p>Verbete atual: <strong>{{ jogo.verbeteAtual }}</strong> | <small>{{ jogo.linksVerbeteAtual.length }} links</small></p>
              <p>Cliques: {{ jogo.cliques }}</p>
            </div>
            <div class="historico">
              <span v-for="historico in jogo.historico" :key="historico">{{historico}}</span>
            </div>
            
          </header>
          <article>
            <iframe :src="url" frameborder="0" onLoad="console.log('atualizou')" ></iframe>
          </article>
        </div>
        <aside class="col-3">
          <header>
            <label class="final" for="filtroLinks">
              Filtrar
              <small>Digite um termo para filtrar os links</small>
              <input id="verbeteFinal" v-model="filtroLinks" type="text">
            </label>
          </header>
          <div class="links">
            <ul>
              <li
                v-for="link in jogo.linksVerbeteAtual"
                :key="link.title"
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
    flex-direction: column;
    justify-content: space-between;
    // background: red;
    min-height: 90px;
    margin: 20px 0px;

    .desc{
      display: flex;
      justify-content: space-between;
    }
  }
  article {
    position: relative;
    width: 100%;
    height: 675px;
    border: 2px solid #f78f00;

    iframe {
      width: 100%;
      height: 100%;
      overflow-x: hidden;      
    }
  }
}

aside {
  header {
    // background: red;
    min-height: 105px;
    margin: 20px 0px;
  }

  .links {
    ul {
      height: 660px;
      overflow-y: auto;
      list-style: none;
      padding: 0;

      li{
        padding: 10px;
        text-align: center;
        cursor: pointer;

        &:hover{
          background: rgba(#430475 , .9);
          color: #fff;
        }
      }
    }
    
  }
}

label{
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: #430475;
  text-transform: uppercase;

  small{
    font-size: 14px;
    color: #430475;
    text-transform: initial;
    margin-top: -5px;
    margin-bottom: 9px;
  }

  input{
    padding: 10px 20px;
    background: #fff;
    border: 3px solid #430475;
  }
}

</style>
