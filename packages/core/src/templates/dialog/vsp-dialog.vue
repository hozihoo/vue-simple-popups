<script setup lang="ts">
import { X } from "lucide-vue-next";

defineProps<{
  title: string;
  content: string;
}>();

defineEmits<{
  close: [void];
  cancel: [void];
  confirm: [unknown];
}>();
</script>
<template>
  <div
    class="relative bg-white rounded-lg min-w-[320px] shadow-2xl overflow-hidden"
  >
    <!-- 对话框头部 -->
    <div
      class="px-6 py-4 border-b border-gray-200 flex justify-between items-center"
    >
      <h3 class="text-lg font-semibold text-gray-800">{{ $props.title }}</h3>
      <button class="text-gray-400 hover:text-gray-600 transition-colors">
        <X @click="$emit('close')" />
      </button>
    </div>

    <!-- 对话框内容 -->
    <div class="px-6 py-5 text-gray-900">{{ $props.content }}</div>

    <!-- 对话框底部按钮 -->
    <div class="px-6 py-4 bg-gray-50 flex justify-end space-x-3">
      <button
        class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
        @click="$emit('cancel')"
      >
        取消
      </button>
      <button
        class="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        @click="$emit('confirm', true)"
      >
        确认
      </button>
    </div>
  </div>
</template>
