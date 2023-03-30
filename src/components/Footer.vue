<template>
  <div id="footer">

    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <b>
          <InstagramIcon />
        </b>
        <b>
          <TwitterIcon />
        </b>
        <b>
          <YoutubeIcon />
        </b>
        <b>
          <FacebookIcon />
        </b>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <b>
          Cria sua conta
          <OpenInNewIcon class="icon" size="15" />
        </b>
        <b>
          Solicite um título
          <OpenInNewIcon class="icon" size="15" />
        </b>

        <b>
          Anuncie aqui
          <OpenInNewIcon class="icon" size="15" />
        </b>

        <b>Condições de uso</b>

        <b>
          Ajuda
          <OpenInNewIcon class="icon" size="15" />
        </b>
        <b>Política de privacidade</b>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <p class="git-and-copy">IFDB: Avalie Filmes Online &copy; 2023</p>
        <p class="git-and-copy">
          <GithubIcon />https://github.com/FJRMOTA/ifdb
        </p>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import GithubIcon from "vue-material-design-icons/Github.vue";
import OpenInNewIcon from "vue-material-design-icons/OpenInNew.vue";
import TwitterIcon from "vue-material-design-icons/Twitter.vue";
import YoutubeIcon from "vue-material-design-icons/Youtube.vue";
import FacebookIcon from "vue-material-design-icons/Facebook.vue";
import InstagramIcon from "vue-material-design-icons/Instagram.vue";

export default {
  name: "Footer",
  components: {
    GithubIcon,
    OpenInNewIcon,
    TwitterIcon,
    YoutubeIcon,
    FacebookIcon,
    InstagramIcon
  }
};
</script>

<style scoped>
#footer {
  height: 200px;
  background-color: #000000;
  border-top: 4px solid #111;
  color: #ffffff;
  bottom: 0;
  width: 100%;
}

.git-and-copy {
  margin-top: 30px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

b {
  margin-top: 10px;
  padding-left: 20px;
}

p {
  padding-left: 30px;
}

.icon {
  padding: 3px;
}
</style>