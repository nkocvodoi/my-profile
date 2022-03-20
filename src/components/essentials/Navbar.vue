<template>
  <v-app-bar app flat class="px-8" :color="$vuetify.theme.currentTheme.primary">
    <v-btn icon>
      <v-img :src="logo" height="48" width="48"></v-img>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn v-if="isDark" icon @click="toggleTheme">
      <v-icon>mdi-brightness-4</v-icon>
    </v-btn>
    <v-btn v-else icon @click="toggleTheme">
      <v-icon>mdi-brightness-5</v-icon>
    </v-btn>
    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('project')">Project</v-btn>
    <v-btn text @click="scroll('about')">About</v-btn>
    <v-btn text @click="scroll('contact')">Contact</v-btn>
  </v-app-bar>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import logo from '@/assets/logo/logo.png'

@Component
export default class Navbar extends Vue {
  logo = logo
  isDark = false;
  toggleTheme () {
    this.isDark = !this.isDark
    this.$vuetify.theme.dark = this.isDark
  }

  scroll (refName) {
    const element = document.getElementById(refName)
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style>
</style>
