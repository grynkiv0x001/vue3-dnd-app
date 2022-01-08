<template>
  <sand-box />
</template>

<script lang="ts">
  import SandBox from '@/components/SandBox/SandBox.vue';

  export default {
    name: 'App',
    components: {
      SandBox,
    },
  };
</script>

<style lang="scss">
  @import 'index';
</style>
