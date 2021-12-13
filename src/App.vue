<template>
  <sand-box />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  import SandBox from '@/components/SandBox/SandBox.vue';

  export default defineComponent({
    name: 'App',
    components: {
      SandBox,
    },
  });
</script>

<style lang="scss">
  @import 'index';
</style>
