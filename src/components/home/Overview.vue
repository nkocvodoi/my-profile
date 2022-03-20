<template>
  <v-row align="center" justify="center" class="pa-4">
    <v-spacer class="hidden-md-and-down"></v-spacer>
    <v-col cols="3">
      <v-img :src="avatar" contain :height="height" max-height="500"></v-img>
    </v-col>
    <v-col cols="6">
      <h4 :color="$vuetify.theme.currentTheme.button" class="top">
        Hello I'm Kien
      </h4>
      <h1>Frontend Developer</h1>
      <p>(And a little bit of Backend)</p>
      <p class="grey--text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
        Adipisci explicabo, cupiditate necessitatibus iure hic omnis est ab
        <br />
        At nihil et temporibus ratione!
      </p>
      <v-btn tile :color="$vuetify.theme.currentTheme.button" dark>
        about me
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import avatar from '@/assets/1.jpg'
@Component
export default class Overview extends Vue {
  avatar = avatar;

  get height () {
    switch (this.$vuetify.breakpoint.name) {
      case 'xs':
        return 220
      case 'sm':
        return 400
      case 'md':
        return 500
      case 'lg':
        return 600
      case 'xl':
        return 800
    }
  }
}
</script>

<style>
</style>
