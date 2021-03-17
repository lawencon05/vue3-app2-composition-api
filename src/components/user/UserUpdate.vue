<template>
  <h2>User update : {{ data }}</h2>
  <input type="text" v-model="userUpdate" />
  <button @click="back">Back</button>
</template>

<script setup>
import { onMounted, watch, ref } from "vue";
import { useRoute } from "vue-router";
import { router } from "../../router";

const userUpdate = ref("");
const data = ref("");

onMounted(() => {
  data.value = useRoute().params.name;
});

watch(userUpdate, (newData, oldData) => {
  console.log("new :", newData, " - old :", oldData);
});

function back() {
  router.back();
}

// export default {
//   data() {
//     return {
//       userUpdate: "",
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
//   watch: {
//     userUpdate(newData, oldData) {
//       console.log("new :", newData, " - old :", oldData);
//     },
//   },
// };
</script>