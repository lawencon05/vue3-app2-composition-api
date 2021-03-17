<template>
  <h2>User detail : {{ data }}</h2>
  <button @click="back">Back</button>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { router } from "../../router";

const data = ref("");

onMounted(() => {
  data.value = useRoute().params.name;
});

function back() {
  router.back();
}

// export default {
//   data() {
//     return {
//       data: "",
//     };
//   },
//   mounted() {
//     this.data = useRoute().params.name;
//   },
//   methods: {
//     back() {
//       router.back();
//     },
//   },
// };
</script>