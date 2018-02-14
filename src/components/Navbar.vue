<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <router-link 
            tag="li"
            active-class="active"
            v-for="{ name } in menuList"
            :key="name"
            :to="name"
          >
            <a href="">{{ name | capitalize }}</a>
          </router-link>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="" @click="logOut">Exit</a>   
          </li> 
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    menuList: Array
  },
  methods: {
    logOut() {
      this.$emit("delete-user");
    }
  },
  filters: {
    capitalize(value) {
      return value[0].toUpperCase() + value.slice(1, value.length);
    }
  }
};
</script>

