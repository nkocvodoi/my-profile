<template>
  <v-app
    id="home"
  >
    <nav-bar />
    <v-container fluid>
      <v-row>
        <v-col cols="12"><Overview /></v-col>
        <v-col cols="12"><Project /></v-col>
        <v-col cols="12"><About /></v-col>
        <v-col cols="12"><Contact /></v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from '@/components/essentials/Navbar.vue'
import Footer from '@/components/essentials/Footer.vue'
import Overview from '@/components/home/Overview.vue'
import Project from '@/components/home/Project.vue'
import About from '@/components/home/About.vue'
import Contact from '@/components/home/Contact.vue'
import avatar from '@/assets/1.jpg'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: { NavBar, Footer, Overview, Project, About, Contact }
})
export default class Home extends Vue {
  avatar = avatar
}
</script>

<style scoped>
</style>
