import Head from "next/head";
import { Dots } from "../components/Dots";
import { Footer } from "../components/Footer";
import { Msza } from "../components/Ministranci/Msza";
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
                historia
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Historia naszej parafii
              </span>
            </h1>
            <img
              className="w-full rounded-lg mt-6"
              src="history.jpg"
              alt=""
              width="1310"
              height="873"
            />
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
    <h3 className="font-extrabold text-2xl text-gray-800 my-4">
    Zarys historii miejscowości i parafii
    </h3>
    <p>Nazwa miejscowości Przytok po raz pierwszy wymieniona została w 1408 roku w dokumencie żagańskiego włodarza księcia Jana I. Przytok należał on do Ulryka von Quossa i jego synów. W 1426 roku bracia Quossowie zostali pojmani i straceni za rozboje. Książę Jan I oddał Przytok, w zamian za pomoc w schwytaniu poprzednich właścicieli, Hinzowi von Schoffowi. Jedna z jego córek. wychodząc za mąż za Benno von Tschammera, posiadła Przytok, przekazując go swoim potomkom. Wieś była w posiadaniu ich rodziny do końca XVI wieku. W roku 1591 Joachim von Stensch wykupił Przytok od zbankrutowanego Rudolfa von Tschammera. Ród nowego właściciela posiadał miejscowość do połowy lat 30. XIX wieku. Po śmierci ostatniego z rodu Stensch, Jana Ernsta, Przytok przypadł jego przybranej córce - Fryderyce Konstancji Joannie von Hessler, która w 1805 roku wyszła za mąż za generała saskiego Ryssela. W latach 20. XIX wieku pastorem w Przytoku był Gottfried Herzlieb, którego siostra, znana jako Otylia, mieszkała blisko czternaście lat w Przytoku. Jest ona bohaterką powieści Goethego Powinowactwo z wyboru. W latach 1596-1597 Joachim von Stensch wzniósł w Przytoku późnorenesansowy zamek, który został rozebrany w 1933 roku. W latach 1864 - 1867 Emil Kracher von Schwarzenfeld buduje neorenesansową rezydencję, w której dziś mieści się placówka oświatowa. Drugim ważnym zabytkiem w Przytoku jest kościół. Kościół p.w. Wniebowzięcia Najświętszej Maryi Panny w Przytoku stanowi znakomity przykład klasycystycznej architektury sakralnej końca XVIII w. Położony na skraju miejscowości kościół przyciąga licznych turystów oraz jest ważnym elementem w krajobrazie kulturowym Środkowego Nadodrza. Świątynia przytocka wzniesiona została w latach 1776- 1778. Obiekt ufundowany przez właściciela ówczesnych dóbr w Przytoku, M. von Stentscha pełnił funkcję zboru ewangelickiego do 1945 r. Kościół wzniesiono na miejscu wcześniejszej, XVII wiecznej murowanej świątyni, która uległa zniszczeniu. Po II wojnie światowej obiekt przejęty został przez katolików. Świątynia nie uległa większym przekształceniom. Kościół należy do reprezentacyjnych obiektów gminy Zabór. Położony jest na niewielkim wzniesieniu, w północno-zachodniej części Przytoku, przy drodze ze Starego Kisielina do miejscowości Jany. Świątynia zbudowana została w 3 ćw. XVIII w. Świątynia zbudowana w stylu klasycystycznym. Obiekt murowany z cegły i kamienia, orientowany, jednoprzestrzenny o trójbocznym zamknięciu od wschodu, z dwoma piętrowymi przedsionkami  przylegającymi po północnej i południowej stronie. Na osi podłużnej stanęły zakrystia i kruchta. Nawę kościoła przykrywa dach dwuspadowy, zaś część prezbiterialną dach wielospadowy. Do elewacji zachodniej świątyni przylega kwadratowa wieża, którą pokrywa namiotowy hełm. Wejście główne do kościoła zlokalizowano w przyziemiu czworobocznej wieży. W skład zachowanego wyposażenia kościoła wchodzi m.in.: neobarokowy ołtarz, dwa dzwony z 1930 i 1938 r. wiszące na wieży kościelnej, instrument organowy (CFF Buckowa z XVIII wieku, 12 głosowy, mechaniczny. Jedyny zachowany w niezmienionej formie w Polsce) oraz obraz na płótnie w ołtarzu głównym przedstawiający Wniebowzięcie NMP (przywieziony przez przesiedleńców po II wojnie światowej z kościoła w Waszkowcach na Ukrainie). Obecnie istniejąca parafia powołana i ustanowiona została dekretem biskupa Adama Dyczkowskiego 17 sierpnia 2000 roku. Parafia jest pod wezwaniem Wniebowzięcia Najświętszej Maryi Panny Wyłoniona została z podziału parafii św. Józefa w Zaborze. Od tej chwili dotąd kościół filialny w Przytoku stał się kościołem parafialnym, a parafia objęła także dwa kościoły filialne w Droszkowie (p.w. Najświętszej Maryi Panny Królowej Polski) i Janach (p.w. Świętych Archaniołów Michała, Rafała i Gabriela). Kościół jest własnością wyznaniową. W świątyni odbywają się regularnie msze święte i nabożeństwa. Obiekt jest szeroko udostępniany. Organizowane są w nim różne koncerty muzyki poważnej między innymi (od 2019 r.) Przedsionek Raju – koncerty inaugurujące coroczne muzyczne wydarzenie – Muzyka z Raju, a także od wielu lat – Zaduszki Jazzowe – koncerty poświęcone zmarłym polskim muzykom. Proboszczowie posługujący w parafii: ks. mgr Mirosław Donabidowicz - 17 sierpnia 2000 - 31 lipca 2009; ks. mgr Józef Pogorzelski - 1 sierpnia 2009 - † 23 września 2013; ks. mgr Aleksander Werstler - od 15 listopada 2013 - 31 lipca 2017; ks. dr Tomasz Trębacz - od 1 sierpnia 2017. </p>
  </div>
          </div>
        </div>
      </div>
      <Footer footer={footer} />
    </>
  );
}
