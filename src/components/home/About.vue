<template>
  <v-row>
      <v-col md="3" offset-md="3" id="about">
          <h4>FEATURED PROJECTS</h4>
          <p class="grey--text">Lorem ipsum dolor Lorem ipsum dolor</p>
        </v-col>
        <v-col md="3" class="text-end">
          <v-btn tile :color="$vuetify.theme.currentTheme.button" dark> View All </v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            :color="$vuetify.theme.currentTheme.secondary"
          >
            <v-img src="3.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            :color="$vuetify.theme.currentTheme.secondary"
          >
            <v-img src="2.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn text class="ml-n4"> The Vintage </v-btn
          ><br />

          <v-btn :color="$vuetify.theme.currentTheme.button" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn text class="ml-n4"> Foodasa </v-btn><br />

          <v-btn :color="$vuetify.theme.currentTheme.button" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            :color="$vuetify.theme.currentTheme.secondary"
          >
            <v-img src="4.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3">
          <v-card
            class="pa-2 py-12"
            outlined
            tile
            height="250px"
            :color="$vuetify.theme.currentTheme.secondary"
          >
            <v-img src="5.png" contain max-height=""></v-img>
          </v-card>
        </v-col>
        <v-col md="3" offset-md="3">
          <v-btn text class="ml-n4"> AAE IdeaPro </v-btn
          ><br />

          <v-btn :color="$vuetify.theme.currentTheme.button" text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn text class="ml-n4"> Mozaik </v-btn><br />
          <v-btn :color="$vuetify.theme.currentTheme.button" dark text class="ml-n4">
            know more
            <v-icon right>mdi-arrow-right</v-icon>
          </v-btn>
        </v-col>
  </v-row>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class About extends Vue {}
</script>

<style>
</style>
