import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa' || 'md' || 'mdi'

  },
  theme: {
    themes: {
      dark: {
        primary: '#111111',
        secondary: '#1e1e1e',
        third: '#1e1e1e',
        accent: '#181818',
        button: '#A7121D',
        subtitle: '#8E9C9E'
      },
      light: {
        primary: '#FFFFFF',
        secondary: '#223A5E',
        third: '#F88F58',
        accent: '#EBC5E1',
        button: '#7575FF',
        subtitle: '#FFFFFF'
      }
    }
  }
})
