import { AddTodo, TodoList } from "@/features/todo";

export function TodoWidget() {
  return (
    <div className="w-full h-full max-w-2xl flex flex-col gap-4">
      <AddTodo />
      <TodoList />
    </div>
  );
}
