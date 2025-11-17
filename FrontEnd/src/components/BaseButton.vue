<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'w-full rounded-lg py-2.5 text-base font-semibold text-white transition-colors',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      color === 'green'
        ? 'bg-emerald-500 hover:bg-emerald-600'
        : color === 'blue'
        ? 'bg-blue-600 hover:bg-blue-700'
        : 'bg-gray-500 hover:bg-gray-600'
    ]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  color?: 'green' | 'blue' | 'gray'
}>()
</script>
