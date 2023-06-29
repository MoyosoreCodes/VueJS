<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 7.33337L14.6667 1.33337L8.66667 14L7.33333 8.66671L2 7.33337Z"
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
