<template>
  <div>
    <Filmes />
  </div>
</template>

<script>
import Filmes from '../components/Filmes'

export default {
  name: 'Home',
  components: {
    Filmes,
  }
}
</script>

<style scoped>
  div{
    background-color: #000000;
  }
</style>