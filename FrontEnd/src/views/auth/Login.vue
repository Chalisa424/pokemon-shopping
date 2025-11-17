<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "../../stores/auth";
import BaseInput from "../../components/BaseInput.vue";
import PasswordInput from "../../components/PasswordInput.vue";
import BaseButton from "../../components/BaseButton.vue";

const router = useRouter();
const route = useRoute();

const auth = useAuthStore();

const username = ref("");
const password = ref("");

const loading = ref(false);
const errorMessage = ref<string | null>(null);

const handleSubmit = async () => {
  errorMessage.value = null;

  if (!username.value.trim() || !password.value.trim()) {
    errorMessage.value = "กรุณากรอกข้อมูลให้ครบถ้วน";
    return;
  }

  loading.value = true;
  try {
    await auth.login(username.value.trim(), password.value);
    const redirect = (route.query.redirect as string) || "/shop";
    router.push(redirect);
  } catch (err: any) {
    errorMessage.value =
      err?.response?.data?.message ||
      "เข้าสู่ระบบไม่สำเร็จ กรุณาตรวจสอบข้อมูลอีกครั้ง";
  } finally {
    loading.value = false;
  }
};

const goToRegister = () => {
  router.push({ name: "Register" });
};
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="space-y-4">
      <BaseInput v-model="username" label="Username" />
      <PasswordInput v-model="password" label="Password" />
    </div>

    <p
      v-if="errorMessage"
      class="text-sm text-red-500 text-center leading-snug"
    >
      {{ errorMessage }}
    </p>

    <div class="space-y-3 pt-1">
      <BaseButton
        type="submit"
        color="green"
        :disabled="loading"
      >
        {{ loading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ" }}
      </BaseButton>

      <BaseButton
        type="button"
        color="blue"
        @click="goToRegister"
      >
        ลงทะเบียน
      </BaseButton>
    </div>
  </form>
</template>