import { useState } from "react";

export const Navigation = ({ menu }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative bg-white">
      <div className="relative z-20 shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <a href="/" className="flex">
              <span className="sr-only">Workflow</span>
              <img
                width="40px"
                height="40px"
                className="h-8 w-auto sm:h-10"
                src="/logo.svg"
                alt=""
              />
            </a>
          </div>
          <div onClick={() => setOpen(true)} className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <nav className="flex space-x-10">
              {menu.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div
          className={`${
            open ? "" : "hidden"
          } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}
        >
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img
                  width="40px"
                  height="40px"
                  className="h-8 w-auto"
                  src="/logo.svg"
                  alt="logo"
                />
              </div>
              <div onClick={() => setOpen(false)} className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Close main menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                {menu.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <div role="none">
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100"
                  role="menuitem"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
