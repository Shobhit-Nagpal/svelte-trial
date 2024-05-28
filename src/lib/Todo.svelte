<script lang="ts">
  export let todo;
</script>

<div class="todo">
  <h1>{todo.name}</h1>
  <h3>{todo.id}</h3>
  <h3>{todo.priority}</h3>
</div>

<style>
.todo {
  border: 5px solid pink;
  border-radius: 40px;
  padding: 2px;
  margin: 69px;
}

.todo h1 {
  color: red;
}

.todo h3 {
  color: green;
}
</style>
