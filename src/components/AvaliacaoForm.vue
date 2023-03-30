<template>
  <v-container>
    <v-row>
      <v-col cols="6">

        <v-row>
          <h1 id="titulo-filme">
            {{nomeFilme}}
          </h1>
        </v-row>
        
        <v-row id="infos">
          <span>
            {{anoLancamento}}
          </span>
          &nbsp;
          <CircleSmallIcon />
          <span>
            {{classificacao}}
          </span>
          &nbsp;
          <CircleSmallIcon />
          <span>
            {{duracao}}
          </span>
          &nbsp;
        </v-row>

        <v-row>
          <v-img v-bind:src="require('../../public/img/' + imagem)"
            height="600" id="img" class="d-flex" 
          ></v-img>
        </v-row>
        <v-row id="categoria">
          <span
            v-for="categoriaData in categorias"
            :key="categoriaData.id"
          >{{ categoriaData.categoria }}</span>
        </v-row>
        <v-row id="sinopse">
          <span>
            <b>Sinopse:</b>
            {{sinopse}}
          </span>
        </v-row>
        <hr />
        <v-row id="direcao">
          <b>Direção:</b>&nbsp;
          <span
            v-for="diretorData in diretores"
            :key="diretorData.id"
          >{{diretorData.diretor}}&nbsp;</span>
        </v-row>
        <hr />
        <v-row id="roteiristas">
          <b>Roiteristas:</b>&nbsp;
          <span
            v-for="roteiristaData in roteiristas"
            :key="roteiristaData.id"
          >{{roteiristaData.roteirista}}&nbsp;</span>
        </v-row>
        <hr />
        <v-row id="atores">
          <b>Atores:</b>
          &nbsp;
          <span
            v-for="atorData in atores"
            :key="atorData.id"
          >{{atorData.ator}}&nbsp;</span>
        </v-row>
      </v-col>
      <v-col cols="6">
        <v-row>
          <h1>Avalie esse filme</h1>
          <div>
            <form id="avaliacao-form" method="POST" @submit="avaliar">
              <p class="titulo">Filme</p>
              <div>
                <label for="nome">Nome do filme:</label>
                <input :value="nomeFilme" type="text" id="nome" name="nome" readonly />
              </div>
              <div>
                <label for="categorias">Categorias:</label>
                <input
                  :value="c.categoria"
                  v-for="c in categorias"
                  :key="c.id"
                  type="text"
                  id="categorias"
                  name="categorias"
                  readonly
                />
              </div>
              <div>
                <label for="duracao">Duração:</label>
                <input :value="duracao" type="text" id="duracao" name="duracao" readonly />
              </div>
              <p class="titulo" style="margin-top: 20px;">Usuário</p>
              <div>
                <label for="user">Nome do usuário:</label>
                <input type="text" id="user" name="user" v-model="user" />
              </div>

              <div>
                <label for="genero">Gênero:</label>
                <input type="text" id="genero" name="genero" v-model="genero" />
              </div>
              <div>
                <label for="dataNasc">Data de nascimento:</label>
                <input type="date" id="dataNasc" name="dataNasc" v-model="dataNasc" />
              </div>
              <Message class="mensagem" :msg="msg" v-show="msg" />
              <p class="titulo" style="margin-top: 20px;">Avaliação</p>
              <div>
                <label for="nota">Sua nota para este título:</label>
                <input type="number" id="nota" name="nota" min="0" max="10" v-model="nota" />
              </div>
              <div>
                <label for="comentario">Comentário:</label>
                <textarea rows="3" cols="40" id="comentario" name="comentario" v-model="comentario"></textarea>
              </div>

              <div class="input-container">
                <input class="submit-btn" type="submit" value="Enviar" />
              </div>
            </form>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Message from "./Message";
import CircleSmallIcon from "vue-material-design-icons/CircleSmall.vue";

