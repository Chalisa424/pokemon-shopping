<template>
    <button
    :type="type"
    :disabled="disabled"
    :class="[
        'w-full rounded-lg py-2 text-sm font-semibold text-white transition-color',
        disabled ? 'opacity-50 cursor-not-allowed':'',
        color === 'green'
        ? 'bg-green-500 hover:bg-green-600'
        : color === 'blue'
        ? 'bg-blue-500 hover:bg-blue-600'
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