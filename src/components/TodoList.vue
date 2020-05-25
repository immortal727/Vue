<template>
  <div>
    <ul>
      <TodoItem v-for="(todo, i) of todos" v-bind:key="i" />
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