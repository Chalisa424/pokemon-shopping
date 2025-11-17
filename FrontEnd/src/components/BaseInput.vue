<template>
  <div class="space-y-1.5">
    <label v-if="label" class="block text-base font-medium text-slate-700">
      {{ label }}
    </label>

    <input
      :type="type"
      :placeholder="placeholder"
      v-model="model"
      class="w-full border border-slate-300 rounded-lg px-3 py-2.5 text-base
             focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400"
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
