<script setup lang="ts">
import {
  ArrowBigRightDash,
  LoaderCircle,
  RefreshCw,
  CircleX,
} from "lucide-vue-next";
import { ref } from "vue";
const props = withDefaults(
  defineProps<{
    width?: number;
    height?: number;
    tailWidth?: number;
    picture: string;
    tile: string;
    y?: number;
    blockColor?: string;
    barColor?: string;
  }>(),
  {
    width: 360,
    height: 220,
    tailWidth: 60,
    y: 0,
    blockColor: "#42b883",
    barColor: "#a4c9b9",
  }
);

const emits = defineEmits<{
  cancel: void;
  refresh: void;
  finished: [number];
}>();

const isVerified = ref(false);
const loading = ref(false);
const moveX = ref(0);
let startX = 0;

function handleMouseDownEvent(event: MouseEvent) {
  event.stopPropagation();
  event.preventDefault();
  if (isVerified.value) {
    return;
  }
  startX = event.screenX;
  document.body.addEventListener("mousemove", handleMouseMoveEvent, false);
  document.body.addEventListener("mouseup", handleMouseUpEvent, false);
}

function handleMouseMoveEvent(event: MouseEvent) {
  event.stopPropagation();
  event.preventDefault();
  const { screenX } = event;
  const distance = screenX - startX;
  if (distance < 0) {
    moveX.value = 0;
    return;
  }
  if (distance > props.width - props.tailWidth) {
    return;
  }
  moveX.value = distance;
}
function handleMouseUpEvent(event: MouseEvent) {
  event.stopPropagation();
  event.preventDefault();
  document.body.removeEventListener("mousemove", handleMouseMoveEvent, false);
  document.body.removeEventListener("mouseup", handleMouseUpEvent, false);
  isVerified.value = true;
  loading.value = true;
  emits("finished", moveX.value);
}
</script>
<template>
  <div class="bg-white rounded-lg shadow-2xl overflow-hidden select-none px-2">
    <div
      class="flex items-center justify-end gap-2 px-2 py-2"
      :class="loading ? 'text-gray-300' : 'text-gray-400'"
    >
      <RefreshCw
        class="cursor-pointer"
        @click="
          () => {
            if (loading) return;
            $emit('refresh');
          }
        "
      />
      <CircleX
        class="cursor-pointer"
        @click="
          () => {
            if (loading) return;
            $emit('cancel');
          }
        "
      />
    </div>
    <div class="relative overflow-hidden">
      <img
        :style="{ width: `${$props.width}px`, height: `${$props.height}px` }"
        :src="$props.picture"
      />
      <img
        class="absolute left-0"
        :style="{ top: `${$props.y}px`, left: `${moveX}px` }"
        :src="$props.tile"
      />
    </div>
    <div class="relative w-full h-[38px] mt-1 mb-2">
      <div
        class="h-full absolute top-0 left-0 rounded"
        :style="{ backgroundColor: $props.barColor, width: `${moveX + 10}px` }"
      ></div>
      <div
        class="flex items-center justify-center h-full absolute top-0 rounded"
        :class="loading ? 'cursor-wait' : 'cursor-pointer'"
        :style="{
          backgroundColor: $props.blockColor,
          left: `${moveX}px`,
          width: `${$props.tailWidth}px`,
        }"
        @mousedown="handleMouseDownEvent"
      >
        <ArrowBigRightDash v-if="!loading" />
        <LoaderCircle class="loader" v-else />
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.loader {
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
