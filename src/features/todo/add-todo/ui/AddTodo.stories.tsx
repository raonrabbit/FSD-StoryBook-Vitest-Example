import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { AddTodo } from "./AddTodo";

const store = configureStore({
  reducer: {
    todo: (state = [], action) => {
      switch (action.type) {
        case "todo/addTodo":
          return [...state, { text: action.payload, completed: false }];
        default:
          return state;
      }
    },
  },
});

const meta: Meta<typeof AddTodo> = {
  title: "Todo/AddTodo",
  component: AddTodo,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <div className="w-96">
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AddTodo>;
export const Default: Story = {};
