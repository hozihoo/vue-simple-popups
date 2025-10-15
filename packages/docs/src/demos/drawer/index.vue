<script setup lang="ts">
import { useVSPDrawer } from "vue-simple-popups";
import DrawerTemplate from "./drawer-template.vue";

const { showDrawer } = useVSPDrawer();
</script>
<template>
  <div class="flex gap-2">
    <button
      class="btn btn-primary"
      @click="
        () => {
          showDrawer(DrawerTemplate);
        }
      "
    >
      Basic Drawer
    </button>
  </div>
</template>
