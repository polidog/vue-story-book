import { configure } from '@storybook/vue'

import Vue from 'vue'

import Buefy from 'buefy'
import '@/assets/scss/app.scss'

Vue.use(Buefy)

configure(() => {
  require('./../src/stories')
}, module)
