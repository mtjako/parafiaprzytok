const data = [
  {
    title: "Obrzędy wstępne",
    importance: 1,
  },
  {
    title: "Śpiew na wejście",
    importance: 0,
  },
  {
    title: "Słowo wprowadzenia",
    importance: 0,
  },
  {
    title: "Akt pokuty",
    importance: 0,
  },
  {
    title: '"Panie zmiłuj się nad nami"',
    importance: 0,
  },
  {
    title: 'Hymn "Chwała na wysokości Bogu" (oprócz adwentu i wielkiego postu)',
    importance: 0,
  },
  {
    title: 'Kolekta "Módlmy się"',
    importance: 0,
  },
  {
    title: "Liturgia Słowa",
    importance: 1,
  },
  {
    title: "I Czytanie",
    importance: 0,
  },
  {
    title: "Psalm Responsoryjny",
    importance: 0,
  },
  {
    title: "II Czytanie",
    importance: 0,
  },
  {
    title: 'Aklamacja przed Ewangelią "Alleluja"',
    importance: 0,
  },
  {
    title: "Ewangelia",
    importance: 0,
  },
  {
    title: 'Homilia "Kazanie"',
    importance: 0,
  },
  {
    title: "Wyznanie wiary",
    importance: 0,
  },
  {
    title: "Modlitwa powszechna",
    importance: 0,
  },
  {
    title: "Przyniesienie kielichów",
    importance: 0,
    work: 1,
    desc:
      "Podczas modlitwy wiernych, ministrant podchodzi do ołtarza i rozkłada korporał a następnie stawia kielich obok z prawej strony.",
  },
  {
    title: "Liturgia Eucharystyczna",
    importance: 1,
  },
  {
    title: "Przygotowanie darów | Śpiew",
    importance: 0,
  },
  {
    title: "Ampułki z winem i wodą",
    importance: 0,
    work: 1,
    desc:
      "Gdy rozpocznie się śpiew, podchodzimy do ołtarza i podajemy kapłanowi w pierwszej kolejności ampułkę z winem a następnie z wodą.",
  },
  {
    title: "Lavabo",
    importance: 0,
    work: 1,
    desc:
      "Gdy wrócimy, podchodzimy do ołtarza i polewamy ręce kapłana wodą tak aby spływała ona na misę. Następnie drugi ministrant rozkłada ręczniczek tak aby kapłan mógł wytrzeć ręce. (Uwaga! W przypadku mszy uroczystych w pierwszej kolejności podchodzą ministranci z kadzidłem)",
  },
  {
    title: "Modlitwa nad darami",
    importance: 0,
    desc:
      "Módlcie się, aby moją i wasza Ofiarę przyjął Bóg, Ojciec wszechmogący. / Niech Pan przyjmie Ofiarę z rąk twoich na cześć i chwałę swojego imienia, a także na pożytek nasz i całego Kościoła świętego. ",
  },
  {
    title: "Prefacja",
    importance: 0,
    desc:
      "Pan z wami. I z duchem twoim. W górę serca. Wznosimy je do Pana. Dzięki składajmy Panu Bogu naszemu. Godne to i sprawiedliwe.",
  },
  {
    title: "Sanctus",
    importance: 0,
    desc:
      "Święty, Święty, Święty, Pan Bóg zastępów Pełne są niebiosa i ziemia chwały Twojej. Hosanna na wysokości. Błogosławiony, który idzie w imię Pańskie. Hosanna na wysokości.",
  },
 {
    title: "Dzwonki",
    importance: 0,
    work: 1,
    desc:
      "Zaprawdę, święty jesteś, Boże, źródło wszelkiej świętości. (w niedziele: Dlatego stajemy przed Tobą i zjednoczeni z całym Kościołem uroczyście obchodzimy pierwszy dzień tygodnia, w którym Jezus Chrystus zmarwtychwstał i zesłał na Apostołów Ducha Świętego. Przez Chrystusa prosimy Ciebie, wszechmogący Boże.) 🔔",
  },
  {
    title: "Przeistoczenie",
    importance: 0,
  },
  {
    title: "Gong",
    importance: 0,
    work: 1,
    desc:
      "Bierzcie i jedzcie z tego wszsyscy: To jest bowiem Ciało moje, które za was będzie wydane. 🔔",
  },
  {
    title: "Gong",
    importance: 0,
    work: 1,
    desc:
      "Bierzcie i pijcie z niego wszyscy: To jest bowiem kielich Krwi mojej nowego i wiecznego przymierza, która za was i za wielu będzie wylana na odpuszczenie grzechów. To czyńcie na moją pamiątkę. 🔔",
  },
  {
    title: "Dzwonki",
    importance: 0,
    work: 1,
    desc:
      "Gdy kapłan przyklęknie 🔔",
  },
  {
    title: "Aklamacja",
    importance: 0,
    desc:
      "Głosimy śmierć Twoją, Panie Jezu, wyznajemy Twoje zmartwychwstanie i oczekujemy Twego przyjścia w chwale.",
  },
  {
    title: "Doksologia",
    importance: 0,
    desc:
      "Przez Chrystusa, z Chrystusem i w Chrystusie Tobie Boże Ojcze Wszechmogący w Jedności Ducha Świętego wszelka cześć i chwała przez wszystkie wieki wieków",
  },
  {
    title: "Modlitwa pańska",
    importance: 0,
  },
  {
    title: "Znak pokoju",
    importance: 0,
  },
  {
    title: "Baranku Boży",
    importance: 0,
    desc: "Baranku Boży, który gładzisz grzechy świata, zmiłuj się nad nami. Baranku Boży, który gładzisz grzechy świata, zmiłuj się nad nami. Baranku Boży, który gładzisz grzechy świata, obdarz nas pokojem."
  },
  {
    title: "Dzwonki",
    importance: 0,
    work: 1,
    desc:
      'Po zakończeniu "Baranku Bozy" a dokłanie po słowach "obdarz nas pokojem" 🔔',
  },
  {
    title: 'Modlitwa "Panie nie jestem godzien.."',
    importance: 0,
  },
  {
    title: "Komunia Święta",
    importance: 0,
  },
  {
    title: "Pateny",
    importance: 0,
    work: 1,
    desc:
      'Ministrant staje po prawej stronie kapłana, i trzyma równo patenę tak aby żadne okruszki ani Komunia Święta nie upadła na podłogę.',
  },
  {
    title: "Ampułka z wodą",
    importance: 0,
    work: 1,
    desc:
      'Ministrant po zakończeniu rozdawania Komuni Świętej bierze ampułkę z wodą a następnie podchodzi do kapłana i nalewa do kielicha wodę.',
  },
  {
    title: "Modlitwa po Komuni Świętej",
    importance: 0,
  },
  {
    title: "Obrzędy zakończenia",
    importance: 1,
  },
  {
    title: "Ogłoszenia parafialne",
    importance: 0,
  },
  {
    title: "Prasa Katolicka",
    importance: 0,
    work: 1,
    desc:
      'Gdy rozpoczną się ogłoszenia parafialne wyznaczony ministrant idzie do zakrsti i bierze prase katolicką, a następnie udaje się do głównych drzwi wejściowych i po zakończeniu Mszy Świętej sprzedaje gazety po wyznaczonej cenie.',
  },
  {
    title: "Błogosławieństwo",
    importance: 0,
  },
  {
    title: "Pieśń na wyjście",
    importance: 0,
    end: 1,
  },
];

