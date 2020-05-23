<template>
  <v-app>
    <v-row class="fill-height">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/home">Home</router-link>
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>
            <router-link to="/about">About</router-link>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-row>
    <!-- todos (первой значение) - переменная, которая принимает массив-->
    <TodoList v-bind:todos="todos" />
  </v-app>
</template>
<script>
import TodoList from "@/components/TodoList";
export default {
  name: "App",
  data() {
    return {
      todos: [
        { id: 1, title: "Купить хлеб", completed: false },
        { id: 2, title: "Купить масло", completed: false },
        { id: 3, title: "Купить пиво", completed: false }
      ]
    };
  },
  components: {
    TodoList
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
