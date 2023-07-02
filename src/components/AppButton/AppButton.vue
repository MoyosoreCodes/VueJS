<template>
  <q-btn
    class="app-button"
    no-caps
    :outline="outline"
    :flat="flat"
    :disable="disable || loading"
    :loading="loading"
    :unelevated="unelevated"
    :align="setLabelPosition"
    :padding="buttonPadding"
    :ripple="ripple"
  >
    <div class="content" :style="`width: ${contentWidth}`">
      <slot name="left-content" :props="props" />
      <span>
        {{ label }}
      </span>
      <slot name="right-content" :props="props" />
    </div>
  </q-btn>
</template>

<script setup lang="ts">
const props = defineProps({
  ripple: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  flat: {
    type: Boolean,
    default: false,
  },
  disable: {
    type: Boolean,
    default: false,
  },
  unelevated: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  btnClass: {
    type: String,
  },
  label: {
    type: String,
    required: true,
  },
  buttonPadding: {
    type: String,
    default: () => '8px 12px 8px 12px',
  },
  labelLeft: {
    type: Boolean,
    default: false,
  },
  labelRight: {
    type: Boolean,
    default: false,
  },
  contentWidth: {
    type: String,
    default: '100%'
  }
});

import { computed } from 'vue';

const setLabelPosition = computed(() => {
  if (props.labelLeft) return 'left';
  if (props.labelRight) return 'right';
  else return 'left';
});
</script>
<style scoped lang="scss">
@import url('./AppButton.scss');
</style>
