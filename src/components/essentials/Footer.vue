<template>
  <v-footer padless>
    <v-card
      flat
      tile
      class="py-5 px-5 text-center"
      width="100%"
    >
      <v-row>
        <v-col cols="12" sm="4">
          <v-card-text class="pt-2">
            <v-btn icon>
              <v-img :src="logo" height="40" width="40"></v-img>
            </v-btn>
          </v-card-text>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card-text class="pt-2">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-1"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card-text class="pt-2">
            <v-btn class="mx-1" icon>
              <v-icon :color="$vuetify.theme.currentTheme.button">mdi-heart</v-icon>
            </v-btn>
            Created by Nguyen Duy Kien
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import logo from '@/assets/logo/logo.png'

@Component
export default class Footer extends Vue {
  logo = logo
  icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
}
</script>

<style>
</style>
