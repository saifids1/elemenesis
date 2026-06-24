"use client";

import { ChevronRight } from "lucide-react";
import { productItems } from "../data/productData";

const Sidebar = ({ activeItem, setActiveItem }) => {
  return (
    <aside className="w-70 rounded-2xl border border-[#00CCAA]/15 bg-white/80 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl">
      <div className="mb-4 rounded-xl bg-gradient-to-r from-[#00CCAA]/10 to-[#00B9CC]/10 px-3 py-2">
        <p className="text-xs font-bold uppercase tracking-widest text-[#0D231D]">
          Product Divisions
        </p>
      </div>

      <nav className="space-y-2">
        {productItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem?.id === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItem(item)}
              className={`group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-[#00CCAA] to-[#00B9CC]"
                  : "hover:bg-gradient-to-r hover:from-[#00CCAA] hover:to-[#00B9CC]"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-[#00CCAA]/10 text-[#064D50] group-hover:bg-white/20 group-hover:text-white"
                  }`}
                >
                  <Icon size={17} />
                </span>

                <span
                  className={`max-w-[155px] text-xs font-semibold leading-4 ${
                    isActive
                      ? "text-white"
                      : "text-[#0D231D] group-hover:text-white"
                  }`}
                >
                  {item.name}
                </span>
              </div>

              <ChevronRight
                size={14}
                className={
                  isActive
                    ? "text-white"
                    : "text-[#064D50] group-hover:text-white"
                }
              />
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;