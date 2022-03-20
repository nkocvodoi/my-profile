<template>
  <v-row id="project" :style="cssVar">
    <v-col cols="12" class="py-3">
      <div class="projectWrapper">
        <v-row>
          <v-col cols="12">
            <div class="highlightTool bgBlack">
              <v-img class="ml-3" :src="vue" height="40" width="40"></v-img>
              <h3 class="ml-3 mt-4">Web Developer</h3>
              <p class="subtitleText">
                Lorem, ipsum dolor sit amet <br />consectetur adipisicing elit.
              </p>
              <v-btn :color="$vuetify.theme.currentTheme.button" dark text>
                know more
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
            <div class="highlightTool bgRed">
              <v-img class="ml-3" :src="flutter" height="40" width="40"></v-img>
              <h3 class="ml-3 mt-4">Mobile Developer</h3>
              <p class="subtitleText">
                Lorem, ipsum dolor sit amet <br />consectetur adipisicing elit.
              </p>
              <v-btn color="" text>
                know more
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
            <div class="highlightTool bgBlack">
              <v-img class="ml-3" :src="python" height="40" width="40"></v-img>
              <h3 class="ml-3 mt-4">Backend Developer</h3>
              <p class="subtitleText">
                Lorem, ipsum dolor sit amet <br />consectetur adipisicing elit.
              </p>
              <v-btn :color="$vuetify.theme.currentTheme.button" text>
                know more
                <v-icon right>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" class="mt-10">
            <div class="expLayout">
              <h1 class="redText text--darken-4 mt-4 number">2</h1>
              <h3 class="greyText mt-4">Years Experience</h3>
            </div>
            <div class="highlightInfo mRight">
              <v-row>
                <v-col cols="12" class="pa-0">
                  <div class="highlightInfo mButton py-2 bgBlack">
                    <h1 class="redText text--darken-4">60+</h1>
                    <p class="greyText">Clients</p>
                  </div>
                </v-col>
                <v-col cols="12" class="pa-0">
                  <div class="highlightInfo py-2 bgBlack">
                    <h1 class="redText text--darken-4">10+</h1>
                    <p class="greyText">Completed Projects</p>
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="highlightInfo">
              <v-row>
                <v-col cols="12" class="pa-0">
                  <div class="highlightInfo mButton py-2 bgBlack">
                    <h1 class="redText text--darken-4">02</h1>
                    <p class="greyText">Years Experience</p>
                  </div>
                </v-col>
                <v-col cols="12" class="pa-0">
                  <div class="highlightInfo py-2 bgBlack">
                    <h1 class="redText text--darken-4">00</h1>
                    <p class="greyText">Achievements</p>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'
import vueIcon from '@/assets/logo/vuejs.svg'
import pythonIcon from '@/assets/logo/python.svg'
import flutterIcon from '@/assets/logo/flutter.svg'

@Component
export default class Project extends Vue {
  vue = vueIcon;
  python = pythonIcon;
  flutter = flutterIcon;

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

<style scoped>
.projectWrapper {
  width: 100%;
  height: 610px;
  background: linear-gradient(
    to right,
    var(--accent-color),
    var(--accent-color) 50%,
    var(--primary-color) 50%,
    var(--primary-color) 50%
  );
  text-align: center;
  padding: 2rem 2rem;
}
.highlightTool {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: left;
  margin-right: 8px;
}
.highlightInfo {
  display: inline-block;
  width: 245px;
  vertical-align: middle;
}
.bgBlack {
  background-color: var(--third-background-color);
}
.bgRed {
  background-color: var(--background-color);
}
.redText {
  color: var(--background-color);
}
.greyText {
  color: var(--subtitle-color);
}
.expLayout {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  margin-right: 5px;
  width: 240px;
}
.mRight {
  margin-right: 8px;
}
.mButton {
  margin-bottom: 8px;
}
h1.number {
  font-size: 50px;
  font-weight: bold;
}
.subtitleText {
  color: var(--subtitle-color);
  margin-left: 12px;
  margin-top: 20px;
}
</style>
