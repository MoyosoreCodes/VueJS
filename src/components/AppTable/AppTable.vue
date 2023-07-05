<template>
  <div :class="`app-table-container ${bordered ? 'bordered' : ''}`">
    <table class="app-table">
      <thead class="app-table__header">
        <tr v-if="isHeaderCustomized">
          <th
            class="app-table__header__row_item"
            v-for="column in columns"
            :key="column?.name"
            :align="column.align || 'left'"
          >
            {{ column?.label }}
          </th>
        </tr>
      </thead>
      <tbody v-if="isRowCustomized">
        <tr v-for="(row, index) in rows" :key="index" :class="customRowClass">
          <td
            :class="customItemClass"
            v-for="column in columns"
            :key="column?.name"
            :align="column.align || 'left'"
          >
            <div v-if="shouldCustomizeCell(column.name)">
              <slot :name="column?.name" :value="row[column.name]" />
            </div>
            <div v-else>
              {{ row[column.name] }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';

const isRowCustomized = computed(() => {
  return (props.columns?.length || props.rows?.length) && props.customizeRows;
});
const isHeaderCustomized = computed(() => {
  return props.columns?.length && props.customizeHeader;
});
function shouldCustomizeCell(columnName) {
  if (props.customizeCells?.length) {
    return props.customizeCells.includes(columnName as string);
  }
}

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
  customRowClass: {
    type: String,
    default: 'app-table__body',
  },
  customItemClass: {
    type: String,
    default: 'app-table__body_row_item',
  },
  customizeCells: {
    type: Array,
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
