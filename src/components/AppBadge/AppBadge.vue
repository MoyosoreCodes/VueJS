<template>
  <span
    class="app-badge"
    :style="`background: ${backgroundColor}; color: ${textColor}`"
  >
    {{ text }}
  </span>
</template>
<script lang="ts" setup>
defineProps({
  backgroundColor: {
    type: String,
    default: '#EAEAEA',
  },
  textColor: {
    type: String,
    default: 'black',
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
<style scoped lang="scss">
@import url('./AppBadge.scss');
</style>
