import Head from "next/head";
import { useState } from "react";
import { Albums } from "../components/Albums";
import { Footer } from "../components/Footer";
import { Navigation } from "../components/Navigation";
import { getMenu, getAllAlbums} from "../graphql/client";

export async function getStaticProps(context) {
  const DATA_MENU = await getMenu("mainmenu");
  const DATA_FOOTER = await getMenu("footer");
  const DATA_ALBUMS = await getAllAlbums("");
  const albums = DATA_ALBUMS == null ? null : DATA_ALBUMS.posts.nodes;
  const menu = DATA_MENU.menu.menuItems.nodes;
  const footer = DATA_FOOTER.menu.menuItems.nodes;
  return {
    props: {
      menu,
      albums,
      footer,
    },
    revalidate: 1,
  };
}

export default function Post({ albums, menu, footer }) {
 
  return (
    <>
      <Head>
        <title>Parafia Przytok</title>
        <meta name="description" content="Oficjalna strona Parafi Przytok"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation menu={menu} />
      <Albums albums={albums}/>
      <Footer footer={footer} />
    </>
  );
}
