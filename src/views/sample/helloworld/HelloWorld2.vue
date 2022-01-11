<template>
  <div class="home">
    <v-btn color="primary" @click="haldleHelloText()"> call helloworld2 </v-btn>
    <br /><br />

    <p>응답값:{{ helloworldText2 }}</p>
    <p>응답값(computed):{{ helloworldText2 }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from '@vue/composition-api';
import { useHelloWorldStore } from '@/service/sample/helloworld/module/helloWorld';

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const helloWorldStore = useHelloWorldStore();
    let helloworldText2 = ref('');

    const helloworldText3 = computed(() => helloWorldStore.getHelloText);

    async function haldleHelloText() {
      const data = await helloWorldStore.reqHelloText();
      console.log('haldleHelloText data' + data);
      helloworldText2.value = data.helloText;
    }
    return {
      haldleHelloText,
      helloworldText2,
      helloworldText3,
    };
  },
});
</script>
