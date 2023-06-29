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
        class="items"
        @click="setSidebarActive(sidebarItem.name)"
      >
        <span :class="`page ${sidebarItem.isActive ? 'active' : ''}`">
          <component
            :is="sidebarItem.icon"
            :color="sidebarItem.isActive ? '#407BFF': 'black'"
          />
          {{ sidebarItem.name }}
        </span>
        <component
          :is="RightArrow"
          :color="sidebarItem.isActive ? '#407BFF': 'black'"
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
import { ref } from 'vue';

const sidebarItems = ref([
  {
    name: 'dashboard',
    page: 'dashboard',
    isActive: false,
    icon: Home,
  },
  {
    name: 'transactions',
    page: 'transactions',
    isActive: false,
    icon: Menu,
  },
  {
    name: 'transfers',
    page: 'transfers',
    isActive: false,
    icon: Navigation,
  },
  {
    name: 'accounts',
    page: 'accounts',
    isActive: false,
    icon: CreditCard,
  },
  {
    name: 'profile',
    page: 'profile',
    isActive: false,
    icon: User,
  },
]);

function setSidebarActive(pageName: string) {
  const previousActivePage = sidebarItems.value.find(
    ({ isActive }) => isActive
  );

  if (previousActivePage) previousActivePage.isActive = false;
  const sidebarItem = sidebarItems.value.find(({ page }) => page === pageName);
  if (sidebarItem) sidebarItem.isActive = true;
}
</script>

<style scoped lang="scss">
@import './AppSidebar.scss';
</style>
