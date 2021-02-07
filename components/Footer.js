export const Footer = ({ footer }) => {
  return (
    <>
      <footer className="bg-white mt-8">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {footer == null ? '' : (
            footer.map((item, index) => (
              <div key={index} className="px-5 py-2">
                <a
                  href={item.url}
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.label}
                </a>
              </div>
            ))
            )}

          </nav>
          <p className="mt-8 text-center text-base text-gray-500">
            &copy; 2021 Parafia Przytok | All rights reserved <br/>
            Powered by <img src="/logodroszkowa.jpg"/> <b><span>D</span>roszków <span>O</span>nline</b> 
          </p>
        </div>
      </footer>
    </>
  );
};
