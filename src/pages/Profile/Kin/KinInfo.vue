<template>
  <section class="kin-section">
    <p class="title">Update kin information</p>

    <section class="details-container">
      <form class="group">
        <div
          class="section-items"
          v-for="formData in kinFormSection"
          :key="formData.tag"
        >
          <span class="label">
            {{ formData.label }}
          </span>

          <q-input
            class="input"
            v-model="formData.value"
            flat
            outlined
            :disable="kinFormLoading"
            :placeholder="formData.value || formData.label"
          />
        </div>
        <div></div>
        <div class="submit-area">
          <q-btn
            flat
            class="submit"
            :loading="kinFormLoading"
            @click="updateProfile"
            >update information</q-btn
          >
        </div>
      </form>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const kinFormLoading = ref(false);
const kinFormSection = ref([
  {
    label: 'First name',
    tag: 'first_name',
    value: null,
  },
  {
    label: 'Last name',
    tag: 'last_name',
    value: null,
  },
  {
    label: 'Relationship',
    tag: 'relationship',
    value: null,
  },
  {
    label: 'Address',
    tag: 'address',
    value: null,
  },
  {
    label: 'Email',
    tag: 'email',
    value: null,
  },
  {
    label: 'Phone number',
    tag: 'phone',
    value: null,
  },
]);

const passwordFormSection = ref([
  {
    label: 'Old password',
    tag: 'old_password',
    value: null,
  },
  {
    label: 'New password',
    tag: 'new_password',
    value: null,
  },
]);

function updateProfile() {
  kinFormLoading.value = true;
  // TODO - save the form data to server here...
  setTimeout(() => {
    kinFormLoading.value = false;
  }, 5000);
}
function updatePassword() {
  passwordFormLoading.value = true;
  // TODO - save the form data to server here...
  setTimeout(() => {
    passwordFormLoading.value = false;
  }, 5000);
}
</script>
<style scoped lang="scss">
@import url('./KinInfo.scss');
</style>
