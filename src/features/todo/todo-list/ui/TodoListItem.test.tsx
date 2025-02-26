import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { TodoListItem } from "./TodoListItem";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {
  todoReducer,
  Todo,
  toggleTodo,
  removeTodo,
} from "@/entities/todo/model";
import { useDispatch } from "react-redux";

// Mock the useDispatch hook
vi.mock("react-redux", async () => {
  const actual = await import("react-redux");
  return {
    ...actual,
    useDispatch: vi.fn(), // Mock useDispatch
  };
});

// Mock store for Redux
const mockStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

describe("TodoListItem Component", () => {
  let dispatchMock: ReturnType<typeof vi.fn>;
  const mockTodo: Todo = {
    id: 1,
    text: "Test Todo",
    completed: false,
  };

  beforeEach(() => {
    dispatchMock = vi.fn();
    (useDispatch as unknown as Mock).mockReturnValue(dispatchMock); // Mock useDispatch to return dispatchMock
  });

  it("renders the todo text correctly", () => {
    render(
      <Provider store={mockStore}>
        <TodoListItem todo={mockTodo} />
      </Provider>
    );

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  it("dispatches toggleTodo action when the text is clicked", () => {
    render(
      <Provider store={mockStore}>
        <TodoListItem todo={mockTodo} />
      </Provider>
    );

    const todoText = screen.getByText("Test Todo");
    fireEvent.click(todoText);

    expect(dispatchMock).toHaveBeenCalledWith(toggleTodo(1));
  });

  it("dispatches removeTodo action when the delete button is clicked", () => {
    render(
      <Provider store={mockStore}>
        <TodoListItem todo={mockTodo} />
      </Provider>
    );

    const deleteButton = screen.getByText("삭제");
    fireEvent.click(deleteButton);

    expect(dispatchMock).toHaveBeenCalledWith(removeTodo(1));
  });

  it("applies line-through style when the todo is completed", () => {
    const completedTodo: Todo = {
      id: 1,
      text: "Completed Todo",
      completed: true,
    };

    render(
      <Provider store={mockStore}>
        <TodoListItem todo={completedTodo} />
      </Provider>
    );

    const todoText = screen.getByText("Completed Todo");
    expect(todoText).toHaveClass("line-through");
    expect(todoText).toHaveClass("text-gray-400");
  });
});
