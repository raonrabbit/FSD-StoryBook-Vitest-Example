import { useSelector } from "react-redux";
import { selectTodos } from "@/entities/todo/model";
import { TodoListItem } from "./TodoListItem";

export function TodoList() {
  const todos = useSelector(selectTodos);

  return (
    <ul className="w-full h-full p-4 bg-white rounded-xl shadow-md space-y-2 overflow-y-scroll scrollbar-hide">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
