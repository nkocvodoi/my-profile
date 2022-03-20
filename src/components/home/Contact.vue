<template>
  <v-row :style="cssVar">
      <v-col cols="12" class="py-3 topInverse">
          <div class="contactCard">
            <div class="contactCardInfo" id="contact">
              <v-row>
                  <v-spacer></v-spacer>
                <v-col cols="6">
                  <h1 class="white--text">
                    Let's work together on<br />your next project
                  </h1>
                  <p class="grey--text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eius nesciunt ducimus natus <br />
                  </p>
                </v-col>
                <v-col cols="4">
                  <v-btn tile :color="$vuetify.theme.currentTheme.button" dark class="mt-16">
                    Contact
                  </v-btn>
                </v-col>
              </v-row>
            </div>
          </div>
          <v-toolbar class="topToolbar" :color="$vuetify.theme.currentTheme.primary" flat>
            <div
              style="
                position: absolute;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
            >
              <v-btn text>Home</v-btn>
              <v-btn text>Project</v-btn>
              <v-btn text>about</v-btn>
              <v-btn text> contact</v-btn>
            </div>
          </v-toolbar>
        </v-col>
  </v-row>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Contact extends Vue {
  get cssVar () {
    return {
      '--background-color': this.$vuetify.theme.currentTheme.button,
      '--primary-color':
        this.$vuetify.theme.currentTheme.primary,
      '--secondary-background-color':
        this.$vuetify.theme.currentTheme.secondary,
      '--third-background-color':
        this.$vuetify.theme.currentTheme.third,
      '--accent-color': this.$vuetify.theme.currentTheme.accent,
      '--subtitle-color': this.$vuetify.theme.currentTheme.subtitle
    }
  }
}
</script>

<style>
.topInverse {
    margin-top: -150;
}
.topToolbar {
  margin-top: 100px;
  text-align: center;
}
.contactCard {
  width: 100%;
  height: 400px;
  background: var(--accent-color);
  text-align: center;
  padding: 2rem 2rem;
}
.contactCardInfo {
  display: inline-block;
  background-color: var(--secondary-background-color);
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-top: 250px;
}
</style>
