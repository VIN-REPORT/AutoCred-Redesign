import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award } from "lucide-react";

export function History() {
  const history = [
    {
      icon: Target,
      title: "Our Vision",
      desc: "To be the most trusted automotive inspection service globally, empowering customers with transparent, accurate information for confident vehicle purchases."
    },
    {
      icon: Users,
      title: "Customer Focus",
      desc: "We prioritize our clients' satisfaction, ensuring every report is detailed, easy to understand, and actionable for informed decision-making."
    },
    {
      icon: Award,
      title: "Our Mission",
      desc: "To deliver exceptional car inspection services, exceeding customer expectations through expertise, integrity, and transparency in every report we generate."
    }
  ];

  return (
    <section id="history" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Our Story</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {history.map((item, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3 font-serif">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
