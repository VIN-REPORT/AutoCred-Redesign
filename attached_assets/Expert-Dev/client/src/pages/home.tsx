import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Menu, X, Car, Shield, Users, Award, Mail, Phone, MapPin, ChevronRight, Eye, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const countries = [
  { name: "France", flag: "https://flagcdn.com/w160/fr.png" },
  { name: "United States", flag: "https://flagcdn.com/w160/us.png" },
  { name: "Canada", flag: "https://flagcdn.com/w160/ca.png" },
  { name: "Australia", flag: "https://flagcdn.com/w160/au.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w160/gb.png" },
  { name: "New Zealand", flag: "https://flagcdn.com/w160/nz.png" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <Car className="w-8 h-8 text-red-600" />
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              Auto<span className="text-red-600">Cred</span> Inspection
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
                data-testid={`nav-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#report")}
              className="bg-red-600 hover:bg-red-700 text-white"
              data-testid="nav-get-report"
            >
              Get Report
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-700 hover:text-red-600 font-medium"
                data-testid={`mobile-nav-${item.name.toLowerCase().replace(' ', '-')}`}
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#report")}
              className="w-full bg-red-600 hover:bg-red-700 text-white"
              data-testid="mobile-get-report"
            >
              Get Report
            </Button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home" className="pt-20 md:pt-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Get a Clear Picture{" "}
              <span className="text-red-600">Before You Buy</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Protect yourself from buying a used car with hidden problems. Our
              comprehensive inspections give you the information you need to make
              a confident decision.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                onClick={() => document.querySelector("#report")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-get-report"
              >
                Get Report
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-6 text-lg"
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="hero-learn-more"
              >
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
                alt="Professional car inspection"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceTaglineSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AutoCred Inspection Service
          </h2>
          <p className="text-lg text-gray-600">
            we ensure your car is in perfect condition.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-4xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80"
              alt="Car inspection service"
              className="w-full h-auto object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function VinReportForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    vinNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "vinNumber") {
      setFormData({ ...formData, [name]: value.toUpperCase().slice(0, 17) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="report" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your Report now
          </h2>
        </AnimatedSection>

        <AnimatedSection>
          <Card className="max-w-xl mx-auto p-6 md:p-8 shadow-lg bg-white">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="focus:ring-red-500 focus:border-red-500"
                    data-testid="input-first-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="focus:ring-red-500 focus:border-red-500"
                    data-testid="input-last-name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="focus:ring-red-500 focus:border-red-500"
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="vinNumber">Car VIN Number</Label>
                <Input
                  id="vinNumber"
                  name="vinNumber"
                  placeholder="Enter 17-character VIN"
                  value={formData.vinNumber}
                  onChange={handleChange}
                  maxLength={17}
                  className="focus:ring-red-500 focus:border-red-500 uppercase"
                  data-testid="input-vin"
                />
                <p className="text-xs text-gray-500">
                  {formData.vinNumber.length}/17 characters
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
                data-testid="submit-report-form"
              >
                Submit
              </Button>
            </form>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}

function GlobalServiceAreas() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Where We Provide Service
          </h2>
          <p className="text-lg text-gray-600">
            Serving Customers Across the World
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-center text-gray-600 mb-8">
            We proudly offer our services throughout the World.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="flex animate-scroll gap-8">
            {[...countries, ...countries].map((country, index) => (
              <div
                key={`${country.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-3"
              >
                <div className="w-32 h-20 rounded-lg overflow-hidden shadow-md border border-gray-200">
                  <img
                    src={country.flag}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
                alt="Professional car inspection"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                About Us
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-6">
                Your Trusted Car Inspection Experts
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  AutoCred Inspection: Unbiased car inspections for confident
                  decisions. Certified inspectors provide clear, comprehensive
                  evaluations of your vehicle's condition.
                </p>
                <p>
                  We assess everything from engine to tires, using advanced tools
                  to find potential problems. Receive a clear report outlining
                  needed repairs or maintenance.
                </p>
                <p>
                  AutoCred Inspection is committed to integrity and customer
                  satisfaction. Our passionate team provides exceptional service,
                  building trust and exceeding expectations. Choose AutoCred for
                  peace of mind.
                </p>
              </div>
              <Button
                className="mt-8 bg-red-600 hover:bg-red-700 text-white px-8"
                onClick={() => document.querySelector("#report")?.scrollIntoView({ behavior: "smooth" })}
                data-testid="about-get-report"
              >
                Get Your Report
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function HistorySection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our History
          </h2>
          <h3 className="text-xl text-gray-600">
            Our Journey Through Excellence
          </h3>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From humble beginnings to a globally trusted automotive service,
            AutoCred Inspection has grown by prioritizing customer satisfaction
            and reliable vehicle evaluations.
          </p>
        </AnimatedSection>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeInUp}>
            <Card className="p-6 md:p-8 h-full bg-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Vision</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To be the leading provider of trusted and accurate automotive
                information, empowering vehicle owners worldwide.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="p-6 md:p-8 h-full bg-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Mission</h4>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional car inspection services, exceeding customer
                expectations through expertise, integrity, and transparency.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Expertise",
      description: "Benefit from our knowledgeable team for informed decisions.",
    },
    {
      icon: Shield,
      title: "Trustworthy Information",
      description: "Rely on accurate data for peace of mind.",
    },
    {
      icon: Users,
      title: "Dependable Support",
      description: "Count on us for consistent, reliable assistance throughout your automotive journey.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-2">
            WHY CHOOSE US
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Expertise. Trust. Reliability.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your Trusted Automotive Partner: Reliable expertise, accurate data,
            and consistent support for a smooth automotive journey.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                alt="Automotive professional"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    vinNumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "vinNumber") {
      setFormData({ ...formData, [name]: value.toUpperCase().slice(0, 17) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need assistance? Contact us today for personalized
            support and expert guidance on all things automotive.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                We are here to help you with any queries or support you need
                regarding our services. Our team responds quickly!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:autocredinspection@gmail.com"
                      className="text-gray-900 hover:text-red-600 transition-colors"
                      data-testid="contact-email"
                    >
                      autocredinspection@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-6 md:p-8 shadow-lg bg-white">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactFirstName">First Name</Label>
                    <Input
                      id="contactFirstName"
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="focus:ring-red-500 focus:border-red-500"
                      data-testid="contact-input-first-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactLastName">Last Name</Label>
                    <Input
                      id="contactLastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="focus:ring-red-500 focus:border-red-500"
                      data-testid="contact-input-last-name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email</Label>
                  <Input
                    id="contactEmail"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="focus:ring-red-500 focus:border-red-500"
                    data-testid="contact-input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactVinNumber">Car VIN Number</Label>
                  <Input
                    id="contactVinNumber"
                    name="vinNumber"
                    placeholder="Enter 17-character VIN"
                    value={formData.vinNumber}
                    onChange={handleChange}
                    maxLength={17}
                    className="focus:ring-red-500 focus:border-red-500 uppercase"
                    data-testid="contact-input-vin"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="focus:ring-red-500 focus:border-red-500"
                    data-testid="contact-input-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
                  data-testid="submit-contact-form"
                >
                  Submit
                </Button>
              </form>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function TrustBadges() {
  const badges = [
    { name: "NMVTIS", logo: "https://placehold.co/160x60/f3f4f6/6b7280?text=NMVTIS" },
    { name: "Kelley Blue Book", logo: "https://placehold.co/160x60/f3f4f6/6b7280?text=KBB" },
    { name: "J.D. Power", logo: "https://placehold.co/160x60/f3f4f6/6b7280?text=JD+Power" },
    { name: "NADA", logo: "https://placehold.co/160x60/f3f4f6/6b7280?text=NADA" },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            The AutoCred Inspection Report includes information gathered from the
            industry's most known and trustworthy data providers and specialists.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {badges.map((badge, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={badge.logo}
                  alt={badge.name}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Disclaimer
          </h3>
          <p className="text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Dear loyal Customers, We are approved licensed resellers of NMVTIS data
            supplier, and we solely employ SEO and Social Media Marketing to drive
            visitors to our website by delivering accurate and comprehensive
            information.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-8 h-8 text-red-500" />
              <span className="text-xl font-bold">
                Auto<span className="text-red-500">Cred</span> Inspection
              </span>
            </div>
            <p className="text-gray-400">
              Your trusted partner for comprehensive vehicle history reports.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                    data-testid={`footer-${item.name.toLowerCase().replace(' ', '-')}`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                autocredinspection@gmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoCred Inspection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServiceTaglineSection />
      <VinReportForm />
      <GlobalServiceAreas />
      <AboutSection />
      <HistorySection />
      <WhyChooseUs />
      <ContactSection />
      <TrustBadges />
      <DisclaimerSection />
      <Footer />
    </div>
  );
}
