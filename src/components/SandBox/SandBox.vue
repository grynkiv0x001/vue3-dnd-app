<template>
  <h1>Welcome to Vue DnD sandbox!</h1>
  <div class="sandbox">
    <draggable v-for="i in elementsAmount" :id="i" :key="i" />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import Draggable from '../Draggable/Draggable.vue';

  export default defineComponent({
    name: 'SandBox',
    components: {
      Draggable,
    },
    data() {
      return {
        elementsAmount: 3,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import './SandBox';
</style>
