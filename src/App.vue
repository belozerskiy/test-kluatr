<template>
  <container>
    <router-view 
      @save-user="saveUser"
      @update-user="updateUser"
      @delete-user="deleteUser"
      :error="error"
    >
    </router-view>    
  </container>
</template>

<script>
import Container from "@/components/Container";
import * as api from "@/api";

export default {
  name: "App",
  data() {
    return { error: "" };
  },
  components: {
    Container
  },
  methods: {
    saveUser(user) {
      const { email, password } = user;
      api
        .logIn(email, password)
        .then(response => {
          if (response.data.success) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
            this.$router.push("orders");
          }
        })
        .catch(error => {
          this.error = error.response.data.error;
        });
    },
    updateUser(name) {
      api.updateUser(name).then(response => {
        if (response.data.success) {
          const user = JSON.parse(localStorage.getItem("user"));
          user.name = name;
          localStorage.setItem("user", JSON.stringify(user));
        }
      });
    },
    deleteUser() {
      api.logOut().then(response => {
        if (response.data.success) {
          localStorage.setItem("user", "");
          this.$router.push("login");
        }
      });
    }
  }
};
</script>
