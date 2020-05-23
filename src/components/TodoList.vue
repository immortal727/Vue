<template>
  <div>
    <ul>
      <!-- {{todos}}
      <TodoItem />-->
      <TodoItem v-for="todo of todos" v-bind:todo="todo" />
    </ul>
  </div>
</template>
<script>
import TodoItem from "@/components/TodoItem";
export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>