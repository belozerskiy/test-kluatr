<template>
  <div>
    <navbar :menuList="menuList" @delete-user="deleteUser" />
    <router-view @save-user="saveUser" @update-user="updateUser"></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Main",
  data() {
    return {
      menuList: [{ name: "orders" }, { name: "profile" }]
    };
  },
  methods: {
    saveUser(value) {
      this.$emit("save-user", value);
    },
    updateUser(value) {
      this.$emit("update-user", value);
    },
    deleteUser() {
      this.$emit("delete-user");
    }
  },
  components: {
    Navbar
  }
};
</script>
