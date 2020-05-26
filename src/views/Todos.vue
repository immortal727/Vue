<template>
  <v-app>
    <router-link to="/">Home</router-link>
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">Все</option>
      <option value="completed">Completed</option>
      <option value="not-complited">Not complited</option>
    </select>
    <!-- todos (первой значение) - переменная, которая принимает массив-->
    <!-- @ заменяет директиву v-on -->
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <p v-else>Нет записей</p>
  </v-app>
</template>
<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";
export default {
  name: "App",
  components: {
    TodoList,
    AddTodo,
    Loader
  },
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all"
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 1000);
      });
  },
  // watch: {
  //   // Отслеживаем переменные
  //   filter(value) {
  //     console.log(value);
  //   }
  // },
  // Вычисляемое свойство
  computed: {
    // Функция filteredTodos используется как простая переменная
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "completed") {
        return this.todos.filter(t => t.completed);
      }
      if (this.filter === "not-complited") {
        return this.todos.filter(t => !t.completed);
      }
    }
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    }
  }
};
</script>
<style lang="scss">
</style>
