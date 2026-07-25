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
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-6">
          <span className="font-medium tracking-widest text-sm uppercase text-secondary">Eendekuil, Western Cape</span>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight">A Place of Safety and Second Chances.</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Genuine healing set on a farm in the open Western Cape countryside. Faith-based, community-led recovery from substance abuse.
          </p>
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-md font-medium transition-colors w-full sm:w-auto text-center">
              Get Help Today
            </Link>
            <Link href="/about" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/30 px-8 py-4 rounded-md font-medium transition-colors w-full sm:w-auto text-center">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-8">
          <Heart className="h-12 w-12 text-secondary mx-auto" />
          <h2 className="font-serif text-4xl text-foreground">Welcome to Together We Can</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Since 2000, we have been a lifeline for individuals struggling with drug and alcohol addiction. 
            We believe that recovery is not just about stopping substance use—it is about rebuilding a life of purpose, 
            connection, and hope. Set in the quiet embrace of the countryside, our centre provides the space and support 
            needed for true transformation.
          </p>
        </div>
      </section>

      {/* Split Image / Text */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <img src={assetUrl('images/1.jpg')} alt="TWC Environment" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-primary font-medium tracking-wider uppercase text-sm mb-3">Our Approach</h3>
                <h2 className="font-serif text-4xl text-foreground leading-tight">Rooted in Faith, Driven by Community</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We employ a holistic, faith-based approach that addresses the physical, emotional, and spiritual aspects of addiction. Our structured environment fosters accountability while surrounding residents with compassion.
              </p>
              <ul className="space-y-6 pt-4">
                {[
                  { icon: Shield, text: "A safe, structured farm environment away from the noise and triggers of city life." },
                  { icon: Users, text: "Guided by a team of dedicated professionals and experienced peers who truly understand." },
                  { icon: Sun, text: "A balanced focus on life skills, physical wellness, and emotional healing." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
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
              <h3 className="text-secondary font-medium tracking-wider uppercase text-sm mb-3">Our Programs</h3>
              <h2 className="font-serif text-4xl text-foreground">A Comprehensive Path to Recovery</h2>
            </div>
            <Link href="/information" className="group flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors pb-2">
              View all programs <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "12 Step Program", desc: "Our Celebrate Recovery framework focuses on spiritual and emotional growth in a safe group setting.", icon: 1 },
              { title: "Therapon Thinking Errors", desc: "Helping residents identify, understand, and rewire destructive thought patterns that lead to relapse.", icon: 2 },
              { title: "Relapse Prevention", desc: "Equipping individuals with practical tools to manage triggers and sustain long-term sobriety.", icon: 3 }
            ].map((prog, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
                <img src={assetUrl(`images/line-icon-${prog.icon}.png`)} alt="" className="h-14 w-14 mb-8 opacity-80" />
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
        <div className="absolute inset-0 bg-primary/85 mix-blend-multiply z-10" />
        <div className="relative z-20 container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white max-w-5xl mx-auto leading-tight italic">
            "No matter how dark the past has been, the sun still rises on a new beginning."
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[2rem] overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="p-12 md:p-20 flex-1 flex flex-col justify-center text-primary-foreground">
              <h2 className="font-serif text-4xl md:text-5xl mb-6">Take the First Step</h2>
              <p className="text-primary-foreground/90 mb-10 max-w-lg text-lg leading-relaxed">
                Reaching out takes courage. We are here to listen, support, and guide you or your loved one towards recovery. You don't have to do this alone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-md font-medium transition-colors text-center">
                  Contact Us Now
                </Link>
                <a href="tel:0229421001" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-medium transition-colors flex items-center justify-center gap-2">
                  Call 022 942 1001
                </a>
              </div>
            </div>
            <div className="hidden md:block w-2/5 relative">
              <img src={assetUrl('images/blog/3.jpg')} alt="Supportive Environment" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
