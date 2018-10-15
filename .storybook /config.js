import { configure } from '@storybook/vue'

import Vue from 'vue'


configure(() => {
  require('./../src/stories')
}, module)
