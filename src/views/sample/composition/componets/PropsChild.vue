<template>
  <div class="home">
    <v-card>
      <v-card-text>
        <p>ref: {{ person1.name }} {{ person1.age }}</p>
      </v-card-text>
      <v-card-text
        ><p>reactive: {{ person2.name }} {{ person2.age }}</p>
        <p>doubleAge: {{ person2.doubleAge }}</p></v-card-text
      >
      <v-card-text
        ><p>
          ref, reactive: {{ company1 }} {{ company2.company }}
        </p></v-card-text
      >
    </v-card>

    <v-btn color="primary" @click="handleClick">click next year</v-btn>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from '@vue/composition-api';
import { logger } from '@/utils/logger';

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const person1 = ref({ name: 'sehoone1', age: 30 });
    const person2 = reactive({
      name: 'sehoone2',
      age: 33,
      doubleAge: computed((): number => person2.age * 2),
    });

    let company1 = ref('openobject'); // ref는 원시객체에 사용
    let company2 = reactive({ company: 'openobject' }); //reactive는 object에 사용. 개체의 반응 복사본을 반환

    const handleClick = () => {
      logger.debug('log test debug');
      logger.error('log test error');
      logger.warn('log test warn');
      logger.info('log test info');
      console.warn('console test warn');
      console.error('console test error');

      // ref는 function에서 값을 변경할 때 ref.value를 넣어값을 바꿈
      person1.value.age = ++person1.value.age;
      //reactive는 바로 값을 바꿈
      person2.age = ++person2.age;

      company1.value = 'openobject!!';
      company2.company = 'openobject!@';
    };
    return { person1, person2, company1, company2, handleClick };
  },
});
</script>
