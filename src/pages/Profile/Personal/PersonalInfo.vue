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
      <form action="" class="profile-group">
        <div
          class="profile-section-items"
          v-for="formData in profileFormData"
          :key="formData.tag"
        >
          <label class="label">
            {{ formData.label }}
          </label>
          <q-input
            v-model="formData.value"
            flat
            outlined
            class="input"
            :placeholder="formData.value || formData.label"
          />
        </div>
        <q-btn flat class="submit">save profile</q-btn>
      </form>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
</script>
<style scoped lang="scss">
@import url('./PersonalInfo.scss');
</style>
