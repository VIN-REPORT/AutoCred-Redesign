import { Users, Shield, Phone } from "lucide-react";
import mechanicTablet from "@assets/stock_images/mechanic_holding_a_t_65a77056.jpg";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: "Expertise",
      desc: "Benefit from our knowledgeable team for informed decisions."
    },
    {
      icon: Shield,
      title: "Trustworthy Information",
      desc: "Rely on accurate data for peace of mind."
    },
    {
      icon: Phone,
      title: "Dependable Support",
      desc: "Count on us for consistent, reliable assistance throughout your journey."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Why Choose Us?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Your Trusted Automotive Partner: Reliable expertise, accurate data, and consistent support.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <reason.icon className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{reason.title}</h4>
                    <p className="text-gray-600">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-2" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl" />
            <img 
              src={mechanicTablet} 
              alt="Professional Mechanic Technician" 
              loading="lazy"
              className="relative z-10 rounded-3xl shadow-2xl w-full h-auto max-h-[600px] object-contain"
              style={{ minHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
