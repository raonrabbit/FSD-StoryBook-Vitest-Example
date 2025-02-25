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
      className="group w-full flex gap-2 px-4 py-2 bg-white opacity-50 hover:opacity-80 hover:focus-within:opacity-100 focus-within:opacity-100 rounded-xl shadow-md transition-all duration-300 ease-in-out"
    >
      <input
        type="text"
        className="flex-1 p-2 rounded-md focus:outline-none bg-transparent"
        placeholder="할 일을 입력하세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transform scale-0 group-focus-within:scale-100 transition-transform duration-300 ease-out"
      >
        +
      </button>
    </form>
  );
}
