<template>
  <div class="space-y-1">
    <label v-if="label" class="block text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <input
      :type="type"
      :placeholder="placeholder"
      v-model="model"
      class="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none 
             focus:ring-2 focus:ring-green-500 focus:border-green-500"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
  type?: string
}>()

const emits = defineEmits(['update:modelValue'])

const model = computed({
  get: () => props.modelValue,
  set: (value) => emits('update:modelValue', value),
})
</script>
