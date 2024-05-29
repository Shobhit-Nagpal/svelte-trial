import { writable } from "svelte/store";
import type { TodoType } from "../types/types";

function createTodos() {
  const todoArr: TodoType[] = [
    {
      name: "Welcome",
      isDone: false,
      priority: "chill",
      idx: Date.now(),
    },
  ];
  const { subscribe, update } = writable(todoArr);
  return {
    subscribe,
    add: (todo: TodoType) =>
      update((todoArr) => {
        todoArr.push(todo);
        return todoArr;
      }),
    remove: (idx: number) =>
      update((todoArr) => todoArr.filter((todo) => todo.idx !== idx)),
    complete: (idx: number) =>
      update((todoArr) =>
        todoArr.map((todo) =>
          todo.idx === idx ? { ...todo, isDone: !todo.isDone } : todo,
        ),
      ),
  };
}

export const todos = createTodos();
