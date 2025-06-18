<template>
  <i v-if="type === 'material'" class="material-icons" :class="className">{{ name }}</i>
  <span v-else-if="type === 'outlined'" class="material-symbols-outlined" :class="className">{{ name }}</span>
  <span v-else-if="type === 'rounded'" class="material-symbols-rounded" :class="className">{{ name }}</span>
  <i v-else-if="type === 'prime'" class="pi" :class="`pi-${name} ${className}`"></i>
</template>

<script setup lang="ts">
interface Props {
  name: string
  type?: 'material' | 'outlined' | 'rounded' | 'prime'
  className?: string
}

withDefaults(defineProps<Props>(), {
  type: 'material',
  className: ''
})
</script>
