<template>
  <div class="home">
    <v-btn color="primary" @click="haldleHelloText()"> call helloworld1 </v-btn>
    <br /><br />

    <p>응답값:{{ helloworldText1 }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api';
import { useHelloWorldStore } from '@/service/sample/helloworld/module/helloWorld';

const helloWorldStore = useHelloWorldStore();
export default defineComponent({
  name: 'Home',
  components: {},

  setup() {
    let helloworldText1 = ref('');

    async function haldleHelloText() {
      const data = await helloWorldStore.reqHelloText();
      console.log('haldleHelloText data' + helloWorldStore.getHelloText);
      helloworldText1.value = data.helloText;
    }

    return {
      haldleHelloText,
      helloworldText1,
    };
  },
});
</script>
