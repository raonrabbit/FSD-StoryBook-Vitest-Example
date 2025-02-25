import { TodoWidget } from "../../../widgets/todo/ui/TodoWidget";

export function HomePage() {
  return (
    <div className="w-full h-full bg-[rgba(96,116,198,1)] rounded-tl-3xl flex justify-center items-center">
      <div className="w-full h-full max-w-3xl flex flex-col items-center gap-4 p-8">
        <TodoWidget />
      </div>
    </div>
  );
}
