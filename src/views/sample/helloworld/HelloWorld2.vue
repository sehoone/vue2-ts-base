<template>
  <div class="home">
    <v-btn color="primary" @click="haldleHelloText()"> call helloworld2 </v-btn>
    <br /><br />

    <p>응답값:{{ helloworldText2 }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default Vue.extend({
  name: 'Home',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      helloworldText2: 'helloworld/getHelloText' || '',
    }),
  },
  methods: {
    ...mapActions('helloworld', ['reqHelloText']),

    async haldleHelloText() {
      await this.reqHelloText();
      console.log(
        'this.$store.state.helloworld ' + this.$store.state.helloworld.helloText
      );
    },
  },
});
</script>
