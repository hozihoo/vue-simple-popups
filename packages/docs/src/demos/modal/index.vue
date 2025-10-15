<script setup lang="ts">
import { useVSPModal } from "vue-simple-popups";
import ModalTemplate from "./modal-template.vue";

const { showModal } = useVSPModal();
</script>
<template>
  <div class="flex gap-2">
    <button
      class="btn btn-primary"
      @click="
        () => {
          showModal(ModalTemplate);
        }
      "
    >
      Basic Modal
    </button>
  </div>
</template>
