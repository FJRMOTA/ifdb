<template>
  <div id="avaliacoes-table" v-if="avaliacoes">
    <div>
      <div id="avaliacoes-table-heading">
        <div class="id">#</div>
        <div>Título</div>
        <div>Categorias</div>
        <div>Lançamento</div>
        <div>Duração</div>
        <div>Nota média</div>
      </div>
    </div>

    <div id="avaliacoes-table-rows">
      <div class="avaliacoes-table-row" v-for="avaliacao in avaliacoes" :key="avaliacao.id">
        <div class="number">{{avaliacao.id}}</div>
        <div>{{avaliacao.filme}}</div>
        <div style="padding-left: 20px">
          <ul v-for="categorias in avaliacao.categorias" :key="categorias.id">
            <li>{{categorias.categoria}}</li>
          </ul>
        </div>
        <div>{{avaliacao.anoLancamento}}</div>
        <div>{{avaliacao.duracao}}</div>
        <div>{{ avaliacao.notaMedia}}/10</div>
      </div>
    </div>
  </div>

  <div v-else>
    <h2 style="text-align: center; margin-top: 100px">Não existem avaliações ainda!</h2>
  </div>
</template>

<script>
export default {
  name: "Relatorio",
  data() {
    return {
      avaliacoes: null,
    };
  },
  methods: {
    async getAvaliacoes() {
      const req = await fetch("http://localhost:3000/avaliacoes");
      const data = await req.json();

      if (data.length != 0) {
        this.avaliacoes = data;

        for (var i in this.avaliacoes) {
          this.getFilme(this.avaliacoes[i].filmeId, i);
        }   
      }
    },
    async getFilme(id, posicao) {
      const req = await fetch("http://localhost:3000/filmes/" + parseInt(id));
      const data = await req.json();

      this.avaliacoes[posicao].notaMedia = data.notaMedia;
    }
  },
  mounted() {
    this.getAvaliacoes();
  }
};
</script>

<style scoped>
#avaliacoes-table {
  max-width: 1200px;
  margin: 0 auto;
}

#avaliacoes-table-heading,
#avaliacoes-table-rows,
.avaliacoes-table-row {
  display: flex;
  flex-wrap: wrap;
}

#avaliacoes-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

.avaliacoes-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#avaliacoes-table-heading div,
.avaliacoes-table-row div {
  width: 19%;
}

#avaliacoes-table-heading .id,
.avaliacoes-table-row .number {
  width: 5%;
}
</style>