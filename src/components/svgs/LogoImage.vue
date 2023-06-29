<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="18.421" width="35.5263" height="6.57895" rx="1" :fill="color" />
    <rect y="9.21057" width="35.5263" height="6.57895" rx="1" :fill="color" />
    <rect width="35.5263" height="6.57895" rx="1" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: String,
    default: '25',
  },
  width: {
    type: String,
    default: '36',
  },
  color: {
    type: String,
    default: '#407BFF',
  },
});
</script>
