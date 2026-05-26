"use client";

const SidebarContent = ({ activeItem }) => {
  return (
    <div className="rounded-3xl border border-white/70 bg-white/80 p-8 pt-0 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl">
      <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0D231D]">
        OUR{" "}
        <span className="bg-gradient-to-r from-[#00CCAA] to-[#00B9CC] bg-clip-text text-transparent">
          PRODUCTS
        </span>
      </h2>

      <div className="h-[2px] w-45 bg-gradient-to-r from-[#00CCAA] to-[#00B9CC]" />

      <h3 className="mt-8 text-3xl font-semibold text-[#0D231D]">
        {activeItem.name}
      </h3>

      {Array.isArray(activeItem.content) ? (
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          {activeItem.content.map((section, index) => (
            <div
              key={index}
              className="rounded-2xl border border-[#00CCAA]/15 bg-white/70 p-5 shadow-sm"
            >
              <h4 className="mb-3 text-lg font-semibold text-[#0D231D]">
                {section.title}
              </h4>

              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-6 text-gray-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#00CCAA] to-[#00B9CC]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600">
          {activeItem.content}
        </p>
      )}
    </div>
  );
};

export default SidebarContent;