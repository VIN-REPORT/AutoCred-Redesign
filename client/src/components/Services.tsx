import { Shield, Car, FileText, Star, AlertCircle, Eye, History, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Services() {
  const services = [
    { title: "Vehicle History", icon: History, desc: "Complete history including accidents, title issues, and previous owners." },
    { title: "Mechanical Check", icon: Activity, desc: "Detailed analysis of engine, transmission, and vital systems." },
    { title: "Safety Inspection", icon: Shield, desc: "Verification of airbags, brakes, and all safety features." },
    { title: "Visual Inspection", icon: Eye, desc: "High-resolution photos of every angle and potential imperfection." },
    { title: "Market Value", icon: Star, desc: "Accurate valuation based on current market trends and condition." },
    { title: "Recall Check", icon: AlertCircle, desc: "Check for any open manufacturer recalls on the vehicle." }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">AutoCred Inspection Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We ensure your vehicle is in perfect condition with our detailed inspection points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="h-2 bg-primary w-0 group-hover:w-full transition-all duration-500" />
              <CardContent className="p-8">
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-serif group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
