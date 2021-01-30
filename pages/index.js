import Head from "next/head";
import { Articles } from "../components/Articles";
import { Hero } from "../components/Hero";
import { getAllPosts,getMenu } from "../graphql/client";
import { Footer } from "../components/Footer";
import {About} from "../components/About"
import { Groups } from "../components/Groups";

export async function getStaticProps(context) {
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
    },
    revalidate: 1,
  };
}

export default function Home({ posts,menu,footer }) {
  return (
    <>
      <Head>
        <title>Parafia Przytok</title>
        <meta name="description" content="Oficjalna strona Parafi Przytok"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero menu={menu}/>
      <Articles posts={posts} />
      <About/>
      <Groups/>
      <Footer footer={footer}/>
    </>
  );
}
