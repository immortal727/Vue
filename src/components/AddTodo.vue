<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Создать</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      title: ""
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const NewTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        };
        this.$emit("add-todo", NewTodo);
        this.title = "";
      }
    }
  }
};
</script>
<style scoped>
form {
  display: flex;
}
input {
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 7rem;
  box-shadow: 2px 2px 3px rgb(131, 130, 130);
}
</style>