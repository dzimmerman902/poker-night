<template>
  <div class="card mb-5">
    <Menubar :model="items" />
  </div>
  <slot />
</template>

<style scoped>
img {
  width: 50px;
}
</style>

<script setup>
import { ref } from 'vue';

const items = ref([
  { label: 'Poker Night' }
])
</script>
