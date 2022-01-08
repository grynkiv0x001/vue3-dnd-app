<template>
  <div ref="draggable" class="container" :style="{ 'z-index': id + 10 }">
    <div class="draggable">
      <div ref="draggableArea" class="draggable__header">
        <h3 class="draggable__header-title" @mousedown="userPressed">
          Draggable element {{ id }}
        </h3>
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
    data() {
      return {
        isMoving: false,
        offset: [0, 0],
      };
    },
    methods: {
      userPressed(e: MouseEvent): void {
        const draggable = this.$refs.draggable as HTMLDivElement;
        const draggableArea = this.$refs.draggableArea as HTMLDivElement;
        const sandbox = document.querySelector('.sandbox') as HTMLDivElement;

        this.isMoving = true;

        this.offset = [
          draggable.offsetLeft - e.clientX,
          draggable.offsetTop - e.clientY,
        ];

        sandbox?.addEventListener('mousemove', (event: MouseEvent): void => {
          if (this.isMoving) {
            draggableArea.style.backgroundColor = '#375a98';

            draggable.style.position = 'absolute';
            draggable.style.left = event.clientX + this.offset[0] + 'px';
            draggable.style.top = event.clientY + this.offset[1] + 'px';
          }
        });

        document.addEventListener('mouseup', this.userReleased);
      },
      userReleased(): void {
        const draggableArea = this.$refs.draggableArea as HTMLDivElement;

        draggableArea.style.backgroundColor = '#5073b4';
        this.isMoving = false;
      },
    },
  });
</script>

<style lang="scss">
  @import './Draggable';
</style>
