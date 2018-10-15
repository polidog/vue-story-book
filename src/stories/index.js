import { storiesOf } from '@storybook/vue'

import MyButton from '../components/MyButton'

storiesOf('MyButton', module)
  .add('simple', () => ({
    components: { MyButton },
    template: `<MyButton>KEEP IT SIMPLE</MyButton>`
  }))
