<template>
  <div :class="`app-table-container ${bordered ? 'bordered' : ''}`">
    <table class="app-table">
      <thead class="app-table__header">
        <tr v-if="columns?.length && customizeHeader">
          <th
            class="app-table__header__row_item"
            v-for="column in columns"
            :key="column?.name"
            :align="column.align ? column.align : 'left'"
          >
            {{ column?.label }}
          </th>
        </tr>
      </thead>
      <tbody
        v-if="(columns?.length || rows?.length) && customizeRows"
      >
        <tr v-for="(row, index) in rows" :key="index" class="app-table__body">
          <td
            class="app-table__body_row_item"
            v-for="column in columns"
            :key="column?.name"
            :align="column.align ? column.align : 'left'"
          >
            {{ row[column.name] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';

const props = defineProps({
  rows: {
    type: Array,
  },
  columns: {
    type: Array,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  customizeHeader: {
    type: Boolean,
    default: false,
  },
  customizeRows: {
    type: Boolean,
    default: false,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped lang="scss">
@import url('./AppTable.scss');
</style>
