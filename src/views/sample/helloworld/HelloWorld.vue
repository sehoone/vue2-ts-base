<template>
  <div class="home">
    <v-btn color="primary" @click="haldleHelloText()"> call helloworld1 </v-btn>
    <br /><br />

    <p>응답값:{{ helloworldText1 }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Home',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      helloworldText1: 'helloworld/getHelloText' || '',
    }),
  },
  methods: {
    haldleHelloText() {
      this.$store.dispatch('helloworld/reqHelloText').then(() => {
        console.log(
          'this.$store.state.helloworld ' +
            this.$store.state.helloworld.helloText
        );
      });
    },
  },
});
</script>
