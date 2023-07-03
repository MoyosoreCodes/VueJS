<template>
  <div>
    <q-table
      :rows="rows"
      :columns="columns"
      :loading="loading"
      flat
      class="app-table"
      separator="none"
    >
      <template v-if="customizedHeader" v-slot:header="props">
        <!-- <slot name="header" :props="props" /> -->
        <q-tr :props="props" class="app-table-header">
          <q-th v-for="column in columns" :key="column.name" :props="props">
            {{ column.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-if="customizedRows" v-slot:body="props">
        <slot name="rows" :props="props" />
      </template>
    </q-table>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  rows: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  customizedHeader: {
    type: Boolean,
    default: true,
  },
  customizedRows: {
    type: Boolean,
    default: true,
  },
});
</script>
<style scoped lang="scss">
@import url('./AppTable.scss');
</style>
