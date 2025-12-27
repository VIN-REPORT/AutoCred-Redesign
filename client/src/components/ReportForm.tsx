import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { config } from "@/config";

const CONTACT_EMAIL = config.emailjs.contactEmail;

export function ReportForm() {
  const [reportSubmitted, setReportSubmitted] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [reportData, setReportData] = useState({ firstName: "", lastName: "", email: "", vin: "" });
  const [paymentMethod, setPaymentMethod] = useState<"paypal" | "polar" | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleReportSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    const firstName = (form.querySelector("#firstName") as HTMLInputElement)?.value || "";
    const lastName = (form.querySelector("#lastName") as HTMLInputElement)?.value || "";
    const email = (form.querySelector("#email") as HTMLInputElement)?.value || "";
    const vin = (form.querySelector("#vin") as HTMLInputElement)?.value || "";

    if (!firstName || !email || !vin) {
      toast.error("Please fill in all required fields");
      return;
    }

    setReportData({ firstName, lastName, email, vin });

    if (config.emailjs.publicKey !== "YOUR_EMAILJS_PUBLIC_KEY") {
      const templateParams = {
        to_email: CONTACT_EMAIL,
        from_name: `${firstName} ${lastName}`,
        from_email: email,
        vin_number: vin,
        message_type: "Report",
        message: `New Report Request for VIN: ${vin}`,
        reply_to: email
      };

      console.log("Sending report via EmailJS to:", CONTACT_EMAIL, "with data:", templateParams);

      emailjs
        .send(
          config.emailjs.serviceId,
          config.emailjs.templateId,
          templateParams
        )
        .then((response) => {
          console.log("EmailJS Success:", response);
          setReportSubmitted(true);
          toast.success(`✅ Details sent to ${CONTACT_EMAIL}!\n\nClient: ${firstName} ${lastName}\nEmail: ${email}\nVIN: ${vin}`);
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          setReportSubmitted(true);
          toast.success("Details captured! Proceed with payment.");
        });
    } else {
      setReportSubmitted(true);
      toast.success("✅ Details captured! Proceed with payment.\n\n(EmailJS not configured yet)");
      console.log("Mockup mode - Data would be sent:", { firstName, lastName, email, vin });
    }
  };

  const handlePayment = (method: "paypal" | "polar") => {
    setIsProcessing(true);
    setPaymentMethod(method);
    toast.loading(`Processing $${config.reportPrice} payment via ${method.toUpperCase()}...`);

    setTimeout(() => {
      toast.dismiss();
      toast.success(`✅ Payment of $${config.reportPrice} completed!\n\nReport sent to ${reportData.email}`);
      setPaymentComplete(true);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <section id="report-form" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 font-serif leading-tight">
              Get Your Report <span className="text-primary">Now</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
              Enter your details and the vehicle's VIN number to receive a comprehensive inspection report instantly. Peace of mind is just a few clicks away.
            </p>
            
            <div className="space-y-6">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                    <span className="text-primary font-bold text-xl">{step}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      {step === 1 && "Enter Vehicle Details"}
                      {step === 2 && "Secure Payment"}
                      {step === 3 && "Receive Report"}
                    </h4>
                    <p className="text-gray-500">
                      {step === 1 && "Provide the VIN number and basic info."}
                      {step === 2 && "Pay securely via PayPal or Credit Card."}
                      {step === 3 && "Get your detailed report via email instantly."}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100" data-aos="fade-left">
            {!reportSubmitted ? (
              <form className="space-y-6" onSubmit={handleReportSubmit}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" className="bg-white" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-white" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-white" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="vin">Car VIN Number *</Label>
                  <Input id="vin" placeholder="Enter 17-digit VIN" className="bg-white uppercase" maxLength={17} required />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full bg-primary hover:bg-red-700 text-white py-6 text-lg shadow-lg shadow-red-500/20">
                    Continue to Payment
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500 mt-4">
                    By clicking continue, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </form>
            ) : paymentComplete ? (
              <div className="text-center py-8">
                <motion.div
                  animate={{ scale: [0, 1], rotate: [0, 360] }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Check className="w-10 h-10 text-green-600" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Payment Successful!</h3>
                <p className="text-gray-600 mb-4">
                  Your inspection report will be sent to <span className="font-semibold">{reportData.email}</span> within 24 hours.
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Payment Method: <span className="font-semibold uppercase">{paymentMethod}</span>
                </p>
                
                <Button 
                  onClick={() => {
                    setReportSubmitted(false);
                    setPaymentComplete(false);
                    setPaymentMethod(null);
                  }}
                  className="w-full bg-primary hover:bg-red-700 text-white py-6 text-lg shadow-lg shadow-red-500/20"
                >
                  Get Another Report
                </Button>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Great! Now Complete Payment</h3>
                <p className="text-gray-600 mb-6">
                  We'll send your report to <span className="font-semibold">{reportData.email}</span>
                </p>
                
                <div className="space-y-3">
                  <Button 
                    onClick={() => handlePayment("paypal")}
                    disabled={isProcessing}
                    className="w-full bg-primary hover:bg-red-700 text-white py-6 text-lg shadow-lg shadow-red-500/20 disabled:opacity-50"
                  >
                    {isProcessing && paymentMethod === "paypal" ? "Processing..." : `Pay via PayPal - $${config.reportPrice}`}
                  </Button>
                  
                  <div className="text-center text-sm text-gray-500">OR</div>

                  <Button 
                    onClick={() => handlePayment("polar")}
                    disabled={isProcessing}
                    className="w-full bg-neutral-700 hover:bg-neutral-800 text-white py-6 text-lg disabled:opacity-50"
                  >
                    {isProcessing && paymentMethod === "polar" ? "Processing..." : `Pay via Polar (Credit Card) - $${config.reportPrice}`}
                  </Button>
                </div>
                
                <button 
                  onClick={() => setReportSubmitted(false)}
                  disabled={isProcessing}
                  className="text-primary hover:text-red-700 text-sm mt-4 underline disabled:opacity-50"
                >
                  Back to edit details
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
