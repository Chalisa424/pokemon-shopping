<template>
      <div class="space-y-1">
    <label v-if="label" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <div class="relative">
      <input
        :type="show ? 'text' : 'password'"
        :placeholder="placeholder"
        v-model="model"
        class="w-full border rounded-lg px-3 py-2 text-sm pr-10 focus:outline-none 
               focus:ring-2 focus:ring-green-500 focus:border-green-500"
      />

      <button
        type="button"
        class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 text-xs"
        @click="show = !show"
      >
        {{ show ? 'ซ่อน' : 'แสดง' }}
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
