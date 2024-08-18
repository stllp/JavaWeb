<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import Login from './components/login.vue'
const router = useRouter()
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
