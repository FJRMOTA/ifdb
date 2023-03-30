<template>
  <div>
    <div id="nav">
      <router-link id="logo-url" to="/">
        <img id="logo" :src="logo" :alt="alt">
      </router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/avaliacoes">Avaliações</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Navbar",
  props: ["logo", "alt"]
}
</script>

<style scoped>
  #nav {
    background-color: #121212;
    border-bottom: 4px solid #111;
    padding: 8px 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  #nav #logo-url {
    margin: auto;
    margin-left: 0;
  }

  #logo {
   width: 64px;
   height: 32px;
   position: relative;
  }

  #nav a {
    color: #FFFFFF;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
    font-family: Roboto, Helvetica, Arial, sans-serifs;
    font-size: 14px;
  }

  #nav a:hover {
    height: 20px;  
  }
</style>