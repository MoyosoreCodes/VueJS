<template>
  <div>
    <q-table
      :rows="rows"
      :columns="columns"
      :loading="loading"
      flat
      class="app-table"
    >
      <template v-if="customizedHeader" v-slot:header="props">
        <!-- <slot name="header" :props="props" /> -->
        <q-tr :props="props" class="app-table-header">
          <q-th
            v-for="column in columns"
            :key="column.name"
            :props="props"
          >
            {{ column.label }}
          </q-th>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script lang="ts" setup>
defineProps({
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
  },
  customizedHeader: {
    type: Boolean,
    default: true,
  },
});
</script>
<style scoped lang="scss">
@import url('./AppTable.scss');
</style>
