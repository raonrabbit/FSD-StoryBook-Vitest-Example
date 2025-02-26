import { Header } from "../shared/ui";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="pt-12 w-screen h-screen bg-white">
      <div className="fixed top-0 h-12 w-full bg-[rgba(96,116,198,1)]">
        <Header />
      </div>
      <div className="h-full">
        <Outlet />
      </div>
    </div>
  );
}
