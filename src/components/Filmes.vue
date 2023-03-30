<template>
  <v-container>

    <h1 style="margin-top: 5px;">IFDB</h1>

    <v-row cols="12">
        <v-col>
          <v-carousel hide-delimiters>

            <v-carousel-item eager>
              <div>
                <v-img eager id="img" src="../../public/img/tudo-em-todo-lugar/picture.jpg" cover></v-img>
              </div>
            </v-carousel-item>

            <v-carousel-item eager>
              <div>
                <v-img eager id="img" src="../../public/img/avatar/picture.jpg" cover></v-img>
              </div>
            </v-carousel-item>

            <v-carousel-item eager>
              <div>
                <v-img eager id="img" src="../../public/img/doutor-estranho/picture.jpg" cover></v-img>
              </div>
            </v-carousel-item>

            <v-carousel-item eager>
              <div>
                <v-img eager id="img" src="../../public/img/projeto-adam/picture.jpg" cover></v-img>
              </div>
            </v-carousel-item>

          </v-carousel>
        </v-col>
    </v-row>

    <h1 style="margin-top: 30px;">Avalie</h1>

    <v-row cols="12">

      <v-col cols="2">
        <div class="d-flex">
          <v-img height="250px" src="../../public/img/Vingadores_Ultimato.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 1 }}">Avaliar</router-link>
        </v-row>
      </v-col>

      <v-col cols="2">
        <div class="d-flex">
          <v-img height="250px" src="../../public/img/As_Branquelas.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 2 }}">Avaliar</router-link>
        </v-row>
      </v-col>

      <v-col cols="2">
        <div class="d-flex">
          <v-img height="250px" src="../../public/img/Titanic.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 3 }}">Avaliar</router-link>
        </v-row>
      </v-col>
      
      <v-col cols="2">
        <div class="d-flex">
          <v-img height="250px" src="../../public/img/Homem_Aranha.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 4 }}">Avaliar</router-link>
        </v-row>
      </v-col>

      <v-col cols="2">
        <div class="d-flex">
          <v-img height="250px" src="../../public/img/Velozes_Furiosos.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 5 }}">Avaliar</router-link>
        </v-row>
      </v-col>

      <v-col cols="2">
        <div class="d-flex">
          <v-img height="250px" src="../../public/img/Invocacao_Mal.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 6 }}">Avaliar</router-link>
        </v-row>
      </v-col>
    </v-row>

    <v-row cols="12" style="margin-top: 30px;">

      <v-col cols="2">
        <div class="d-flex">
          <v-img height="250px" src="../../public/img/Harry_Potter.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 7 }}">Avaliar</router-link>
        </v-row>
      </v-col>

      <v-col cols="2">
        <div class="d-flex">
          <v-img height="250px" src="../../public/img/Toy_Story.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 8 }}">Avaliar</router-link>
        </v-row>
      </v-col>

      <v-col cols="2">
        <div class="d-flex">
          <v-img height="250px" src="../../public/img/Jogos_Vorazes.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 9 }}">Avaliar</router-link>
        </v-row>
      </v-col>

      <v-col cols="2">
        <div class="d-flex">
          <v-img height="250px" src="../../public/img/Crepusculo.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 10 }}">Avaliar</router-link>
        </v-row>
      </v-col>

      <v-col cols="2">
        <div class="d-flex">
          <v-img height="250px" src="../../public/img/Bird_Box.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 11 }}">Avaliar</router-link>
        </v-row>
      </v-col>

      <v-col cols="2">
        <div class="d-flex">
          <v-img height="251px" src="../../public/img/Rio.jpg"></v-img>
        </div>
        <v-row>
          <router-link class="btn-filmes" :to="{ path: '/avalie', query: {idFilme: 12 }}">Avaliar</router-link>
        </v-row>
      </v-col>

      <Populares />
    </v-row>

    
  </v-container>
</template>

<script>

import PlayIcon from "vue-material-design-icons/Play.vue";
import InformationIcon from "vue-material-design-icons/Information.vue";
import Populares from '../components/Populares'


export default {
  components: {
    PlayIcon,
    InformationIcon,
    Populares
  }
};

</script>

<style scoped>

.btn-filmes {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  border-radius: 2em;
  padding: 5px;
  font-size: 12px;
  margin: 15px auto;
  cursor: pointer;
  transition: 0.5s;
  height: 30px;
  width: 80px;
  text-decoration: none;
  text-align: center;
}

.btn-filmes:hover {
  background-color: transparent;
  color: #222;
}

h1 {
  color: #e2b616;
} 

</style>