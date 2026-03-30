<template>
  <component
    :is="isExternal ? 'a' : NuxtLink"
    :href="isExternal ? to : undefined"
    :to="isExternal ? undefined : to"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    class="btn-learn-more"
  >
    <span>{{ label }}</span>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { NuxtLink } from '#components'

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})

const isExternal = computed(() => /^https?:\/\//.test(props.to))
</script>

<style scoped>
.btn-learn-more {
  display: inline-block;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  color: #205b43;
  padding: 14px 36px;
  border-radius: 999px;
  background: #f2f2f2;
  border: 3px solid #205b43;
  cursor: pointer;
  box-shadow: 0 6px 0 #205b43;
  transition: all 0.15s ease;
}

.btn-learn-more span {
  display: inline-block;
}

.btn-learn-more:hover {
  transform: translateY(2px);
  box-shadow: 0 4px 0 #205b43;
}

.btn-learn-more:active {
  transform: translateY(6px);
  box-shadow: 0 0 0 #205b43;
}
</style>