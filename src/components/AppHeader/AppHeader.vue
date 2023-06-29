<template>
  <q-header class="header-container">
    <div class="items">
      <div class="left">
        <div class="menu-btn" v-if="showToggleSidebarButton">
          <q-btn icon="menu" flat dense @click="showSidebar"/>
        </div>
        <div
          class="breadcrumb"
          v-for="(item, index) in breadcrumb"
          :key="item.label"
        >
          <span class="item" @click="goToPage(item.url)">{{ item.label }}</span>
          <span class="q-mx-xs" v-if="index < breadcrumb.length - 1">></span>
        </div>
      </div>
    </div>
  </q-header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
const emit = defineEmits(['toggleSidebar'])

const quasar = useQuasar();
const route = useRoute();
const router = useRouter();

const breadcrumb = computed(() => {
  const fullPath = route.fullPath;
  const routeItems = fullPath.split('/');
  let url = '';
  let breadCrumbData: { label: string; url: string }[] = [];

  for (let i = 1; i < routeItems.length; i++) {
    const route = routeItems[i];
    const label = `${route.toUpperCase()[0]}${route.slice(1)}`;
    url += `/${routeItems[i]}`;

    breadCrumbData.push({
      url,
      label,
    });
  }
  return breadCrumbData;
});

const showToggleSidebarButton = computed(() => {
  return quasar.screen.lt.md || quasar.platform.is.mobile;
});

function goToPage(url: string) {
  router.push(url);
}

function showSidebar() {
  emit('toggleSidebar')
}
</script>

<style scoped lang="scss">
@import './AppHeader.scss';
</style>
