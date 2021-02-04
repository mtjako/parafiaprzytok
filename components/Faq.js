import { useState } from "react";

const questions = [
  {
    q: "Sakrament Chrztu Świętego",
    a:
      "Jest pierwszym z sakramentów, jaki może przyjąć nieochrzczony dotąd człowiek. Nazywany jest „bramą sakramentów” ponieważ otwiera człowieka na całą rzeczywistość bożej łaski. Bez ważnie przyjętego Sakramentu chrztu świętego, każdy inny sakrament jest nieważny. Aby Sakrament Chrztu św. mógł się odbyć należy przynajmniej miesiąc wcześniej należy zgłosić się do Kancelarii Parafialnej. Wymagane dokumenty to: Odpis zupełny aktu urodzenia dziecka; dane rodziców chrzestnych (osoba, która przystąpiła do Sakramentu bierzmowania i nie ma innych przeszkód tj. niewierząca, niepraktykująca, konkubinat).",
  },
  {
    q: "Sakrament Eucharystii",
    a:
      "Zgłoszenia dziecka dokonują rodzice we wrześniu na spotkaniu w kościele parafialnym. Warunkiem rozpoczęcia przygotowania do I Komunii św. jest uczestnictwo dziecka w lekcjach religii w szkole od klasy I-III włącznie. Spotkania formacyjne odbywają się w trzecią niedzielę miesiąca w kościele parafialnym po Mszy św. o godz. 12.30. Uroczystość I Komunii św. w parafii jest zawsze w pierwszą niedzielę maja (chyba, że występują inne przeszkody). ",
  },
  {
    q: "Sakrament Bierzmowania",
    a:
      "Rozpoczyna się ono w siódmej klasie Szkoły Podstawowej. Trwa dwa lata. Młodzież przeżywa formację w grupach: młodszej (7 klasa) i starszej (8 klasa). Po zakończeniu formacji (koniec klasy 8 lub początek szkoły średniej) przystępuje się do Sakramentu Dojrzałości Chrześcijańskiej. Od tego momentu młody człowiek sam odpowiada za swoją wiarę. Nabór do grupy formacyjnej dokonuje się na początku października. Spotkania formacyjne odbywają się w ostatni piątek każdego miesiąca po Mszy św. o godz. 18.00 w kościele parafialnym. Warunkiem uczestnictwa w formacji i przystąpienia do Sakramentu bierzmowania jest uczęszczanie na lekcje religii prowadzone w szkole, a także obecność na niedzielnych Mszach św. w parafii i niektórych nabożeństwach. ",
  },
  {
    q: "Sakrament Małżeństwa",
    a:
      "Aby zawrzeć ślub konkordatowy, należy zgłosić się minimum 6 miesięcy wcześniej w celu ustalenia i rezerwacji terminu ślubu do Kancelarii Parafialnej. Duszpasterz poinformuje o dalszych wymogach cywilnych i kościelnych. ",
  },
  {
    q: "Pogrzeb",
    a:
      "Katolicki pogrzeb przysługuje osobie ochrzczonej, która formalnym aktem nie wystąpiła z Kościoła Katolickiego. Po ustaleniu daty, godziny i miejsca pogrzebu z Firmą Pogrzebową, niezwłocznie kontaktujemy się z Duszpasterzem. Do Kancelarii Parafialnej należy przynieść Oryginał Aktu Zgonu. Jeśli osoba zmarła nie mieszkała na terenie parafii w której będzie pogrzeb, potrzebne jest zezwolenie od Proboszcza parafii ostatniego miejsca zamieszkania osoby zmarłej. ",
  },
];

const Item = ({ question }) => {
  const [open, setOpen] = useState(0);
  return (
    <div className="pt-6">
      <div className="text-lg">
        <button
          onClick={() => setOpen(!open)}
          className="text-left w-full flex justify-between items-start text-gray-400"
        >
          <span className="font-medium text-gray-900">{question.q}</span>
          <span className="ml-6 h-7 flex items-center">
            <svg
              className="-rotate-180 h-6 w-6 transform"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </div>
      <dd className={`mt-2 pr-12 ${open ? "" : "hidden"}`}>
        <p className="text-base text-gray-500">{question.a}</p>
      </dd>
    </div>
  );
};

export const Faq = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto py-12  sm:py-16 ">
        <div className="max-w-3xl mx-auto ">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              FAQ
            </h2>
            <p className="mt-4 text-lg leading-6 text-gray-500">
              Najczęściej zadawane pytania
            </p>
          </div>
          <div className="mt-6 space-y-6 divide-y divide-gray-200">
            {questions.map((question, index) => (
              <Item question={question} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
