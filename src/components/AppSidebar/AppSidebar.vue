<template>
  <aside class="sidebar-container">
    <div class="header">
      <component :is="LogoImage" />
      <component :is="AppLogo" />
    </div>
    <div class="main">
      <div
        v-for="sidebarItem in sidebarItems"
        :key="sidebarItem.name"
        :class="`items ${sidebarItem.isActive ? 'active' : ''}`"
        @click="setSidebarActive(sidebarItem.to)"
      >
        <span class="page">
          <component
            :is="sidebarItem.icon"
            :color="sidebarItem.isActive ? '#407BFF' : 'black'"
          />
          {{ sidebarItem.name }}
        </span>
        <component
          :is="RightArrow"
          :color="sidebarItem.isActive ? '#407BFF' : 'black'"
        />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import AppLogo from '../svgs/AppLogo.vue';
import LogoImage from '../svgs/LogoImage.vue';
import RightArrow from '../svgs/RightArrow.vue';
import Home from '../svgs/AppHome.vue';
import Menu from '../svgs/AppMenu.vue';
import Navigation from '../svgs/AppNavigation.vue';
import CreditCard from '../svgs/CreditCard.vue';
import User from '../svgs/AppUser.vue';
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
onMounted(() => {
  const routePath = route.fullPath as string;
  if (routePath) setSidebarActive(routePath);
});

const sidebarItems = ref([
  {
    name: 'dashboard',
    page: 'dashboard',
    isActive: false,
    icon: Home,
    to: '/dashboard',
  },
  {
    name: 'transactions',
    page: 'transactions',
    isActive: false,
    icon: Menu,
    to: '/transactions',
  },
  {
    name: 'transfers',
    page: 'transfers',
    isActive: false,
    icon: Navigation,
    to: '/transfers',
  },
  {
    name: 'accounts',
    page: 'accounts',
    isActive: false,
    icon: CreditCard,
    to: '/accounts',
  },
  {
    name: 'profile',
    page: 'profile',
    isActive: false,
    icon: User,
    to: '/profile',
  },
]);

function setSidebarActive(pagePath: string) {
  const previousActivePage = sidebarItems.value.find(
    ({ isActive }) => isActive
  );

  if (previousActivePage) previousActivePage.isActive = false;
  const sidebarItem = sidebarItems.value.find(({ to }) => pagePath.includes(to));
  if (sidebarItem) {
    sidebarItem.isActive = true;
    router.push(sidebarItem.to);
  }
}

watch(
  () => route.fullPath,
  (routePath) => {
    setSidebarActive(routePath as string);
  }
);
</script>

<style scoped lang="scss">
@import './AppSidebar.scss';
</style>
