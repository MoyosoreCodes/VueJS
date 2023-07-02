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

          <AppInput
            class="input"
            v-model="formData.value"
            flat
            borderless
            :disable="kinFormLoading"
            :placeholder="formData.value || formData.label"
          />
        </div>
        <div></div>
        <div class="submit-area">
          <AppButton
            flat
            class="submit"
            label="Update information"
            :loading="kinFormLoading"
            @click="updateProfile"
          />
        </div>
      </form>
    </section>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AppButton from 'src/components/AppButton/AppButton.vue';
import AppInput from 'src/components/AppInput/AppInput.vue';

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

function updateProfile() {
  kinFormLoading.value = true;
  // TODO - save the form data to server here...
  setTimeout(() => {
    kinFormLoading.value = false;
  }, 5000);
}
</script>
<style scoped lang="scss">
@import url('./KinInfo.scss');
</style>
