import { useState } from "react";
import { assetUrl } from "@/lib/utils";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // form UI only, no backend
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-muted/50 py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Whether you need help for yourself or a loved one, we are here to answer your questions and guide you on the next steps.
          </p>
        </div>
      </header>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-card rounded-3xl p-10 border border-border shadow-md">
              <h2 className="font-serif text-3xl mb-8 text-foreground">Send us a message</h2>
              {submitted ? (
                <div className="bg-primary/5 border border-primary/20 text-foreground p-8 rounded-2xl text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
                    <Send className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl">Message Sent</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We will get back to you as soon as possible with guidance and support.</p>
                  <button onClick={() => setSubmitted(false)} className="text-primary font-medium hover:underline mt-6 block mx-auto">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-shadow"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-shadow"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-shadow"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        placeholder="084 515 3953"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">How can we help?</label>
                    <textarea 
                      id="message" 
                      rows={6}
                      required
                      className="w-full rounded-xl border border-input bg-background px-4 py-3 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none transition-shadow"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      placeholder="Please tell us a bit about your situation..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 text-lg mt-4 shadow-sm">
                    Send Message <Send className="h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="space-y-8 flex flex-col">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-muted/50 rounded-2xl p-8 flex flex-col gap-4 border border-border">
                  <div className="p-3 bg-background rounded-full w-fit shadow-sm">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-serif font-medium text-xl">Address</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    6 Hoofstraat<br />
                    Eendekuil<br />
                    Western Cape<br />
                    South Africa
                  </p>
                </div>
                <div className="bg-muted/50 rounded-2xl p-8 flex flex-col gap-4 border border-border">
                  <div className="p-3 bg-background rounded-full w-fit shadow-sm">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-serif font-medium text-xl">Phone</h3>
                  <div className="text-muted-foreground text-base flex flex-col gap-2">
                    <a href="tel:0229421001" className="hover:text-primary transition-colors">Tel: 022 942 1001</a>
                    <a href="tel:0845153953" className="hover:text-primary transition-colors">Cell: 084 515 3953</a>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-2xl p-8 flex flex-col gap-4 sm:col-span-2 border border-border">
                  <div className="p-3 bg-background rounded-full w-fit shadow-sm">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-serif font-medium text-xl">Email</h3>
                  <div className="text-muted-foreground text-base flex flex-col sm:flex-row gap-6">
                    <a href="mailto:togetherwecanrehab@gmail.com" className="hover:text-primary transition-colors break-all">togetherwecanrehab@gmail.com</a>
                    <a href="mailto:info@togetherwecanrehab.co.za" className="hover:text-primary transition-colors break-all">info@togetherwecanrehab.co.za</a>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl overflow-hidden flex-1 min-h-[300px] border border-border shadow-sm">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.9688531778184!2d18.8820003!3d-32.8988636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c323f46f3a63ad1%3A0x6b2b5f7e71dbbc05!2s6%20Hoof%20St%2C%20Eendekuil%2C%207335%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
