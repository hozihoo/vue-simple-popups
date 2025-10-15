<script setup lang="ts">
import { useVSPLoading } from "vue-simple-popups";
import { VSPLoaderDotCircleSpin } from "vue-simple-popups/templates";

const { showLoading } = useVSPLoading();

function handleShowLoading() {
  const hideLoading = showLoading(VSPLoaderDotCircleSpin);
  setTimeout(() => {
    hideLoading();
  }, 3000);
}
</script>
<template>
  <div class="flex gap-2">
    <button class="btn btn-primary" @click="handleShowLoading()">
      Basic Loading
    </button>
  </div>
</template>
