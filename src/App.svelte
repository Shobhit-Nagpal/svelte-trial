<script lang="ts">
import Todo from "./lib/Todo.svelte";

const todos = [
{
  name: "Wash dishes",
  id: "1",
  priority: "urgent",
},
{
  name: "Fold clothes",
  id: "2",
  priority: "eh",
},
{
  name: "Bathe",
  id: "3",
  priority: "no need",
},
];
</script>

<main>
{#each todos as todo (todo.id)}
  <Todo todo={todo} />
{/each}
</main>
