<template>
  <div>
    <NavigationLayoutVue></NavigationLayoutVue>
    <v-main>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NavigationLayoutVue from './NavigationLayout.vue';

export default Vue.extend({
  name: 'DefaultLayout',
  components: {
    NavigationLayoutVue,
  },
});
</script>
