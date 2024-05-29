<script lang="ts">
import { todos } from "../store/store";
import type {TodoType} from "../types/types";

export let todo: TodoType;

let done = "bg-green-800"
let notDone = "bg-neutral"

const priorityTextColor = {
  "urgent": "red",
  "pending": "yellow",
  "chill": "orange",
}

$: color = priorityTextColor[todo.priority];


function completeTodo() {
  todos.complete(todo.idx);
}

function deleteTodo() {
  todos.remove(todo.idx);
}

</script>

<div class="card w-96 text-neutral-content my-2 {todo.isDone ? done : notDone}">
  <div class="flex flex-col items-center text-center gap-4">
    <h2 class="card-title">{todo.name}</h2>
    <p style="color: {color}"><span class="text-white">Priority:</span> {todo.priority}</p>
    <div class="card-actions justify-end">
    <button class="btn btn-primary" on:click={completeTodo}>
      {todo.isDone ? 'Undone' : 'Done'}
    </button>
      <button class="btn btn-ghost" on:click={deleteTodo}>Delete</button>
    </div>
  </div>
</div>
