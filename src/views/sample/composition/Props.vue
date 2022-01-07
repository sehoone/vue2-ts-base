<template>
  <div>
    <input type="text" v-model="profileInfo.name" />
    <input type="text" v-model="profileInfo.age" />
    <hello-world :profileInfo="profileInfo" ref="hello_component" />
    <v-btn color="primary" @click="haldlePrintText()"> haldlePrintText </v-btn>
    <v-btn color="primary" @click="haldlePrintText11()">
      haldlePrintText11
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';

export default Vue.extend({
  name: 'propsHome',

  components: {
    HelloWorld,
  },
  data: () => ({
    profileInfo: {
      name: '',
      age: 0,
    },
  }),
  methods: {
    haldlePrintText() {
      console.log(this.profileInfo.name);
      console.log(this.profileInfo.age);
      const hc = this.$refs.hello_component as InstanceType<typeof HelloWorld>;
      hc.clickChild();
    },
    haldlePrintText11() {
      this.profileInfo.name = 'test';
    },
  },
});
</script>
