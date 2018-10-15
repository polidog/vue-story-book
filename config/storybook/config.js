/* eslint-disable import/no-extraneous-dependencies */
import { configure } from '@storybook/vue'

import Vue from 'vue'
import Buefy from 'buefy'
import '@/assets/scss/app.scss'
Vue.use(Buefy)


const req = require.context('../../src/stories', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
