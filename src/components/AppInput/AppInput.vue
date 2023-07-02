<template>
  <q-input
    class="app-input"
    :placeholder="label"
    :disable="disable || loading"
    :dense="dense"
    :flat="flat"
    :readonly="readonly"
    :type="type"
    :borderless="borderless"
  >
    <template v-slot:prepend>
      <slot name="leftIcon" />
    </template>
    <template v-slot:append>
      <slot name="rightIcon" />
    </template>
    <!-- <div class="content" :style="`width: ${contentWidth}`"></div> -->
  </q-input>
</template>

<script lang="ts" setup>
const props = defineProps({
  contentWidth: {
    type: String,
    default: '100%',
  },
  type: {
    type: String,
    default: 'text',
  },
  label: {
    type: String,
    required: true,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  borderless: {
    type: Boolean,
    default: true,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  dense: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped lang="scss">
@import url('./AppInput.scss');
</style>