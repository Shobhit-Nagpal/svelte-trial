<script lang="ts">
import "./app.css";
import Navbar from "./lib/Navbar.svelte";
import Todo from "./lib/Todo.svelte";
import { todos } from "./store/store";
</script>

<main class="w-full h-full flex flex-col items-center justify-start">
<Navbar />
<div class="mt-4">
{#each $todos as todo (todo.idx)}
  <Todo todo={todo} />
{/each}
</div>
</main>
