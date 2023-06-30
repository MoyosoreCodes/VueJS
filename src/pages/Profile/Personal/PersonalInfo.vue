<template>
  <section class="personal-section">
    <p class="title">Update profile</p>
    <div class="image-section">
      <q-avatar icon="person" class="avatar" size="127px" />
      <div class="actions">
        <q-btn flat dense outlined size="md">Remove image</q-btn>
        <q-btn flat dense outlined size="md">Change image</q-btn>
      </div>
    </div>

    <section class="details-container">
      <form class="group">
        <div
          class="section-items"
          v-for="formData in profileFormSection"
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
            :disable="profileFormLoading"
            :placeholder="formData.value || formData.label"
          />
        </div>
        <div class="submit-area">
          <q-btn
            flat
            class="submit"
            :loading="profileFormLoading"
            @click="updateProfile"
            >save profile</q-btn
          >
        </div>
      </form>
    </section>

    <p class="title">Change password</p>
    <section class="details-container">
      <form class="group">
        <div
          class="section-items"
          v-for="formData in passwordFormSection"
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
            :disable="passwordFormLoading"
            :placeholder="formData.value || formData.label"
          />
        </div>
        <div></div>
        <div class="submit-area">
          <q-btn
            flat
            class="submit"
            :loading="passwordFormLoading"
            @click="updatePassword"
            >Change Password</q-btn
          >
        </div>
      </form>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const profileFormLoading = ref(false);
const passwordFormLoading = ref(false);
const profileFormSection = ref([
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
    label: 'Date of birth',
    tag: 'date_of_birth',
    value: null,
  },
  {
    label: 'Address',
    tag: 'address',
    value: null,
  },
  {
    label: 'City',
    tag: 'city',
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
  profileFormLoading.value = true;
  // TODO - save the form data to server here...
  setTimeout(() => {
    profileFormLoading.value = false;
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
@import url('./PersonalInfo.scss');
</style>
