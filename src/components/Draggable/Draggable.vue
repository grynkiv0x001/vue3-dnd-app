<template>
  <div ref="draggable" class="container" :style="{ 'z-index': id + 10 }">
    <div class="draggable">
      <div ref="draggableArea" class="draggable__header">
        <h3 class="draggable__header-title">Draggable element {{ id }}</h3>
      </div>
      <div class="draggable__body">
        <p class="draggable__body-text-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure,
          debitis inventore earum eos nihil deleniti maiores perferendis soluta.
          Dignissimos.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Draggable',
    props: {
      id: {
        type: Number,
        required: true,
      },
    },
    emits: ['onDrag'],
    mounted() {
      const draggable = this.$refs.draggable;
      const draggableArea = this.$refs.draggableArea;

      const onDrag = ({ movementX, movementY }) => {
        const draggableStyles = window.getComputedStyle(draggable);

        requestAnimationFrame(() => {
          let left = parseInt(draggableStyles.left);
          let top = parseInt(draggableStyles.top);

          draggable.style.left = `${left + movementX}px`;
          draggable.style.top = `${top + movementY}px`;
        });
      };

      draggableArea.addEventListener('mousedown', (e) => {
        draggable.classList.add('active');
        draggableArea.addEventListener('mousemove', onDrag);
      });

      document.addEventListener('mouseup', () => {
        draggableArea.removeEventListener('mousemove', onDrag);
      });
    },
    unmounted() {
      this.$refs.draggable.removeEvenenListener('mousedown');
      document.removeEventListener('mouseup');
    },
  });
</script>

<style lang="scss">
  @import './Draggable';
</style>
