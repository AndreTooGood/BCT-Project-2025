import { Fot1, Fot2 } from "../Components/index";
import React from "react";

export default () => {
  const footerNavs = [
    {
      href: "javascript:void()",
      name: "Terms",
    },
    {
      href: "javascript:void()",
      name: "License",
    },
    {
      href: "javascript:void()",
      name: "Privacy",
    },
    {
      href: "javascript:void()",
      name: "About Us",
    },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between flex sm:flex">
          <div className="space-y-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgNXcn3DCyLMkbclsBJq9DOp6G-3zoVkeI5A&s"
              className="w-32"
            />
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-800 hover:text-gray-500 duration-150"
                >
                  <span style={{ fontWeight: "bold" }}>
                    <a href={item.href}>{item.name}</a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:mt-0 mt-6">
            <p className="text-gray-700 font-semibold">Get the app</p>
            <div className="flex items-center gap-3 mt-3 sm:block">
              <a href="javascript:void()">
                <Fot1 />
              </a>
              <a href="javascript:void()" className="mt-0 block sm:mt-3">
                <Fot2 />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 py-10 border-t text-center">
          <p>©️ 2024 AirCargo Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
