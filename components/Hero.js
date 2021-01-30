import { useState } from "react";

export const Hero = ({ menu }) => {
  const [open,setOpen] = useState(false);
  return (
    <>
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-5 sm:pt-4 px-4 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        width="40px"
                        height="40px"
                        className="h-8 w-auto sm:h-10"
                        src="/logo.svg"
                        alt="logo"
                      />
                    </a>
                    <div onClick={()=>setOpen(true)} className="-mr-2 flex items-center md:hidden">
                      <button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        id="main-menu"
                        aria-haspopup="true"
                      >
                        <span className="sr-only">Open main menu</span>

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
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <nav className="flex space-x-10">
                  {menu == null ? null : 
                  (
                    menu.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        className="font-medium text-gray-500 hover:text-gray-900"
                      >
                        {item.label}
                      </a>
                    ))
                  )
                  }
                  </nav>
                </div>
              </nav>
            </div>

            <div className={`${open ? '' : 'hidden'} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
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
                  <div onClick={()=>setOpen(false)} className="-mr-2">
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
                  {menu == null ? null : 
                  (
                    menu.map((item, index) => (
                      <a
                        key={index}
                        href={item.url}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        {item.label}
                      </a>
                    ))
                    )}
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

            <main className="mt-10 py-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Witamy w </span>
                  <span className="block text-blue-600">Parafi Przytok</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Witamy w Parafi Wniebowzięcia Najświętszej Maryi Panny w
                  Przytoku. Rzymskokatolickiej parafii diecezji
                  zielonogórsko-gorzowskiej.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="./przytok.jpg"
            alt="zdjęcie ołtarza w przytoku"
          />
        </div>
      </div>
    </>
  );
};
