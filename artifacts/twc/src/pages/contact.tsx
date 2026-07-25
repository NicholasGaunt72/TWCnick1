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
      <header className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl('images/blog/3d.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl mt-8">
          <div className="glass-card bg-white/10 backdrop-blur-md rounded-[2.5rem] p-12 border-white/30 shadow-2xl">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">Contact Us</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
              Whether you need help for yourself or a loved one, we are here to answer your questions and guide you on the next steps.
            </p>
          </div>
        </div>
      </header>

      <section className="relative py-24 bg-background">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-multiply" style={{ backgroundImage: `url(${assetUrl('images/parallax/1.jpg')})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', filter: 'blur(50px)' }}></div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="glass-strong rounded-[2.5rem] p-10 md:p-12 shadow-2xl border-white/50">
              <h2 className="font-serif text-3xl mb-8 text-foreground text-center">Send us a message</h2>
              {submitted ? (
                <div className="glass-card text-foreground p-10 rounded-[2rem] text-center space-y-6">
                  <div className="mx-auto w-20 h-20 glass-primary text-white rounded-full flex items-center justify-center mb-6 shadow-lg border-white/30">
                    <Send className="h-10 w-10" />
                  </div>
                  <h3 className="font-serif text-3xl">Message Sent</h3>
                  <p className="text-foreground/80 text-lg">Thank you for reaching out. We will get back to you as soon as possible with guidance and support.</p>
                  <button onClick={() => setSubmitted(false)} className="glass px-6 py-3 rounded-full text-primary font-medium hover:bg-white/60 mt-8 mx-auto block transition-all shadow-sm">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 px-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full rounded-full glass-input px-6 py-4 text-base placeholder:text-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 px-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full rounded-full glass-input px-6 py-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2 px-1">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full rounded-full glass-input px-6 py-4 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        placeholder="084 515 3953"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 px-1">How can we help?</label>
                    <textarea 
                      id="message" 
                      rows={6}
                      required
                      className="w-full rounded-[2rem] glass-input px-6 py-5 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none transition-all"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      placeholder="Please tell us a bit about your situation..."
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full glass bg-primary/80 text-white hover:bg-primary/90 px-6 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-3 text-lg mt-8 shadow-lg border-white/20">
                    Send Message <Send className="h-5 w-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Details */}
            <div className="space-y-8 flex flex-col">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="glass-card rounded-[2rem] p-8 flex flex-col gap-4 shadow-lg border-white/50 text-center items-center hover:-translate-y-1 transition-transform">
                  <div className="p-4 glass rounded-full w-fit mb-2 shadow-sm">
                    <MapPin className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-serif font-medium text-2xl">Address</h3>
                  <p className="text-foreground/80 text-base leading-relaxed">
                    6 Hoofstraat<br />
                    Eendekuil<br />
                    Western Cape<br />
                    South Africa
                  </p>
                </div>
                <div className="glass-card rounded-[2rem] p-8 flex flex-col gap-4 shadow-lg border-white/50 text-center items-center hover:-translate-y-1 transition-transform">
                  <div className="p-4 glass rounded-full w-fit mb-2 shadow-sm">
                    <Phone className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-serif font-medium text-2xl">Phone</h3>
                  <div className="text-foreground/80 text-base flex flex-col gap-2 mt-4">
                    <a href="tel:0229421001" className="hover:text-primary transition-colors glass px-4 py-2 rounded-full">022 942 1001</a>
                    <a href="tel:0845153953" className="hover:text-primary transition-colors glass px-4 py-2 rounded-full">084 515 3953</a>
                  </div>
                </div>
                <div className="glass-card rounded-[2rem] p-8 flex flex-col gap-4 sm:col-span-2 shadow-lg border-white/50 text-center items-center hover:-translate-y-1 transition-transform">
                  <div className="p-4 glass rounded-full w-fit mb-2 shadow-sm">
                    <Mail className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-serif font-medium text-2xl">Email</h3>
                  <div className="text-foreground/80 text-base flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center">
                    <a href="mailto:togetherwecanrehab@gmail.com" className="hover:text-primary transition-colors break-all glass px-6 py-3 rounded-full">togetherwecanrehab@gmail.com</a>
                    <a href="mailto:info@togetherwecanrehab.co.za" className="hover:text-primary transition-colors break-all glass px-6 py-3 rounded-full">info@togetherwecanrehab.co.za</a>
                  </div>
                </div>
              </div>
              
              <div className="rounded-[2.5rem] p-2 glass-strong overflow-hidden flex-1 min-h-[350px] shadow-xl border-white/50">
                <div className="w-full h-full rounded-[2rem] overflow-hidden">
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
        </div>
      </section>
    </div>
  );
}
