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
    revalidate: 1,
  };
}

export default function Post({ menu, footer }) {
  return (
    <>
      <Head>
        <title>Parafia Przytok</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          property="og:url"
          content={`https://parafiaprzytok.pl/historia`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Historia Parafi Przytok" />
        <meta property="og:image" content="https://parafiaprzytok.pl/history.jpg" />
        <meta property="og:description" content="Oficjalna strona Parafi Przytok" />
        <meta name="description" content="Oficjalna strona Parafi Przytok" />
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
    Zarys historii miejscowo??ci i parafii
    </h3>
    <p>Nazwa miejscowo??ci Przytok po raz pierwszy wymieniona zosta??a w 1408 roku??w dokumencie ??aga??skiego w??odarza ksi??cia Jana I. Przytok nale??a?? on do Ulryka von Quossa i jego syn??w. W 1426 roku bracia Quossowie zostali pojmani i straceni za rozboje. Ksi?????? Jan I odda?? Przytok, w zamian za pomoc w schwytaniu poprzednich w??a??cicieli, Hinzowi von Schoffowi. Jedna z jego c??rek. wychodz??c za m???? za Benno von Tschammera, posiad??a Przytok, przekazuj??c go swoim potomkom. Wie?? by??a w posiadaniu ich rodziny do ko??ca XVI wieku. W roku 1591 Joachim von Stensch wykupi?? Przytok od zbankrutowanego Rudolfa von Tschammera. R??d nowego w??a??ciciela posiada?? miejscowo???? do po??owy lat 30. XIX wieku. Po ??mierci ostatniego z rodu Stensch, Jana Ernsta, Przytok przypad?? jego przybranej c??rce - Fryderyce Konstancji Joannie von Hessler, kt??ra w 1805 roku wysz??a za m???? za genera??a saskiego??Ryssela. W latach 20. XIX wieku pastorem w Przytoku by?? Gottfried Herzlieb, kt??rego siostra, znana jako Otylia, mieszka??a blisko czterna??cie lat w Przytoku. Jest ona bohaterk?? powie??ci??Goethego??Powinowactwo z wyboru. W latach 1596-1597 Joachim von Stensch wzni??s?? w Przytoku p????norenesansowy zamek, kt??ry zosta?? rozebrany w 1933 roku. W latach 1864 - 1867 Emil Kracher von Schwarzenfeld buduje neorenesansow?? rezydencj??, w kt??rej dzi?? mie??ci si?? plac??wka o??wiatowa. Drugim wa??nym zabytkiem w Przytoku jest ko??ci????. Ko??ci???? p.w. Wniebowzi??cia Naj??wi??tszej Maryi Panny w Przytoku stanowi znakomity przyk??ad klasycystycznej architektury sakralnej ko??ca XVIII w. Po??o??ony na skraju miejscowo??ci ko??ci???? przyci??ga licznych turyst??w oraz jest wa??nym elementem w krajobrazie kulturowym ??rodkowego Nadodrza. ??wi??tynia przytocka wzniesiona zosta??a w latach 1776- 1778. Obiekt ufundowany przez w??a??ciciela ??wczesnych d??br w Przytoku, M. von Stentscha pe??ni?? funkcj?? zboru ewangelickiego do 1945 r. Ko??ci???? wzniesiono na miejscu wcze??niejszej, XVII wiecznej murowanej ??wi??tyni, kt??ra uleg??a zniszczeniu. Po II wojnie ??wiatowej obiekt przej??ty zosta?? przez katolik??w. ??wi??tynia nie uleg??a wi??kszym przekszta??ceniom. Ko??ci???? nale??y do reprezentacyjnych obiekt??w gminy Zab??r. Po??o??ony jest na niewielkim wzniesieniu, w p????nocno-zachodniej cz????ci Przytoku, przy drodze ze Starego Kisielina do miejscowo??ci Jany. ??wi??tynia zbudowana zosta??a w 3 ??w. XVIII w. ??wi??tynia zbudowana w stylu klasycystycznym. Obiekt murowany z ceg??y i kamienia, orientowany, jednoprzestrzenny o tr??jbocznym zamkni??ciu od wschodu, z dwoma pi??trowymi przedsionkami?? przylegaj??cymi po p????nocnej i po??udniowej stronie. Na osi pod??u??nej stan????y zakrystia i kruchta. Naw?? ko??cio??a przykrywa dach dwuspadowy, za?? cz?????? prezbiterialn?? dach wielospadowy. Do elewacji zachodniej ??wi??tyni przylega kwadratowa wie??a, kt??r?? pokrywa namiotowy he??m. Wej??cie g????wne do ko??cio??a zlokalizowano w przyziemiu czworobocznej wie??y. W sk??ad zachowanego wyposa??enia ko??cio??a wchodzi m.in.: neobarokowy o??tarz, dwa dzwony z 1930 i 1938 r. wisz??ce na wie??y ko??cielnej, instrument organowy (CFF Buckowa z XVIII wieku, 12 g??osowy, mechaniczny. Jedyny zachowany w niezmienionej formie w Polsce) oraz obraz na p????tnie w o??tarzu g????wnym przedstawiaj??cy Wniebowzi??cie NMP (przywieziony przez przesiedle??c??w po II wojnie ??wiatowej z ko??cio??a w Waszkowcach na Ukrainie). Obecnie istniej??ca parafia powo??ana i ustanowiona zosta??a dekretem biskupa??Adama Dyczkowskiego 17 sierpnia 2000 roku. Parafia jest pod wezwaniem Wniebowzi??cia Naj??wi??tszej Maryi Panny Wy??oniona zosta??a z podzia??u parafii????w. J??zefa w Zaborze. Od tej chwili dot??d ko??ci???? filialny w Przytoku sta?? si?? ko??cio??em parafialnym, a parafia obj????a tak??e dwa ko??cio??y filialne w Droszkowie (p.w. Naj??wi??tszej Maryi Panny Kr??lowej Polski) i Janach (p.w. ??wi??tych Archanio????w Micha??a, Rafa??a i Gabriela). Ko??ci???? jest w??asno??ci?? wyznaniow??. W ??wi??tyni odbywaj?? si?? regularnie msze ??wi??te i nabo??e??stwa. Obiekt jest szeroko udost??pniany. Organizowane s?? w nim r????ne koncerty muzyki powa??nej mi??dzy innymi (od 2019 r.) Przedsionek Raju ??? koncerty inauguruj??ce coroczne muzyczne wydarzenie ??? Muzyka z Raju, a tak??e od wielu lat ??? Zaduszki Jazzowe ??? koncerty po??wi??cone zmar??ym polskim muzykom. Proboszczowie pos??uguj??cy w parafii: ks. mgr Miros??aw Donabidowicz - 17 sierpnia 2000 - 31 lipca 2009; ks. mgr J??zef Pogorzelski - 1 sierpnia 2009 - ??? 23 wrze??nia 2013; ks. mgr Aleksander Werstler - od 15 listopada 2013 - 31 lipca 2017; ks. dr Tomasz Tr??bacz??- od 1 sierpnia 2017. </p>
  </div>
          </div>
        </div>
      </div>
      <Footer footer={footer} />
    </>
  );
}
