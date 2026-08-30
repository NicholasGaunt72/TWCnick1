import { Link } from "wouter";
import { assetUrl } from "@/lib/utils";
import { ArrowRight, Heart, Users, Sun, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Hero */}
      <section className="relative h-[85dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl('images/home1.png')} alt="TWC Farm" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-6 mt-16">
          <span className="inline-block glass-dark px-6 py-2 rounded-full font-medium tracking-widest text-sm uppercase text-secondary">Eendekuil, Western Cape</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight drop-shadow-lg">A Place of Safety and Second Chances.</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light drop-shadow-md">
            Genuine healing set on a farm in the open Western Cape countryside. Faith-based, community-led recovery from substance abuse.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="glass bg-secondary/80 text-white hover:bg-secondary/90 px-8 py-4 rounded-full font-medium transition-all w-full sm:w-auto text-center shadow-lg border-white/20">
              Get Help Today
            </Link>
            <Link href="/about" className="glass-dark hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all w-full sm:w-auto text-center">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-multiply" style={{ backgroundImage: `url(${assetUrl('images/parallax/1.jpg')})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', filter: 'blur(20px)' }}></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="glass-card rounded-[2rem] p-10 md:p-16 text-center space-y-8">
            <div className="glass w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-10 w-10 text-secondary" />
            </div>
            <h2 className="font-serif text-4xl text-foreground">Welcome to Together We Can</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2000, we have been a lifeline for individuals struggling with drug and alcohol addiction. 
              We believe that recovery is not just about stopping substance use—it is about rebuilding a life of purpose, 
              connection, and hope. Set in the quiet embrace of the countryside, our centre provides the space and support 
              needed for true transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Split Image / Text */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl('images/blog/2.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-[60px]" />
        </div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/40">
              <img src={assetUrl('images/1.jpg')} alt="TWC Environment" className="w-full h-full object-cover" />
            </div>
            <div className="glass-strong rounded-[2rem] p-10 md:p-12 space-y-8">
              <div>
                <h3 className="text-primary font-medium tracking-wider uppercase text-sm mb-3 glass px-4 py-1.5 rounded-full inline-block">Our Approach</h3>
                <h2 className="font-serif text-4xl text-foreground leading-tight mt-4">Rooted in Faith, Driven by Community</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg">
                We employ a holistic, faith-based approach that addresses the physical, emotional, and spiritual aspects of addiction. Our structured environment fosters accountability while surrounding residents with compassion.
              </p>
              <ul className="space-y-6 pt-4">
                {[
                  { icon: Shield, text: "A safe, structured farm environment away from the noise and triggers of city life." },
                  { icon: Users, text: "Guided by a team of dedicated professionals and experienced peers who truly understand." },
                  { icon: Sun, text: "A balanced focus on life skills, physical wellness, and emotional healing." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5 p-4 glass-card rounded-[1.5rem]">
                    <div className="p-3 rounded-full glass text-primary shrink-0">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-foreground pt-1.5 leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Teaser */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h3 className="inline-block glass px-4 py-1.5 rounded-full text-secondary font-medium tracking-wider uppercase text-sm mb-4">Our Programs</h3>
              <h2 className="font-serif text-4xl text-foreground">A Comprehensive Path to Recovery</h2>
            </div>
            <Link href="/information" className="glass px-6 py-3 rounded-full group flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
              View all programs <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "12 Step Program", desc: "Our Celebrate Recovery framework focuses on spiritual and emotional growth in a safe group setting.", icon: 1 },
              { title: "Therapon Thinking Errors", desc: "Helping residents identify, understand, and rewire destructive thought patterns that lead to relapse.", icon: 2 },
              { title: "Relapse Prevention", desc: "Equipping individuals with practical tools to manage triggers and sustain long-term sobriety.", icon: 3 }
            ].map((prog, i) => (
              <div key={i} className="glass-card rounded-[2rem] p-10 transition-all duration-300 hover:-translate-y-1">
                <div className="glass w-20 h-20 rounded-full flex items-center justify-center mb-8">
                  <img src={assetUrl(`images/line-icon-${prog.icon}.png`)} alt="" className="h-10 w-10 opacity-80" />
                </div>
                <h3 className="font-serif text-2xl mb-4">{prog.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Quote */}
      <section className="relative py-40 overflow-hidden flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${assetUrl('images/parallax/1.jpg')})` }}
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <div className="glass-card bg-white/10 backdrop-blur-md rounded-[2.5rem] p-12 md:p-20 max-w-5xl mx-auto border-white/30 shadow-2xl">
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight italic drop-shadow-md">
              "No matter how dark the past has been, the sun still rises on a new beginning."
            </h2>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl('images/blog/3.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-md" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row border-white/50 shadow-2xl">
            <div className="p-12 md:p-20 flex-1 flex flex-col justify-center text-foreground">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Take the First Step</h2>
              <p className="text-foreground/80 mb-10 max-w-lg text-lg leading-relaxed">
                Reaching out takes courage. We are here to listen, support, and guide you or your loved one towards recovery. You don't have to do this alone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="glass bg-secondary/80 text-white hover:bg-secondary/90 px-8 py-4 rounded-full font-medium transition-all text-center shadow-lg border-white/30">
                  Contact Us Now
                </Link>
                <a href="tel:0229421001" className="glass-dark hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2">
                  Call 022 942 1001
                </a>
              </div>
            </div>
            <div className="hidden md:block w-2/5 relative p-6">
              <div className="w-full h-full rounded-[2rem] overflow-hidden">
                <img src={assetUrl('images/blog/3.jpg')} alt="Supportive Environment" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
