<template>
  <div class="home">
    <v-btn depressed color="primary" @click="haldleHelloText()">
      Primary
    </v-btn>
    <br /><br />

    <p>응답값:{{ helloworldText }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Home',
  components: {},
  data() {
    return {
      helloworldText: '',
    };
  },
  methods: {
    haldleHelloText() {
      this.$store.dispatch('helloworld/reqHelloText').then(() => {
        console.log(
          'this.$store.state.helloworld ' +
            this.$store.state.helloworld.helloText
        );
        this.helloworldText = this.$store.state.helloworld.helloText;
      });
    },
  },
});
</script>
