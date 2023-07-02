<template>
  <section class="personal-section">
    <p class="title">Update profile</p>
    <div class="image-section">
      <q-avatar icon="person" class="avatar" size="127px" />
      <div class="actions">
        <q-btn flat dense outlined size="md" :loading="imageLoading"
          >Remove image</q-btn
        >
        <q-btn
          flat
          dense
          outlined
          size="md"
          :loading="imageLoading"
          @click="handleImageUpdate"
          >Change image</q-btn
        >
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

          <AppInput
            class="input"
            v-model="formData.value"
            flat
            outlined
            :disable="profileFormLoading"
            :placeholder="formData.value || formData.label"
          />
        </div>
        <div class="submit-area">
          <AppButton
            flat
            class="submit"
            label="Save profile"
            :loading="profileFormLoading"
            @click="updateProfile"
          />
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

          <AppInput
            class="input"
            v-model="formData.value"
            flat
            :disable="passwordFormLoading"
            :placeholder="formData.value || formData.label"
          />
        </div>
        <div></div>
        <div class="submit-area">
          <AppButton
            flat
            class="submit"
            label="Change Password"
            :loading="passwordFormLoading"
            @click="updatePassword"
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

const profileFormLoading = ref(false);
const passwordFormLoading = ref(false);
const imageLoading = ref(false);
const image = ref<FileList | null>(null);
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

function handleImageUpdate() {
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.multiple = false;
  fileInput.accept = 'jpeg, .jpg, .png';
  fileInput.onchange = (_) => {
    image.value = fileInput.files;
    uploadImage(image.value[0] as File);
  };
  fileInput.click();
}

function uploadImage(fileValue: File) {
  console.log('uploading', fileValue);

  imageLoading.value = true;
  // TODO - save the form data to server here...
  setTimeout(() => {
    imageLoading.value = false;
  }, 5000);
}
</script>
<style scoped lang="scss">
@import url('./PersonalInfo.scss');
</style>
