import Head from "next/head";
import { Articles } from "../components/Articles";
import { Hero } from "../components/Hero";
import { getAllPosts,getMenu } from "../graphql/client";
import { Footer } from "../components/Footer";
import {About} from "../components/About"
import { Groups } from "../components/Groups";
import { Opening } from "../components/Opening";

export async function getServerSideProps(context) {
  const DATA_POSTS = await getAllPosts("");
  const DATA_MENU = await getMenu('mainmenu');
  const DATA_FOOTER = await getMenu('footer');
  const menu = DATA_MENU == null ? null : DATA_MENU.menu.menuItems.nodes;
  const posts = DATA_POSTS == null ? null : DATA_POSTS.posts.nodes;
  const footer = DATA_FOOTER == null ? null : DATA_FOOTER.menu.menuItems.nodes;
  return {
    props: {
      posts,
      menu,
      footer,
    }
  };
}

export default function Home({ posts,menu,footer }) {
  return (
    <>
      <Head>
        <title>Parafia Przytok</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          property="og:url"
          content={`https://parafiaprzytok.pl`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Oficjalna strona Parafi Przytok" />
        <meta property="og:image" content="https://parafiaprzytok.pl/przytok.jpg" />
        <meta property="og:description" content="Oficjalna strona Parafi Przytok" />
        <meta name="description" content="Oficjalna strona Parafi Przytok" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero menu={menu}/>
      <Articles posts={posts} />
      <Opening/>
      <About/>
      <Groups/>
      <Footer footer={footer}/>
    </>
  );
}
