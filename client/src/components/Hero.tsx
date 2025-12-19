import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/professional_mechani_f76e020a.jpg";

export function Hero() {
  const scrollToReport = () => {
    const element = document.querySelector("#report");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <img src={heroImage} alt="Mechanic inspecting car" className="w-full h-full object-cover object-center" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Get a Clear Picture <br />
            <span className="text-primary">Before You Buy</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
            Protect yourself from buying a used car with hidden problems. Our comprehensive inspections give you the information you need to make a confident decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={scrollToReport}
              size="lg" 
              className="bg-primary hover:bg-red-700 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl shadow-red-600/20"
            >
              Get Your Report Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 h-auto rounded-full bg-transparent">
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 flex gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Check className="text-primary w-5 h-5" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-primary w-5 h-5" />
              <span>Global Database</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-primary w-5 h-5" />
              <span>Trusted by Thousands</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
