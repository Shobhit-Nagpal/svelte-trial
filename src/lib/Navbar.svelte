<script lang="ts">
let isModalOpen = false
import { todos } from "../store/store";
    import type { TodoType } from "../types/types";

let taskName = "";
let taskPriority = "Priority";

function addTodo(e: Event) {
  e.preventDefault(); 

  if (taskName.trim() !== "" && (taskPriority === 'urgent' || taskPriority === 'pending' || taskPriority === 'chill')) {
    const newTodo: TodoType = {
      name: taskName,
      priority: taskPriority,
      isDone: false,
      idx: Date.now()
    }

    todos.add(newTodo);
    taskPriority = "Priority";
    taskName = ""
    isModalOpen = false;
  }
}
</script>

<div class="navbar bg-primary">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
    </div>
    <a href="/" class="btn btn-ghost text-xl">TodoDeez</a>
  </div>
  <div class="navbar-end">
    <!-- Open the modal using ID.showModal() method -->
    <button class="btn modal-button" on:click={() => isModalOpen = true}>Add todo</button>
    <div class="modal" class:modal-open={isModalOpen}>
      <div class="modal-box">
        <h3 class="font-bold text-lg mb-4">Add a todo</h3>
        <form on:submit={addTodo}>

        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" on:click={() => isModalOpen = false}>✕</button>
          <div class="flex flex-col gap-4">
            <label class="input input-bordered flex items-center gap-2">
              <input type="text" class="grow" placeholder="Task name" bind:value={taskName} />
            </label>
            <select class="select select-primary w-full max-w-xs" bind:value={taskPriority}>
              <option disabled selected>Priority</option>
              <option value="urgent">Urgent</option>
              <option value="pending">Pending</option>
              <option value="chill">Chill</option>
            </select>
          </div>
          <div class="modal-action">
            <!-- 🔵 set false on click -->
            <button type="submit" class="btn">Add!</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
