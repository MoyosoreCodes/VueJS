<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9998 2.66663H1.99984C1.26346 2.66663 0.666504 3.26358 0.666504 3.99996V12C0.666504 12.7363 1.26346 13.3333 1.99984 13.3333H13.9998C14.7362 13.3333 15.3332 12.7363 15.3332 12V3.99996C15.3332 3.26358 14.7362 2.66663 13.9998 2.66663Z"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.666504 6.66663H15.3332"
      :stroke="color"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: String,
    default: '16',
  },
  width: {
    type: String,
    default: '16',
  },
  color: {
    type: String,
    default: 'black',
  },
});
</script>
