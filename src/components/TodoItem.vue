<template>
  <li>{{todo.title}}</li>
</template>
<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      requied: true
    }
  }
};
</script>