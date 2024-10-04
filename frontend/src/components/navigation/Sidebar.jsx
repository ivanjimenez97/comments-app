import { NavLink } from "react-router-dom";
import MdiLightViewDashboard from "../icons/MdiLightViewDashboard";
import UsersGroupSolid from "../icons/UsersGroupSolid";
import CommentsIcon from "../icons/CommentsIcon.jsx";
import CommentTsIcon from "../icons/CommentTsIcon.jsx";

export default function Sidebar() {
  return (
    <aside className="sidebar bg-white lg:w-[240px] min-h-screen hidden md:block">
      <NavLink
        to={"/dashboard"}
        className={({ isActive }) =>
          isActive
            ? "border-r-4 border-indigo-500 font-bold text-indigo-500 flex justify-center lg:justify-start items-center py-3 px-5"
            : "text-gray-500 hover:text-indigo-400 flex justify-center lg:justify-start items-center py-3 px-5"
        }
      >
        <MdiLightViewDashboard className="w-[1.75rem] h-[1.75rem]" />
        <span className="hidden lg:block px-3">Dashboard</span>
      </NavLink>

      <NavLink
        to={"/comments"}
        className={({ isActive }) =>
          isActive
            ? "border-r-4 border-indigo-500 font-bold text-indigo-500 flex justify-center lg:justify-start items-center py-3 px-5"
            : "text-gray-500 hover:text-indigo-400 flex justify-center lg:justify-start items-center py-3 px-5"
        }
      >
        <CommentsIcon className="w-[1.75rem] h-[1.75rem]" />
        <span className="hidden lg:block px-3">Comments</span>
      </NavLink>

      <NavLink
        to={"/comments-ts-version"}
        className={({ isActive }) =>
          isActive
            ? "border-r-4 border-blue-500 font-bold text-blue-500 flex justify-center lg:justify-start items-center py-3 px-5"
            : "text-gray-500 hover:text-blue-400 flex justify-center lg:justify-start items-center py-3 px-5"
        }
      >
        <CommentTsIcon className="w-[1.75rem] h-[1.75rem]" />
        <span className="hidden lg:block px-3">Comments TS Version</span>
      </NavLink>

      <NavLink
        to={"/users"}
        className={({ isActive }) =>
          isActive
            ? "border-r-4 border-indigo-500 font-bold text-indigo-500 flex justify-center lg:justify-start items-center py-3 px-5"
            : "text-gray-500 hover:text-indigo-400 flex justify-center lg:justify-start items-center py-3 px-5"
        }
      >
        <UsersGroupSolid className="w-[1.75rem] h-[1.75rem]" />
        <span className="hidden lg:block px-3">Users</span>
      </NavLink>
    </aside>
  );
}
