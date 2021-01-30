import { Header } from "./Header";

export const About = () => {
  return (
    <>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mt-20 flex flex-wrap justify-center md:justify-start">
        <Header category="O nas" title="Nasi księża" />
        <div className="w-full md:w-1/2 lg:w-2/6 flex justify-center items-center mb-12 md:mb-0">
          <div className="relative" style={{ height: "412px", width: "312px" }}>
            <img
              className="tomasz rounded-md shadow-2xl absolute z-10"
              src="/ksieza/tomasz.jpg"
              alt="Ksiądz Tomasz Trębacz"
            />
            <img
              className="robert rounded-md shadow-2xl absolute top-28 left-28"
              src="/ksieza/robert.jpg"
              alt="Ksiądz Robert Kufel"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-4/6 md:pl-8">
          <div>
            <p className="text-2xl font-semibold mb-3 uppercase">
              Tomasz Trębacz
            </p>
            <p className="text-gray-600">
              Proboszcz parafii p.w. Wniebowzięcia Najświętszej Marii Panny w
              Przytoku. Pochodzi ze Szprotawy. Urodził się w 1977 r. Po
              ukończeniu Szkoły Podstawowej równolegle ze Szkołą Muzyczną I-go
              Stopnia w Szprotawie, rozpoczął naukę w Zespole Szkół Rolniczych w
              Szprotawie. Po uzyskaniu świadectwa dojrzałości w 1997 r.,
              rozpoczął studia filozoficzno-teologiczne w Uniwersytecie A.
              Mickiewicza w Poznaniu z równoczesną formacją do kapłaństwa w
              Wyższym Zielonogórsko-Gorzowskim Seminarium Duchownym w
              Gościkowie-Paradyżu. W 2002 r. przyjął święcenia diakonatu z rąk
              bpa E. Dajczaka. W tym roku ukończył także Studium Organistowskie
              Diecezji Zielonogórsko-Gorzowskiej. W maju 2003 r. uzyskuje tytuł
              magistra teologii na podstawie pracy: Człowiek jako podmiot
              działania moralnego w pismach E. Stein. 24 maja 2003 r. przyjmuje
              święcenia kapłańskie z rąk bpa Adama Dyczkowskiego.
            </p>
          </div>
          <div>
            <p className="text-2xl font-semibold mb-3 mt-6 uppercase">
              Robert Kufel
            </p>
            <p className="text-gray-600">
              Dyrektor Archiwum Diecezjalnego w Zielonej Górze. Urodził się 2
              kwietnia 1966 w Wałczu. W 1991 ukończył Gorzowskie Wyższe
              Seminarium Duchowne w Paradyżu, zaś w 2001 studia doktoranckie na
              Papieskim Wydziale Teologicznym we Wrocławiu. Podyplomowe studia w
              zakresie archiwistyki na Wydziale Nauk Historycznych Uniwersytetu
              Mikołaja Kopernika w Toruniu skończył w 2002 Habilitację uzyskał w
              2011 na Papieskim Wydziale Teologicznym we Wrocławiu.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
