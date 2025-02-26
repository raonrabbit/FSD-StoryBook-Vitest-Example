import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { TodoList } from "./TodoList";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const store = configureStore({
  reducer: {
    todo: (
      state = { todos: [{ id: 1, text: "test1", completed: false }] },
      action
    ) => {
      switch (action.type) {
        case "todo/toggleTodo":
          return {
            ...state,
            todos: state.todos.map((todo: Todo) =>
              todo.id === action.payload
                ? { ...todo, completed: !todo.completed }
                : todo
            ),
          };
        case "todo/removeTodo":
          return {
            ...state,
            todos: state.todos.filter(
              (todo: Todo) => todo.id !== action.payload
            ),
          };
        default:
          return state;
      }
    },
  },
});

const meta: Meta<typeof TodoList> = {
  title: "Todo/TodoList",
  component: TodoList,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div className="w-96 h-96">
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TodoList>;
export const Default: Story = {};