export const Msza = () => (
  <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <h2 className="font-extrabold text-3xl text-gray-800 my-4">
      <span className="text-blue-500">#3</span> Msza Święta
    </h2>
    <h3 className="font-extrabold text-2xl text-gray-800 my-4">
      Zgromadzenie liturgiczne
    </h3>
    <p className="mb-4">
    Jest to wspólnota wiernych zebranych dla sprawowania czynności liturgicznych pod przewodnictwem przedstawiciela hierarchii kościelnej.
    </p>
    <p className="mb-4">
    Celem każdego zgromadzenia liturgicznego jest uwielbienie Boga oraz dziękczynienie za dzieło stworzenia i zbawienia.
    </p>
    <p className="mb-4">
    Każdy ministrant, usługując kapłanowi, który działa w Osobie Jezusa Chrystusa, zostaje wyróżniony spośród całego zgromadzenia liturgicznego. Jest to zaszczyt, ale i zobowiązanie, aby służbę wykonywać jak najlepiej.
    </p>
    
    <h3 className="font-extrabold text-2xl text-gray-800 my-4">
      Części Mszy Świętej
    </h3>

    <div className="flow-root">
      <ul className="-mb-8">
        {data.map((item, index) => (
          <li>
            <div className="relative pb-6">
            {item.end ? null : (
                                    <span
                                    className="absolute top-4 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                    aria-hidden="true"
                                  />
                        )}
  
              <div className="relative flex space-x-3">
                <div>
                
                  <span
                    className={`${
                      item.importance ? "bg-blue-200" : "bg-gray-200"
                    }  ${item.work == 1 ? "bg-gray-400" : ""} h-10 w-10 rounded-full flex items-center justify-center ring-8 ring-white`}
                  >
                    {!item.work ? null : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        height="20px"
                        viewBox="0 0 20 20"
                        fill="#fff"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p
                      className={`text-gray-500 ${
                        item.importance ? "font-bold" : "font-normal"
                      } `}
                    >
                      {item.title}
                    </p>
                    <p
                      className={`text-gray-500 mt-2 italic ${
                        item.importance ? "font-bold" : "font-normal"
                      } `}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
