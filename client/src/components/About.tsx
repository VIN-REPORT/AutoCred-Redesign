import luxuryCarImage from "@assets/stock_images/luxury_red_car_or_sl_99441323.jpg";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gray-100 rounded-full z-0" />
            <img 
              src={luxuryCarImage} 
              alt="Luxury Car" 
              className="relative z-10 rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          
          <div data-aos="fade-left">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Your Trusted Car Inspection Experts</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              AutoCred Inspection: Unbiased car inspections for confident decisions. Certified inspectors provide clear, comprehensive evaluations of your vehicle's condition.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We assess everything from engine to tires, using advanced tools to find potential problems. Receive a clear report outlining needed repairs or maintenance.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-4xl font-bold text-primary mb-1">15k+</h4>
                <p className="text-gray-500">Inspections Done</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-primary mb-1">98%</h4>
                <p className="text-gray-500">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
