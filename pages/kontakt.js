import Head from "next/head";
import { Contact } from "../components/Contact";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { getMenu } from "../graphql/client";

export async function getStaticProps() {
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

export default function Post({ menu, footer }) {
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
          <Contact />
          <Faq />
        </div>
      </div>
      <Footer footer={footer} />
    </>
  );
}
