<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <MyButton>hello</MyButton>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyButton from './components/MyButton.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    MyButton
  }
}
</script>

