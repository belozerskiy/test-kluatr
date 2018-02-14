<template>
    <form 
      method="post" 
      enctype="application/x-www-form-urlencoded" 
      class="form-signin" 
      role="form"
    >
      <h2 class="form-signin-heading">Please sign in</h2>
      <input 
        name="email" 
        v-model="email"
        maxlength="255" 
        type="email" 
        class="form-control" 
        placeholder="Email address" 
        required autofocus
      >
      <input 
        name="password"
        v-model="password" 
        maxlength="255" 
        type="password" 
        class="form-control" 
        placeholder="Password" 
        required
      >
      <label class="checkbox">
          <input 
            type="checkbox" 
            v-model="remember"
          > Remember me
      </label>
      <button 
        class="btn btn-lg btn-primary btn-block" 
        type="submit"
        @click.prevent="login"
      >
        Sign in
      </button>
      <div v-if="error" class="bg-danger error-box">
        <strong>{{ error }}</strong>
      </div>
    </form>
</template>

<script>
export default {
  name: "Login",
  props: { error: { type: String, default: "" } },
  data() {
    return {
      email: "",
      password: "",
      remember: false
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      this.$emit("save-user", { email, password });
      this.email = "";
      this.password = "";
    }
  }
};
</script>
<style>
.error-box {
  margin-top: 10px;
  padding: 20px;
}
</style>
