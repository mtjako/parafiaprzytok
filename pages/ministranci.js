import Head from "next/head";
import { Dots } from "../components/Dots";
import { Footer } from "../components/Footer";
import { Budowa } from "../components/Ministranci/Budowa";
import { Msza } from "../components/Ministranci/Msza";
import { Postawy } from "../components/Ministranci/Postawy";
import { Wstep } from "../components/Ministranci/Wstep";
import { Navigation } from "../components/Navigation";
import { getMenu } from "../graphql/client";

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

export default function Post({ menu, footer }) {
  return (
    <>
      <Head>
        <title>Parafia Przytok</title>
        <meta name="description" content="Oficjalna strona Parafi Przytok"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation menu={menu} />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <Dots />
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                ministranci
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Materiały dla ministrantów
              </span>
            </h1>
            <img
              className="w-full rounded-lg mt-6"
              src="ministrant.jpg"
              alt=""
              width="1310"
              height="873"
            />
            <Wstep />
            <Budowa/>
            <Postawy/>
            <Msza/>
          </div>
        </div>
      </div>
      <Footer footer={footer} />
    </>
  );
}
