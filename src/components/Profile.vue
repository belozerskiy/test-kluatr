<template>
  <div class="jumbotron">
    <div class="row">
      <div class="col-md-2">
        Name
      </div>
      <div class="col-md-10">
        <template v-if="!isEdit">{{ user.name }}</template>
        <template v-else>
          <input 
            type="text" 
            class="form-control" 
            placeholder="Примеров Пример Примерович"
            v-model="user.name"  
          >
        </template>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        Email
      </div>
    <div class="col-md-10">{{ user.email }}</div>
    </div>
      <div class="row">
        <div class="col-md-4">
          <button 
            class="btn btn-lg btn-primary btn-block" 
            type="submit"
            @click="editChange"
          >
            {{ text }}
          </button>
        </div>
        <div class="col-md-8"></div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      user: { email: "", name: "" },
      text: "Edit"
    };
  },
  mounted() {
    const userRawString = localStorage.getItem("user");
    if (userRawString !== "") this.user = JSON.parse(userRawString);
  },
  computed: {
    isEdit() {
      return this.text === "Save";
    }
  },
  methods: {
    editChange() {
      if (this.text === "Edit") this.text = "Save";
      else {
        this.$emit("update-user", this.user.name);
        this.text = "Edit";
      }
    }
  }
};
</script>
