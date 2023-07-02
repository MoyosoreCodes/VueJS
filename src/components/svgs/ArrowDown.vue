<template>
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0.195262 0.528636C0.455612 0.268287 0.877722 0.268287 1.13807 0.528636L4.66667 4.05723L8.19526 0.528636C8.45561 0.268287 8.87772 0.268287 9.13807 0.528636C9.39842 0.788986 9.39842 1.2111 9.13807 1.47145L5.13807 5.47145C4.87772 5.73179 4.45561 5.73179 4.19526 5.47145L0.195262 1.47145C-0.0650874 1.2111 -0.0650874 0.788986 0.195262 0.528636Z"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  height: {
    type: String,
    default: '6',
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
