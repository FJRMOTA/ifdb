<template>

  <v-container>
    <v-row>
      <v-col>

        <h1>Populares</h1>

        <v-carousel hide-delimiters style="height: 300px" cols="12" show-arrows="hover">
          <v-carousel-item>

            <v-row>
              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/series/dark.jpg"></v-img>
                </div>
              </v-col>

              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/filmes/300.jpg"></v-img>
                </div>
              </v-col>

              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/series/lost.jpg"></v-img>
                </div>
              </v-col>

              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/filmes/carros.jpg"></v-img>
                </div>
              </v-col>

              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/series/got.jpg"></v-img>
                </div>
              </v-col>

              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/filmes/dune.jpg"></v-img>
                </div>
              </v-col>
            </v-row>
          </v-carousel-item>

          <v-carousel-item>
            <v-row>
              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/series/stranger-things.jpg"></v-img>
                </div>
              </v-col>

              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/filmes/guardioes-da-galaxia.jpg"></v-img>
                </div>
              </v-col>

              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/series/cidade-invisivel.jpg"></v-img>
                </div>
              </v-col>

              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/filmes/power-rangers.jpg"></v-img>
                </div>
              </v-col>

              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/series/the-100.jpg"></v-img>
                </div>
              </v-col>

              <v-col cols="2">
                <div class="d-flex">
                  <v-img height="250px" src="../../public/img/filmes/jumanji.jpg"></v-img>
                </div>
              </v-col>

            </v-row>
          </v-carousel-item>
        </v-carousel>

      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
export default {
  name: "Populares"
};
</script>

<style scoped>

h1 {
  color: #e2b616;
}

</style>