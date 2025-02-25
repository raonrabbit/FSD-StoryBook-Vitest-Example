import { AddTodo } from "@/features/add-todo/ui";
import { TodoList } from "@/features/todo-list/ui";

export function TodoWidget() {
  return (
    <div className="w-full h-full max-w-2xl flex flex-col gap-4">
      <AddTodo />
      <TodoList />
    </div>
  );
}
