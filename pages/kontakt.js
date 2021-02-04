import Head from "next/head";
import { useState } from "react";
import { Error } from "../components/Alerts/Error";
import { Success } from "../components/Alerts/Success";
import { Contact } from "../components/Contact";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { getMenu, sendContact } from "../graphql/client";

export async function getStaticProps(context) {
  const DATA_MENU = await getMenu("mainmenu");
  const DATA_FOOTER = await getMenu("footer");
  const menu = DATA_MENU.menu.menuItems.nodes;
  const footer = DATA_FOOTER.menu.menuItems.nodes;
  return {
    props: {
      menu,
      footer,
    },
    revalidate: 1,
  };
}

export default function Post({ post, menu, footer }) {
  // const [name, setName] = useState("");
  // const [mail, setMail] = useState("");
  // const [mess, setMess] = useState("");
  // const [time, setTime] = useState(false);
  // const [maxLength, setMaxLength] = useState(false);
  // const [send, setSend] = useState(false);
  // const [check, setCheck] = useState(false);
  // function sendMessage(e) {
  //   e.preventDefault();
  //   setSend(false);
  //   setTime(false);
  //   setMaxLength(false);
  //   if (mess.length <= 500) {
  //     if (
  //       parseInt(localStorage.getItem("time")) + 30000 < Date.now() ||
  //       localStorage.getItem("time") == null
  //     ) {
  //       localStorage.setItem("time", Date.now());
  //       sendContact(name, mail, mess);
  //       setSend(true);
  //     } else {
  //       setTime(
  //         30 -
  //           parseInt(parseInt(Date.now() - localStorage.getItem("time")) / 1000)
  //       );
  //     }
  //   } else {
  //     setMaxLength(mess.length);
  //   }
  // }
  return (
    <>
      <Head>
        <title>Parafia Przytok</title>
        <meta name="description" content="Oficjalna strona Parafi Przytok" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation menu={menu} />
      <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute left-full transform translate-x-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            className="absolute right-full bottom-0 transform -translate-x-1/2"
            width="404"
            height="404"
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="404"
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <div>
            {/*

          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Formularz kontaktowy
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Skontaktuj się z proboszczem naszej parafii ks. Tomaszem Trębaczem
            </p>
          </div>
          <div className="mt-12">
            <form
              action="#"
              method="POST"
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700"
                >
                  Imię i nazwisko
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    onChange={(e) => setMail(e.target.value)}
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Wiadomość
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                    onChange={(e) => setMess(e.target.value)}
                  ></textarea>
                </div>
              </div>
               <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={(e) => sendMessage(e)}
                >
                  Wyślij
                </button>
                {send ? <Success /> : null}
                {time || maxLength ? (
                  <Error time={time} length={maxLength} />
                ) : null}
              </div>
            </form>
          </div>*/}
          </div>
          <Contact/>
          <Faq />
        </div>
      </div>
      <Footer footer={footer} />
    </>
  );
}
