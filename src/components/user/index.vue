<template>
  <h2>List of User</h2>
  <ul>
    <li v-for="(data, index) in datas" :key="index">
      <router-link :to="{ name: 'user-update', params: { name: data } }"
        >{{ data }} update</router-link
      >
      &nbsp;
      <button class="detail" @click="showDetail(data)">
        {{ data }} detail
      </button>
    </li>
  </ul>
</template>

<script setup>
import { router } from "../../router";

const datas = ["john1", "john2", "john3", "john4", "john5"];

function showDetail(data) {
  router.push({ name: "user-view", params: { name: data } });
}

// export default {
//   data() {
//     return {
//       datas: ["john1", "john2", "john3", "john4", "john5"],
//     };
//   },
//   methods: {
//     showDetail(data) {
//       router.push({ name: "user-view", params: { name: data } });
//     },
//   },
// };
</script>