import { Header } from "./Header";

export const About = () => {
  return (
    <>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mt-20 flex flex-wrap justify-center md:justify-start">
        <Header category="O nas" title="Nasz proboszcz" />
        <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center items-center mb-12 md:mb-0">
          <img
            className="rounded-md shadow-2xl"
            src="/ksieza/tomasz.jpg"
            alt="Ksiądz Tomasz Trębacz"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-4/6 md:pl-8">
          <div>
            <p className="text-2xl font-semibold mb-3 uppercase">
              Tomasz Trębacz
            </p>
            <p className="text-gray-600">
              Proboszcz parafii p.w. Wniebowzięcia Najświętszej Marii Panny w
              Przytoku. Pochodzi ze Szprotawy. Po uzyskaniu świadectwa
              dojrzałości w 1997 r., rozpoczął studia filozoficzno-teologiczne w
              Uniwersytecie A. Mickiewicza w Poznaniu z równoczesną formacją do
              kapłaństwa w Wyższym Zielonogórsko-Gorzowskim Seminarium Duchownym
              w Gościkowie-Paradyżu. W 2002 r. przyjął święcenia diakonatu z rąk
              bpa E. Dajczaka. W tym roku ukończył także Studium Organistowskie
              Diecezji Zielonogórsko-Gorzowskiej. W maju 2003 r. uzyskuje tytuł
              magistra teologii w Uniwersytecie Adama Mickiewicza w Poznaniu na
              podstawie pracy: Człowiek jako podmiot działania moralnego w
              pismach E. Stein. 24 maja 2003 r. przyjmuje święcenia kapłańskie z
              rąk bpa Adama Dyczkowskiego. Po święceniach pracuje w parafiach:
              NSPJ w Żarach; Matki Bożej Różańcowej w Jasieniu. W 2007 r.
              uzyskał doktorat w Uniwersytecie Opolskim na podstawie rozprawy
              „Szaran jako źródło zła. Studium dogmatyczno-pastoralne”. Przez
              siedem lat pracował w Kurii biskupiej w Zielonej Górze pełniąc
              funkcje: Notariusza; Redaktora Naczelnego urzędowego pisma
              diecezji Ecclesiastica, Notariusza w procesie beatyfikacyjnym
              Sługi Bożego bpa W. Pluty; Egzorcysty diecezjalnego oraz
              Sekretarza bpa T. Lityńskiego. Obecnie pełni urząd proboszcza
              naszej parafii i egzorcysty diecezjalnego. Jest autorem kilku
              książek i artykułów naukowych i popularnonaukowych.
              Zainteresowania: teologia, archeologia, muzyka organowa.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
