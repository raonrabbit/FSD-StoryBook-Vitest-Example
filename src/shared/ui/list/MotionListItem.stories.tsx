import type { Meta, StoryObj } from "@storybook/react";
import { MotionListItem } from "./MotionListItem";

const meta: Meta<typeof MotionListItem> = {
  title: "Shared/MotionListItem",
  component: MotionListItem,
};

export default meta;
type Story = StoryObj<typeof MotionListItem>;

// 기본 리스트 아이템 (삭제 불가)
export const Default: Story = {
  args: {
    content: "기본 리스트 아이템",
    isRemoveable: false,
    customListClassName: "w-96 bg-white shadow-md",
    customTextClassName: "font-medium",
  },
};

// 삭제 가능한 리스트 아이템
export const RemovableItem: Story = {
  args: {
    content: "삭제 가능한 리스트 아이템",
    isRemoveable: true,
    onRemove: () => alert("삭제"),
  },
};

// 리스트 클릭 가능한 리스트 아이템
export const ListClickableItem: Story = {
  args: {
    content: "리스트 클릭 이벤트 테스트",
    onClickList: () => alert("리스트 클릭"),
  },
};

// 텍스트 클릭 가능한 리스트 아이템
export const TextClickableItem: Story = {
  args: {
    content: "클릭 이벤트 테스트",
    onClickText: () => alert("텍스트 클릭"),
  },
};

// 삭제 & 클릭 가능 아이템
export const FullActionItem: Story = {
  args: {
    content: "클릭 & 삭제 가능한 아이템",
    isRemoveable: true,
    onClickList: () => alert("리스트 클릭"),
    onClickText: () => alert("텍스트 클릭"),
    onRemove: () => alert("삭제"),
  },
};
