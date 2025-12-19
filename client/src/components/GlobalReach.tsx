export function GlobalReach() {
  const countries = [
    { name: "USA", flag: "🇺🇸" },
    { name: "Canada", flag: "🇨🇦" },
    { name: "UK", flag: "🇬🇧" },
    { name: "Australia", flag: "🇦🇺" },
    { name: "France", flag: "🇫🇷" },
    { name: "Germany", flag: "🇩🇪" }
  ];

  return (
    <section className="py-16 md:py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif" data-aos="fade-up">Serving Customers Worldwide</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 place-items-center w-full">
          {countries.map((country) => (
            <div key={country.name} className="flex flex-col items-center justify-center gap-2 md:gap-3 w-full" data-aos="zoom-in">
              <div className="text-4xl md:text-5xl lg:text-6xl">
                {country.flag}
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-300">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
