import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "@/entities/todo/model";

export function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex gap-2 p-4 bg-white rounded-xl shadow-md"
    >
      <input
        type="text"
        className="flex-1 p-2 border rounded-md"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        추가
      </button>
    </form>
  );
}
