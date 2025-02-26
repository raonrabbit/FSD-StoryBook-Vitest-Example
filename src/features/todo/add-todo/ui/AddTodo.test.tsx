import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { AddTodo } from "./AddTodo";
import { Provider, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer, addTodo } from "@/entities/todo/model";

// Redux Mock Store 생성
const mockStore = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// `react-redux` 모듈을 모킹
vi.mock("react-redux", async () => {
  const actual = await import("react-redux");
  return {
    ...actual,
    useDispatch: vi.fn(), // useDispatch를 직접 모킹
  };
});

describe("AddTodo Component", () => {
  let dispatchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    dispatchMock = vi.fn();
    (useDispatch as unknown as Mock).mockReturnValue(dispatchMock);
  });

  it("컴포넌트가 정상적으로 렌더링되는지 확인", () => {
    render(
      <Provider store={mockStore}>
        <AddTodo />
      </Provider>
    );

    expect(
      screen.getByPlaceholderText("할 일을 입력하세요")
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("입력 필드에 텍스트 입력 시 상태가 변경되는지 확인", () => {
    render(
      <Provider store={mockStore}>
        <AddTodo />
      </Provider>
    );

    const input = screen.getByPlaceholderText(
      "할 일을 입력하세요"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "새로운 할 일" } });

    expect(input.value).toBe("새로운 할 일");
  });

  it("버튼 클릭 시 addTodo 액션이 정상적으로 dispatch되는지 확인", () => {
    render(
      <Provider store={mockStore}>
        <AddTodo />
      </Provider>
    );

    const input = screen.getByPlaceholderText(
      "할 일을 입력하세요"
    ) as HTMLInputElement;
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "테스트 할 일" } });
    fireEvent.click(button);

    expect(dispatchMock).toHaveBeenCalledWith(addTodo("테스트 할 일"));
    expect(input.value).toBe(""); // 입력 필드 초기화 확인
  });

  it("공백 입력 시 dispatch가 실행되지 않는지 확인", () => {
    render(
      <Provider store={mockStore}>
        <AddTodo />
      </Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(dispatchMock).not.toHaveBeenCalled();
  });
});