export default {
  name: "AvaliacaoForm",
  props: {
    idFilme: Number
  },
  data() {
    return {
      nomeFilme: null,
      duracao: null,
      anoLancamento: null,
      classificacao: null,
      categorias: [],
      sinopse: null,
      diretores: [],
      roteiristas: [],
      atores: [],
      imagem: "ifdb_filme.jpg",
      user: null,
      genero: null,
      dataNasc: null,
      nota: 0,
      comentario: null,
      notaMedia: null,
      qtdAvaliacao: null,
      msg: null
    };
  },
  methods: {
    async updateFilme() {
      const id = parseInt(this.idFilme);

      const dataJson = JSON.stringify({
        notaMedia: this.notaMedia,
        qtdAvaliacao: this.qtdAvaliacao
      });

      const req = await fetch("http://localhost:3000/filmes/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson
      });

      const res = await req.json();

      console.log(res);
    },
    async getInfoFilmes() {
      const id = parseInt(this.idFilme);
      const req = await fetch("http://localhost:3000/filmes/" + id);
      const data = await req.json();

      this.nomeFilme = data.nome;
      this.duracao = data.duracao;
      this.anoLancamento = data.anoLancamento;
      this.classificacao = data.classificacao;
      this.imagem = data.img;
      this.categorias = data.categorias;
      this.sinopse = data.sinopse;
      this.diretores = data.diretores;
      this.roteiristas = data.roteiristas;
      this.atores = data.atores;
      this.notaMedia = data.notaMedia;
      this.qtdAvaliacao = data.qtdAvaliacao;
    },
    async avaliar(e) {
      e.preventDefault();

      const data = {
        nomeUsuario: this.user,
        genero: this.genero,
        dataNascimento: this.dataNasc,
        email: this.email,
        comentario: this.comentario,
        filmeId: parseInt(this.idFilme),
        nota: this.nota,
        filme: this.nomeFilme,
        categorias: Array.from(this.categorias),
        anoLancamento: this.anoLancamento,
        duracao: this.duracao
      };

      this.qtdAvaliacao = this.qtdAvaliacao + 1;
      this.notaMedia = (this.nota + this.notaMedia) / this.qtdAvaliacao;

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/avaliacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: dataJson
      });

      const res = await req.json();

      this.msg = "Avaliação feita com sucesso!";

      //limpa message
      setTimeout(() => (this.msg = ""), 3000);

      //limpar campos
      this.user = " ";
      this.genero = " ";
      this.dataNasc = null;
      this.nota = 0;
      this.comentario = " ";

      this.updateFilme();
    }
  },
  mounted() {
    this.getInfoFilmes();
  },
  components: {
    Message,
    CircleSmallIcon
  }
};
</script>

<style scoped>
#avaliacao-form {
  max-width: 400px;
  margin: 0 auto;
}

label {
  margin-bottom: 15px;
  color: #222;
  padding: 5px 15px;
}

.mensagem{
  padding: 5px 15px;
}

input,
textarea {
  margin-bottom: 20px;
  width: 300px;
  margin-left: 1em;
  font: 14px Arial;
  padding: 5px 15px;
  border: 2px solid #222;
  border-radius: 4px;
}

.submit-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
  margin-left: 1em;
}

.submit-btn:hover {
  background-color: transparent;
  color: #222;
}

.titulo {
  font-weight: bold;
  margin-bottom: 15px;
  color: #222;
  padding: 5px 10px;
  border-left: 4px solid #e2b616;
}

#img {
  margin-right: 10em;
}

#titulo-filme {
  text-align: center;
  margin-right: 3em;
  margin-left: 1em;
}

#infos {
  margin-left: 8em;
}

#categoria {
  margin-left: 2em;
}

#categoria span {
  width: 100px;
  border: 2px solid #222;
  border-radius: 20px;
  padding: 5px 10px;
  margin: 10px 0px 10px 10px;
  text-align: center;
}

#sinopse,
#direcao,
#roteiristas,
#atores {
  width: 75%;
  padding-left: 10px;
  margin-top: 20px;
  text-align: justify;
  margin-bottom: 5px;
}

hr {
  width: 75%;
  padding-left: 10px;
  margin-top: 20px;
}
</style>