"use client";

import { Sparkles } from "lucide-react";

const SidebarContent = ({ activeItem }) => {
  const isShortText = (text) => text.trim().split(/\s+/).length <= 10;

  const renderSection = (section, index) => {
    const allShort = section.items.every(isShortText);

    return (
      <div
        key={index}
        className="rounded-2xl border border-gray-100 bg-[#F8FFFD] p-4"
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00CCAA]/10 text-[#00A88C]">
            <Sparkles size={16} />
          </span>

          <h4 className="text-base font-medium leading-5 text-[#0D231D]">
            {section.title}
          </h4>
        </div>

        <ul
          className={`grid gap-x-4 gap-y-2 ${
            allShort ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {section.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm leading-6 text-gray-600">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00CCAA]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="rounded-3xl bg-white shadow-xl">
      <div className="px-8 pt-6 pb-4">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00CCAA]/15 to-[#00B9CC]/15 text-[#00A88C] shadow-sm">
            <activeItem.icon size={28} strokeWidth={2.2} />
          </span>

          <div>
            <h3 className="text-3xl md:text-3xl font-semibold tracking-wide text-[#0D231D]">
              {activeItem.name}
            </h3>

            <div className="mt-3 h-[3px] w-24 rounded-full bg-gradient-to-r from-[#00CCAA] via-[#00B9CC] to-[#0099FF]" />
          </div>
        </div>
      </div>

      <div className="rounded-3xl px-5 pt-1 pb-10">
        {Array.isArray(activeItem.content) ? (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              {activeItem.content.slice(0, 1).map(renderSection)}

              <div className="relative h-[250px] md:h-[330px] overflow-hidden rounded-2xl border border-gray-100 bg-[#F8FFFD]">
                <img
                  src={activeItem.image || "/Images/homepage-chemical.webp"}
                  alt={activeItem.name}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {activeItem.content.slice(1).map(renderSection)}
            </div>
          </>
        ) : (
          <p className="text-sm leading-7 text-gray-600">
            {activeItem.content}
          </p>
        )}
      </div>
    </div>
  );
};

export default SidebarContent;