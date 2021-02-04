import { Header } from "./Header"

export const Opening = () => {
    return(
<div className="py-12 bg-white">
  <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    <Header title="Godziny Mszy Świętych" category="Godziny otwarcia" />
    <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
      <div>

        <div className="mt-5">
          <div className="text-2xl leading-6 font-bold text-gray-900">
            Przytok
          </div>
          <div className="mt-2 text-lg text-gray-600">
            <b>08:00</b> - Niedziela <br/>
            <b>12:30</b> - Niedziela <br/>
            <b>18:00</b> - Środa <br/>
            <b>18:00</b> - Piątek <br/>
          </div>
        </div>
      </div>

      <div>

        <div className="mt-5">
          <div className="text-2xl leading-6 font-bold text-gray-900">
            Droszków
          </div>
          <div className="mt-2 text-lg text-gray-600">
            <b>11:00</b> - Niedziela <br/>
            <b>17:30</b> - Niedziela <br/>
            <b>18:00</b> - Czwartek <br/>
            <b>18:00</b> - Sobota <br/>
          </div>
        </div>
      </div>

      <div>

        <div className="mt-5">
          <div className="text-2xl leading-6 font-bold text-gray-900">
            Jany
          </div>
          <div className="mt-2 text-lg text-gray-600">
            <b>09:30</b> - Niedziela <br/>
            <b>18:00</b> - Wtorek <br/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}