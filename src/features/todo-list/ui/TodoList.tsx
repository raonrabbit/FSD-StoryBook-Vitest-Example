import { useSelector, useDispatch } from "react-redux";
import { selectTodos, toggleTodo, removeTodo } from "@/entities/todo/model";

export function TodoList() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <ul className="w-full h-full p-4 bg-white rounded-xl shadow-md space-y-2 overflow-y-scroll scrollbar-hide">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center p-2 border rounded-md"
        >
          <span
            className={`cursor-pointer ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="text-red-500 hover:text-red-600"
          >
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
}
