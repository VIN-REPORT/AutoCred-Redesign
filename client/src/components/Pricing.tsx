import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Pricing() {
  const features = [
    "Vehicle Specification",
    "DMV Title History",
    "Safety Recall Status",
    "Online Listing History",
    "Junk & Salvage Information",
    "Accident Information"
  ];

  const scrollToReport = () => {
    const element = document.querySelector("#report");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">AutoCred Inspection Plan</h2>
          <p className="text-gray-400 mb-12">Choose our competitively priced plan, designed to fit your budget.</p>
        </div>
        
        <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden" data-aos="zoom-in">
          <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-bl-xl">POPULAR</div>
          <h3 className="text-2xl font-bold mb-4">Standard Report</h3>
          <div className="text-5xl font-bold text-primary mb-2">${config.reportPrice}<span className="text-lg text-gray-500 font-normal">/report</span></div>
          <p className="text-gray-500 mb-8">One-time payment. Instant access.</p>

          <ul className="space-y-4 text-left max-w-md mx-auto mb-10">
            {features.map((item, i) => (
              <li key={i} className="flex items-center">
                <Check className="text-green-500 w-5 h-5 mr-3 shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <Button 
            onClick={scrollToReport}
            className="w-full bg-primary hover:bg-red-700 text-white text-lg py-6 rounded-xl shadow-xl shadow-red-500/20"
          >
            Get Report Now
          </Button>
        </div>
      </div>
    </section>
  );
}
