import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Check, ArrowRight, Shield, Car, FileText, Star, Users, History, Activity, AlertCircle, Eye, Target, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

// Images from stock tool
import heroImage from "@assets/stock_images/professional_mechani_f76e020a.jpg";
import carLiftImage from "@assets/stock_images/car_underbody_inspec_9aa272cb.jpg";
import luxuryCarImage from "@assets/stock_images/luxury_red_car_or_sl_99441323.jpg";
import mechanicTablet from "@assets/stock_images/mechanic_holding_a_t_65a77056.jpg";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Replace these with your actual EmailJS credentials
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.currentTarget, 'YOUR_PUBLIC_KEY')
    
    // Simulating success for now
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
    (e.target as HTMLFormElement).reset();
  };

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About Us", href: "#about" },
    { name: "History", href: "#history" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen font-sans text-gray-900 overflow-x-hidden bg-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo Placeholder */}
            <div className="flex items-center gap-2">
               {/* Replace with actual logo when provided */}
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg text-white font-bold text-xl">
                A
              </div>
              <span className={`text-2xl font-bold font-serif ${isScrolled ? "text-gray-900" : "text-white"}`}>
                Auto<span className="text-primary">Cred</span> Inspection
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isScrolled ? "text-gray-700" : "text-gray-200"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-primary hover:bg-red-700 text-white font-semibold rounded-full px-6 shadow-lg shadow-red-500/30 transition-all hover:scale-105">
                Get Report
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-md ${isScrolled ? "text-gray-900" : "text-white"}`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-base font-medium text-gray-800 hover:text-primary py-2 border-b border-gray-50"
                  >
                    {link.name}
                  </a>
                ))}
                <Button className="w-full bg-primary hover:bg-red-700 text-white mt-4">
                  Get Report
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
          <img
            src={heroImage}
            alt="Mechanic inspecting car"
            className="w-full h-full object-cover object-center"
          />
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
              <Button size="lg" className="bg-primary hover:bg-red-700 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl shadow-red-600/20">
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

      {/* Services Section */}
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
            {[
              { title: "Vehicle History", icon: History, desc: "Complete history including accidents, title issues, and previous owners." },
              { title: "Mechanical Check", icon: Activity, desc: "Detailed analysis of engine, transmission, and vital systems." },
              { title: "Safety Inspection", icon: Shield, desc: "Verification of airbags, brakes, and all safety features." },
              { title: "Visual Inspection", icon: Eye, desc: "High-resolution photos of every angle and potential imperfection." }, // Added Eye icon import needed
              { title: "Market Value", icon: Star, desc: "Accurate valuation based on current market trends and condition." },
              { title: "Recall Check", icon: AlertCircle, desc: "Check for any open manufacturer recalls on the vehicle." }
            ].map((service, index) => (
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

      {/* Report Form Section */}
      <section id="report" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">
                Get Your Report <span className="text-primary">Now</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Enter your details and the vehicle's VIN number to receive a comprehensive inspection report instantly. Peace of mind is just a few clicks away.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Enter Vehicle Details</h4>
                    <p className="text-gray-500">Provide the VIN number and basic info.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Secure Payment</h4>
                    <p className="text-gray-500">Pay securely via PayPal or Credit Card.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Receive Report</h4>
                    <p className="text-gray-500">Get your detailed report via email instantly.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100" data-aos="fade-left">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-white" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="vin">Car VIN Number</Label>
                  <Input id="vin" placeholder="Enter 17-digit VIN" className="bg-white uppercase" maxLength={17} />
                </div>

                <div className="pt-4">
                  {/* PayPal Integration */}
                  <PayPalScriptProvider options={{ clientId: "test", currency: "USD" }}>
                    <div className="mb-4">
                       <PayPalButtons 
                          style={{ layout: "vertical", color: "gold", shape: "rect", label: "pay" }}
                          createOrder={(data, actions) => {
                            return actions.order.create({
                              intent: "CAPTURE",
                              purchase_units: [
                                {
                                  amount: {
                                    value: "10.00",
                                    currency_code: "USD"
                                  },
                                },
                              ],
                            });
                          }}
                          onApprove={async (data, actions) => {
                            if (actions.order) {
                                await actions.order.capture();
                                toast({
                                  title: "Payment Successful",
                                  description: "Thank you for your purchase!",
                                });
                            }
                          }}
                       />
                    </div>
                  </PayPalScriptProvider>
                  
                  <div className="text-center my-2 text-sm text-gray-500">- OR -</div>

                  <Button className="w-full bg-primary hover:bg-red-700 text-white py-6 text-lg shadow-lg shadow-red-500/20">
                    Pay via Polar (Credit Card)
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500 mt-4">
                    By clicking submit, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-neutral-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 font-serif" data-aos="fade-up">Serving Customers Worldwide</h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
            {/* Flags Placeholders - Replacing with text for now as per constraints, could be images */}
            {["United States", "Canada", "United Kingdom", "Australia", "France", "Germany"].map((country) => (
              <div key={country} className="flex flex-col items-center gap-3" data-aos="zoom-in">
                 <div className="w-16 h-10 bg-neutral-800 rounded flex items-center justify-center text-xs border border-neutral-700">
                   Flag
                 </div>
                 <span className="text-sm font-medium">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
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
                  <p className="text-gray-500">Satisfied Clients</p>
                </div>
              </div>

              <Button className="bg-neutral-900 hover:bg-neutral-800 text-white px-8">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 bg-gray-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Our History</h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
              <p className="text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to a globally trusted automotive service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               <Card className="border-none shadow-md" data-aos="fade-right">
                 <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                       <Target className="text-primary w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 font-serif">Our Vision</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To be the leading provider of trusted and accurate automotive information, empowering vehicle owners worldwide to make safe and informed decisions.
                    </p>
                 </CardContent>
               </Card>
               <Card className="border-none shadow-md" data-aos="fade-left">
                 <CardContent className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                       <Award className="text-primary w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 font-serif">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed">
                      To deliver exceptional car inspection services, exceeding customer expectations through expertise, integrity, and transparency in every report we generate.
                    </p>
                 </CardContent>
               </Card>
            </div>
         </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">Why Choose Us?</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Your Trusted Automotive Partner: Reliable expertise, accurate data, and consistent support.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Users className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Expertise</h4>
                    <p className="text-gray-600">Benefit from our knowledgeable team for informed decisions.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Shield className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Trustworthy Information</h4>
                    <p className="text-gray-600">Rely on accurate data for peace of mind.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <Phone className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Dependable Support</h4>
                    <p className="text-gray-600">Count on us for consistent, reliable assistance throughout your journey.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative" data-aos="fade-left">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3" />
              <img 
                src={mechanicTablet} 
                alt="Professional Mechanic" 
                className="relative rounded-3xl shadow-xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">AutoCred Inspection Plan</h2>
            <p className="text-gray-400 mb-12">Choose our competitively priced plan, designed to fit your budget.</p>
           </div>
           
           <div className="bg-white text-gray-900 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden" data-aos="zoom-in">
             <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-2 rounded-bl-xl">POPULAR</div>
             <h3 className="text-2xl font-bold mb-4">Standard Report</h3>
             <div className="text-5xl font-bold text-primary mb-2">$10<span className="text-lg text-gray-500 font-normal">/report</span></div>
             <p className="text-gray-500 mb-8">One-time payment. Instant access.</p>

             <ul className="space-y-4 text-left max-w-md mx-auto mb-10">
               {[
                 "Vehicle Specification",
                 "DMV Title History",
                 "Safety Recall Status",
                 "Online Listing History",
                 "Junk & Salvage Information",
                 "Accident Information"
               ].map((item, i) => (
                 <li key={i} className="flex items-center">
                   <Check className="text-green-500 w-5 h-5 mr-3 shrink-0" />
                   <span className="font-medium">{item}</span>
                 </li>
               ))}
             </ul>

             <Button className="w-full bg-primary hover:bg-red-700 text-white text-lg py-6 rounded-xl shadow-xl shadow-red-500/20">
               Get Report Now
             </Button>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Contact Us</h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-gray-600">Have questions? We are here to help.</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10" data-aos="fade-up">
            <form className="space-y-6" onSubmit={sendEmail}>
               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-firstName">First Name</Label>
                    <Input id="contact-firstName" className="bg-gray-50 border-gray-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-lastName">Last Name</Label>
                    <Input id="contact-lastName" className="bg-gray-50 border-gray-200" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input id="contact-email" type="email" className="bg-gray-50 border-gray-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-vin">Car VIN Number</Label>
                  <Input id="contact-vin" className="bg-gray-50 border-gray-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <textarea 
                    id="contact-message" 
                    className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  ></textarea>
                </div>
                <Button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-6">
                  Send Message
                </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
