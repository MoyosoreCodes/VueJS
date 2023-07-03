<template>
  <main class="transaction-container">
    <div class="header">
      <span class="title">All Transactions</span>
      <span class="filters">
        <div
          class="filter-items"
          v-for="(status, index) in transactionStatus"
          :key="index"
        >
          <span>{{ status.label }}</span>
        </div>
      </span>

      <div class="actions">
        <AppButton
          outline
          flat
          label-left
          label="Filter"
          class="button"
          content-width="100px"
        >
          <template #right-content>
            <component :is="ArrowDown" color="#0161B1" />
          </template>
        </AppButton>
        <AppButton
          outline
          flat
          label-left
          label="Download"
          class="button"
          content-width="120px"
        >
          <template #right-content>
            <component :is="AppDownload" color="#0161B1" />
          </template>
        </AppButton>
      </div>
    </div>

    <div class="content">
      <AppTable :columns="columns"> </AppTable>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from 'src/components/AppButton/AppButton.vue';
import ArrowDown from 'src/components/svgs/ArrowDown.vue';
import AppDownload from 'src/components/svgs/AppDownload.vue';
import AppTable from 'src/components/AppTable/AppTable.vue';

const transactionStatus = ref([
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Failed', value: 'failed' },
  { label: 'Completed', value: 'completed' },
]);

const columns = ref([
  { name: 'date', label: 'Date', align:'center' },
  { name: 'description', label: 'Description', align:'center' },
  { name: 'amount', label: 'Amount', align:'center' },
  { name: 'recipient', label: 'Recipient', align:'center' },
  { name: 'status', label: 'Status', align:'center' },
]);
</script>
<style scoped lang="scss">
@import url('./TransactionsIndex.scss');
</style>
