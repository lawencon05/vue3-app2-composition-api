<template>
  <form class="form-signin" data-testing="form-signin" @submit.prevent="login">
    <input
      type="text"
      id="username"
      placeholder="Username"
      v-model="user.email"
    />
    <input
      type="password"
      id="pass"
      placeholder="Password"
      v-model="user.pwd"
    />

    <button type="submit">LOGIN</button>
  </form>
</template>

<script setup>
import { onMounted } from "vue";
import { axios } from "../services/api";
import { isLogin, setProfile } from "../services/credential";
import { router } from "../router";

const user = {
  email: "",
  pwd: "",
};

onMounted(() => {
  if (isLogin()) {
    router.push({ name: "dashboard" });
  }
});

function login() {
  axios
    .post("/api/login", user)
    .then((res) => {
      successLogin(res.data);
    })
    .catch((err) => console.log(err));
}

function successLogin(result) {
  setProfile(
    JSON.stringify({
      id: result.id,
      token: result.token,
      roleId: result.roleId,
      email: result.email,
    })
  );

  router.push({ name: "dashboard" });
}

// export default {
//   name: "Login",
//   data() {
//     return {
//       user: {
//         email: "",
//         pwd: "",
//       },
//     };
//   },
//   mounted() {
//     if (isLogin()) {
//       router.push({ name: "dashboard" });
//     }
//   },
//   methods: {
//     login() {
//       axios
//         .post("/api/login", this.user)
//         .then((res) => {
//           this.successLogin(res.data);
//         })
//         .catch((err) => console.log(err));
//     },
//     successLogin(result) {
//       setProfile(
//         JSON.stringify({
//           id: result.id,
//           token: result.token,
//           roleId: result.roleId,
//           email: result.email,
//         })
//       );

//       router.push({ name: "dashboard" });
//     },
//   },
// };
</script>