<template>
  <div>
    <header class="mainHeader">
      <div class="container">
        <nuxt-link to="/">7 cliques para as estrelas</nuxt-link>
      </div>      
    </header>
    <nuxt />
    <footer class="creditFooter">
      <div class="container">
        sergiooak.dev © 2019
      </div>      
    </footer>
  </div>
</template>

<style lang="scss">
body{
  background: #F7FAFC;
  font-family: 'Oswald', sans-serif;
}

.mainHeader{
  background: #430475;
  height: 80px;

  .container{
    height: 100%;
    display: flex;
    align-items: center;

    a{
      color: #fff;
      text-transform: uppercase;
      font-size: 20px;
    }
  }
}

.creditFooter{
  .container{
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    justify-content: center;
    border-top: 2px solid #F78F00;
    color: #430475;
    text-transform: uppercase;
  }
  
}

.btn{
  color: #430475;
  border: 3px solid #430475;
  border-radius: 0;
  background: rgba(#430475 , 0);
  font-family: Oswald;
  font-size: 28px;
  text-align: center;
  text-transform: uppercase;


  &:hover{
    color: #fff;
    background: rgba(#430475 , 1);
  }
}
  
</style>
