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
          <span
            @click="setActiveFilter(index)"
            :class="`${isActiveFilter === status.label ? 'active' : ''}`"
            >{{ status.label }}</span
          >
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
      <AppTable
        :columns="columns"
        :loading="loadingTransactions"
        :rows="rows"
        customize-header
        customize-rows
        :customize-cells="['status', 'amount']"
      >
        <template v-slot:status="{ value }">
          <component
            :is="AppBadge"
            :text="value"
            :backgroundColor="statusColors[value].background"
          />
        </template>
        <template v-slot:amount="{ value }">
          {{ formatCurrency(value, 'USD') }}
        </template>
      </AppTable>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import AppButton from 'src/components/AppButton/AppButton.vue';
import ArrowDown from 'src/components/svgs/ArrowDown.vue';
import AppDownload from 'src/components/svgs/AppDownload.vue';
import AppTable from 'src/components/AppTable/AppTable.vue';
import AppBadge from 'src/components/AppBadge/AppBadge.vue';
import { formatCurrency } from 'src/helpers/formatCurrency';

const transactionStatus = ref([
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Dispute', value: 'dispute' },
  { label: 'Completed', value: 'completed' },
]);

const statusColors = {
  Completed: { textColor: '', background: '#D1D1FF' },
  Pending: { textColor: '', background: 'rgba(255, 191, 0, 0.30)' },
  Dispute: { textColor: '', background: '#FFB6B6' },
};

const activeFilter = ref({ label: 'All', value: 'all' });

const columns = ref([
  {
    name: 'date',
    field: 'date',
    label: 'Date',
    align: 'left',
  },
  {
    name: 'description',
    field: 'description',
    label: 'Description',
    align: 'left',
  },
  {
    name: 'amount',
    field: 'amount',
    label: 'Amount',
    align: 'center',
  },
  {
    name: 'recipient',
    field: 'recipient',
    label: 'Recipient',
    align: 'center',
  },
  {
    name: 'status',
    field: 'status',
    label: 'Status',
    align: 'center',
  },
]);

const rows = ref([]);
const loadingTransactions = ref(false);

function setActiveFilter(index?: number) {
  let filter;
  if (index !== undefined) {
    filter = transactionStatus.value[index];
  } else {
    filter = transactionStatus.value[0];
  }
  activeFilter.value = filter;
  fetchTransactions(activeFilter.value?.label);
}

const isActiveFilter = computed(() => {
  return activeFilter?.value?.label;
});

function fetchTransactions(statusFilter?: string) {
  resetTransaction();
  if (statusFilter && statusFilter !== 'All') {
    rows.value = rows.value.filter((row) => {
      return statusFilter === row?.status;
    });
  }
}

function resetTransaction() {
  rows.value = [];
  for (let i = 0; i < 5; i++) {
    rows.value.push(
      {
        date: '01 Jun 2022',
        description: 'This is the decription for the reserved wallet ',
        amount: 50000000,
        recipient: 'Moyosore Olaleye',
        status: 'Pending',
      },
      {
        date: '01 Jun 2022',
        description: 'This is the decription for the reserved wallet ',
        amount: 275000600,
        recipient: 'Moyosore Olaleye',
        status: 'Completed',
      },
      {
        date: '01 Jun 2022',
        description: 'This is the decription for the reserved wallet ',
        amount: 90826000,
        recipient: 'Moyosore Olaleye',
        status: 'Dispute',
      }
    );
  }
}

onMounted(() => {
  loadingTransactions.value = true;

  fetchTransactions(activeFilter.value?.label);
  loadingTransactions.value = false;
});
</script>
<style scoped lang="scss">
@import url('./TransactionsIndex.scss');
</style>
