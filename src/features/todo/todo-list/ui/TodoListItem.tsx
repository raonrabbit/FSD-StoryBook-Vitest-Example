import { removeTodo, Todo, toggleTodo } from "@/entities/todo/model";
import { MotionListItem } from "@/shared/ui";
import { useDispatch } from "react-redux";

interface TodoListItemProps {
  todo: Todo;
}

export function TodoListItem({ todo }: TodoListItemProps) {
  const dispatch = useDispatch();
  return (
    <MotionListItem
      content={todo.text}
      onClickText={() => dispatch(toggleTodo(todo.id))}
      isRemoveable={true}
      onRemove={() => dispatch(removeTodo(todo.id))}
      customTextClassName={todo.completed ? "line-through text-gray-400" : ""}
    />
  );
}
