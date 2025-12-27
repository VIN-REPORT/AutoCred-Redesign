import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { config } from "@/config";

const CONTACT_EMAIL = config.emailjs.contactEmail;

export function Contact() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const firstName = (e.currentTarget.querySelector("#contact-firstName") as HTMLInputElement)?.value;
    const lastName = (e.currentTarget.querySelector("#contact-lastName") as HTMLInputElement)?.value;
    const email = (e.currentTarget.querySelector("#contact-email") as HTMLInputElement)?.value;
    const message = (e.currentTarget.querySelector("#contact-message") as HTMLTextAreaElement)?.value;

    if (!firstName || !email || !message) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (config.emailjs.publicKey === "YOUR_EMAILJS_PUBLIC_KEY") {
      toast.error("EmailJS not configured yet. Contact admin to set it up.");
      return;
    }

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=General Inquiry from ${firstName} ${lastName}&body=Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
    toast.success("Opening your email client to send message to " + CONTACT_EMAIL);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Contact Us</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-gray-600">Have questions? We are here to help.</p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10" data-aos="fade-up">
          <form className="space-y-6" onSubmit={sendEmail}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contact-firstName">First Name *</Label>
                <Input id="contact-firstName" className="bg-gray-50 border-gray-200" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-lastName">Last Name</Label>
                <Input id="contact-lastName" className="bg-gray-50 border-gray-200" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-email">Email *</Label>
              <Input id="contact-email" type="email" className="bg-gray-50 border-gray-200" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-message">Message *</Label>
              <textarea 
                id="contact-message" 
                placeholder="How can we help you?"
                className="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              ></textarea>
            </div>
            <Button type="submit" className="w-full bg-neutral-900 hover:bg-neutral-800 text-white py-6">
              Send Message
            </Button>
            <p className="text-xs text-gray-400 text-center mt-2">
              Message will be sent to: {CONTACT_EMAIL}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
