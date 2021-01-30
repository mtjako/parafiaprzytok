import { Header } from "./Header";

const data = [
  {
    title: "Żywy Różaniec",
    desc:
      "Grupa modlitewna skupiająca kobiety i mężczyzn, którzy codziennie poprzez modlitwę różańcową „omadlają” bieżące problemy i sprawy nie tylko lokalnej parafii, ale także Ojczyzny i świata. Spotkania formacyjne (zmiana tajemnic Żywego Różańca) odbywają się w każdą I niedzielę miesiąca po Mszy św. W parafii istnieje pięć Róż różańcowych. Zapraszamy do włączania się w to dzieło modlitewne.",
    img: "/groups/rozaniec.jpg",
  },
  {
    title: "Liturgiczna Służba Ołtarza",
    desc:
      "To propozycja i zachęta dla chłopaków (ale nie tylko). Każdy może zostać ministrantem. To szczególna funkcja liturgiczna, podczas której jest się bardzo blisko ołtarza i Eucharystii. Ministrant pomaga księdzu, szafarzom i lektorom w czasie Mszy św., a swoją postawą daje świadectwo wiary. Zapraszamy chętnych do służby ministranckiej w naszej parafii.",
    img: "/groups/ministranci.jpg",
  },
  {
    title: "Nadzwyczajni Szafarze Komunii Świętej",
    desc:
      "To szczególne wyróżnienie, do którego specjalnym dekretem mianuje biskup diecezjalny. Nadzwyczajny Szafarz Komunii Świętej pomaga podczas Eucharystii rozdzielać Ciało Pańskie. Może także zanosić Komunię św. do osób chorych leżących w domach. Jest to duże wyróżnienie we wspólnocie parafialnej. Mogą go dostąpić mężczyźni, szczególnie zaangażowani w życie parafialne, cieszący się dobrą opinią lokalnego społeczeństwa.",
    img: "/groups/szafarze.jpg",
  },
  {
    title: "Caritas Parafialna",
    desc:
      "Jest to lokalny oddział Caritas diecezjalnej. W ramach działalności tej grupy – skupiającej dwadzieścia osób – jest szeroko pojęta pomoc charytatywna. Caritas parafialna organizuje między innymi pomoc żywnościową dla osób potrzebujących (szczególnie w okresie przedświątecznym), włącza się w różne diecezjalne akcje charytatywne, a także organizuje w parafii akcje dla najmłodszych (Bal Wszystkich Świętych czy spotkanie z Mikołajem).",
    img: "/groups/caritas.jpg",
  },
  {
    title: "Oaza Dzieci Bożych i Schola",
    desc:
      "To propozycja dla dzieci od klasy piątej SP. Oaza jest miejscem formacji duchowej i liturgicznej gdzie poprzez zabawę oraz modlitwę, śpiew czy formację liturgiczną, poznaje się Kościół. Jest to propozycja dla dziewczyn i chłopaków. Zapraszamy. Spotkania są w każdą sobotę w sali wiejskiej Droszkowie. Obecnie na czas pandemii zostały one zawieszone.",
    img: "/groups/oaza.jpg",
  },
];

export const Groups = () => {
  return (
    <>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mt-20 flex flex-wrap">
        <Header category="O nas" title="Grupy parafialne" />
        <div>
          {data.map((group,index) => (
            <div key={index} className="flex flex-wrap items-center my-8 justify-center md:justify-center">
              <img
                className={`w-1/2 mb-8 md:mb-0 rounded-md shadow-2xl md:w-1/4 ${index%2 ? 'md:order-1' : ''}`}
                src={group.img}
                alt={group.title}
              />
              <span className={`mb-8 md:mb-0 text-center md:text-left w-full md:w-3/4 ${index%2 ? 'md:pr-8' : 'md:pl-8'}`}>
                <p className="text-2xl font-semibold mb-3 uppercase">
                  {group.title}
                </p>
                <p className="text-gray-600">
                  {group.desc}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
