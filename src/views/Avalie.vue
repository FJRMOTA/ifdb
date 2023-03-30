<template>
  <div>
    <AvaliacaoForm :idFilme="idFilme"/>
  </div>
</template>

<script>
import AvaliacaoForm from '../components/AvaliacaoForm'

export default {
  name: 'Avalie',
  components: {
    AvaliacaoForm,
  },
 props:{
   idFilme: Number
 }
}
</script>