<template>
  <div class="space-y-1.5">
    <label v-if="label" class="block text-base font-medium text-slate-700">
      {{ label }}
    </label>

    <div class="relative">
      <input
        :type="show ? 'text' : 'password'"
        :placeholder="placeholder"
        v-model="model"
        class="w-full border border-slate-300 rounded-lg px-3 py-2.5 pr-11 text-base
               focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
      />

      <button
        type="button"
        class="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-600"
        @click="show = !show"
      >
        <!-- ไอคอนตา / ปิดตา แบบ SVG -->
        <svg
          v-if="!show"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.7"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 3l18 18M10.477 10.49A3 3 0 0113.5 13.5m-2.121 2.121A3 3 0 019 9m9.879 3.5C17.605 7.443 13.814 4.5 9.337 4.5A9.77 9.77 0 004.5 6.03M9.88 18.12A9.77 9.77 0 0014.663 19.5c4.477 0 8.268-2.943 9.542-7a10.45 10.45 0 00-1.233-2.62"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
}>()

const emits = defineEmits(['update:modelValue'])

const show = ref(false)

const model = computed({
  get: () => props.modelValue,
  set: (val) => emits('update:modelValue', val),
})
</script>
