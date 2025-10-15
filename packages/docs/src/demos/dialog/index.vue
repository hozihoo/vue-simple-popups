<script setup lang="ts">
import { useVSPDialog } from "vue-simple-popups";
import { VSPDialogTemplate } from "vue-simple-popups/templates";

const { showDialog } = useVSPDialog();
</script>
<template>
  <div class="flex gap-2">
    <button
      class="btn btn-primary"
      @click="
        () => {
          const closeDialog =
            showDialog <
            boolean >
            (VSPDialogTemplate,
            {
              title: '这是弹窗标题',
              content: '这是弹窗内容',
              onConfirm(data) {
                console.log(
                  `You clicked confirm button and you received the data: '${data}', type is '${typeof data}'`
                );
                closeDialog();
              },
              onCancel() {
                console.log('You clicked cancel button!');
                closeDialog();
              },
              onClose() {
                console.log('You clicked close button!');
                closeDialog();
              },
              onClosed() {
                console.log('The Dialog has been closed!');
              },
              onAnimationEnd() {
                console.log(`The Dialog's animation has been ended!`);
              },
            });
        }
      "
    >
      Basic Dialog
    </button>
  </div>
</template>
