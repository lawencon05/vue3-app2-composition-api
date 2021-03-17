<template>
  <h2>Welcome, {{ email }}</h2>
  <button @click="goToUser()">User</button>
  <button @click="logout">Logout</button>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { getProfile, clearProfile } from "../services/credential";
import { router } from "../router";

let email = ref("");

onMounted(() => {
  email.value = getProfile().email;
});

function goToUser() {
  router.push({ name: "user" });
}

function logout() {
  clearProfile();
  router.push({ name: "login" });
}

// export default {
//   name: "Dashboard",
//   data() {
//     return {
//       email: "",
//     };
//   },
//   mounted() {
//     this.email = getProfile().email;
//   },
//   methods: {
//     goToUser() {
//       router.push({ name: "user" });
//     },
//     logout() {
//       clearProfile();
//       router.push({ name: "login" });
//     },
//   },
// };
</script>
