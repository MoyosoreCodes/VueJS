<template>
  <main>
    <span class="tabs" no-caps align="left" dense>
      <span
        :class="`item ${tabItem.isActive ? 'active' : ''}`"
        v-for="(tabItem, index) in tabs"
        :key="index"
        @click="setActiveTab(tabItem.to)"
      >
        {{ tabItem.name }}</span
      >
    </span>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
onMounted(() => {
  const routePath = route.fullPath as string;
  if (routePath) setActiveTab(routePath);
});

const tabs = ref([
  {
    name: 'Personal information',
    page: 'personal',
    isActive: false,
    to: '/profile/personal',
  },
  {
    name: 'Kin information',
    page: 'kin',
    isActive: false,
    to: '/profile/kin',
  },
]);

function setActiveTab(tabPage: string) {
  const previousActivePage = tabs.value.find(({ isActive }) => isActive);

  if (previousActivePage) previousActivePage.isActive = false;
  const sidebarItem = tabs.value.find(({ to }) => tabPage.includes(to));
  if (sidebarItem) {
    sidebarItem.isActive = true;
    router.push(sidebarItem.to);
  }
}

watch(
  () => route.fullPath,
  (routePath) => {
    setActiveTab(routePath);
  }
);
</script>
<style scoped lang="scss">
@import url('./ProfileIndex.scss');
</style>
