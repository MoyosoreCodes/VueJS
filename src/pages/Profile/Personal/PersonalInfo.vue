<template>
  <p class="title">Update profile</p>
  <section class="form-container">
    <div class="image-section">
      <q-avatar icon="person" class="avatar" size="127px" />
      <div class="actions">
        <q-btn flat dense outlined size="md">Remove image</q-btn>
        <q-btn flat dense outlined size="md">Change image</q-btn>
      </div>
    </div>

    <section class="details-container">
      <form class="profile-group">
        <div
          class="profile-section-items"
          v-for="formData in profileFormData"
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
        <q-btn
          flat
          class="submit"
          :loading="profileFormLoading"
          @click="updateProfile"
          >save profile</q-btn
        >
      </form>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const profileFormLoading = ref(false);
const profileFormData = ref([
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

function updateProfile() {
  profileFormLoading.value = true;
  // TODO - save the form data to server here...
  setTimeout(() => {
    profileFormLoading.value = false;
  }, 5000);
}
</script>
<style scoped lang="scss">
@import url('./PersonalInfo.scss');
</style>
