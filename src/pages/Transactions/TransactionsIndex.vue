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
      <AppTable :columns="columns" :loading="loadingTransactions" :rows="rows">
        <template #rows="{ props }">
          <q-tr :props="props" class="table-rows">
            <q-td key="date" :props="props">
              {{ props.row.date }}
            </q-td>
            <q-td key="description" :props="props">
              {{ props.row.description }}
            </q-td>
            <q-td key="amount" :props="props">
              {{ props.row.amount }}
            </q-td>
            <q-td key="recipient" :props="props">
              {{ props.row.recipient }}
            </q-td>
            <q-td key="status" :props="props">
              {{ props.row.status }}
            </q-td>
          </q-tr>
        </template>
      </AppTable>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
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
  { name: 'date', field: 'date', label: 'Date', align: 'center' },
  {
    name: 'description',
    field: 'description',
    label: 'Description',
    align: 'center',
  },
  { name: 'amount', field: 'amount', label: 'Amount', align: 'center' },
  {
    name: 'recipient',
    field: 'recipient',
    label: 'Recipient',
    align: 'center',
  },
  { name: 'status', field: 'status', label: 'Status', align: 'center' },
]);

const rows = ref([]);
const loadingTransactions = ref(false);

onMounted(() => {
  loadingTransactions.value = true;
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      rows.value.push({
        date: '01 Jun 2022',
        description: 'This is the decription for the reserved wallet ',
        amount: '50000000',
        recipient: 'Moyosore Olaleye',
        status: 'pending',
      });
    }
    loadingTransactions.value = false;
  }, 5000);
});
</script>
<style scoped lang="scss">
@import url('./TransactionsIndex.scss');
</style>
