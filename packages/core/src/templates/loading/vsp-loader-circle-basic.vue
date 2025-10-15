<script setup lang="ts">
withDefaults(
  defineProps<{
    circleColor?: string;
  }>(),
  {
    circleColor: "#42b883",
  }
);
</script>
<template>
  <span
    class="loader"
    :style="{
      borderColor: $props.circleColor,
      borderBottomColor: 'transparent',
    }"
  ></span>
</template>
<style lang="css" scoped>
.loader {
  width: 48px;
  height: 48px;
  border-width: 5px;
  border-style: solid;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
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
