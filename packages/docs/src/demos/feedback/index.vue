<script setup lang="ts">
import { useVSPFeedback } from "vue-simple-popups";
import FeedbackTemplate from "./feedback-template.vue";

const { showFeedback: showTopRightFeedback } = useVSPFeedback();
const { showFeedback: showTopCenterFeedback } = useVSPFeedback({
  horizontal: "center",
});
const { showFeedback: showTopLeftFeedback } = useVSPFeedback({
  horizontal: "start",
});
const { showFeedback: showBottomLeftFeedback } = useVSPFeedback({
  vertical: "bottom",
  horizontal: "start",
});
const { showFeedback: showBottomCenterFeedback } = useVSPFeedback({
  vertical: "bottom",
  horizontal: "center",
});
const { showFeedback: showBottomRightFeedback } = useVSPFeedback({
  vertical: "bottom",
});
</script>
<template>
  <div class="flex gap-2">
    <button
      class="btn btn-primary"
      @click="
        () => {
          showTopRightFeedback(FeedbackTemplate, {}, {});
        }
      "
    >
      Top Right
    </button>
    <button
      class="btn btn-primary"
      @click="
        () => {
          showTopCenterFeedback(FeedbackTemplate, {}, {});
        }
      "
    >
      Top Center
    </button>
    <button
      class="btn btn-primary"
      @click="
        () => {
          showTopLeftFeedback(FeedbackTemplate, {}, {});
        }
      "
    >
      Top Left
    </button>
    <button
      class="btn btn-primary"
      @click="
        () => {
          showBottomLeftFeedback(FeedbackTemplate, {}, {});
        }
      "
    >
      Bottom Left
    </button>
    <button
      class="btn btn-primary"
      @click="
        () => {
          showBottomCenterFeedback(FeedbackTemplate, {}, {});
        }
      "
    >
      Bottom Center
    </button>
    <button
      class="btn btn-primary"
      @click="
        () => {
          showBottomRightFeedback(FeedbackTemplate, {}, {});
        }
      "
    >
      Bottom Right
    </button>
  </div>
</template>
