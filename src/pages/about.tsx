import { assetUrl } from "@/lib/utils";

export default function About() {
  const staff = [
    { name: "Uncle Dave", role: "Founder / Director" },
    { name: "Chris", role: "Facility Manager" },
    { name: "Sister Kroon", role: "Medical Staff" },
    { name: "Sister Boshoff", role: "Medical Staff" },
    { name: "Lee", role: "Counselor" },
    { name: "Hein", role: "Support Staff" },
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl('images/parallax/1.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl mt-8">
          <div className="glass-card bg-white/10 backdrop-blur-md rounded-[2.5rem] p-12 border-white/30 shadow-2xl">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">Our Story</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
              Building a legacy of healing, community, and second chances since 2000.
            </p>
          </div>
        </div>
      </header>

      {/* The Story */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: `url(${assetUrl('images/blog/1.jpg')})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', filter: 'blur(30px)' }}></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="glass-strong rounded-[2.5rem] p-10 md:p-12 space-y-8 border-white/50 shadow-xl">
              <h2 className="font-serif text-4xl text-primary leading-tight">Over Two Decades of Restoring Hope</h2>
              <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
                <p className="glass-card p-6 rounded-[1.5rem]">
                  Founded in the year 2000 in the quiet, supportive community of Eendekuil in the Western Cape, 
                  Together We Can Rehabilitation was born out of a profound need to offer genuine help to those 
                  lost to addiction.
                </p>
                <p className="glass-card p-6 rounded-[1.5rem]">
                  We chose a farm setting deliberately. There is something profoundly healing about the countryside—
                  away from the noise, the triggers, and the relentless pace of city life. Here, our residents can breathe, reflect, 
                  and rebuild. We are a faith-based institution that believes every person has inherent worth and the 
                  capacity to change, no matter how far they have fallen.
                </p>
                <p className="glass-card p-6 rounded-[1.5rem]">
                  Over the years, we have grown, adapted, and welcomed countless individuals through our doors, 
                  watching them leave as renewed versions of themselves, equipped for a second chance at life. Our approach 
                  is built on honesty, discipline, and unconditional love.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 relative">
              <img src={assetUrl('images/blog/1.jpg')} alt="TWC Grounds" className="rounded-[2rem] w-full h-80 object-cover shadow-xl border border-white/40" />
              <img src={assetUrl('images/blog/3b.jpg')} alt="TWC Community" className="rounded-[2rem] w-full h-80 object-cover shadow-xl border border-white/40 mt-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Types */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl('images/1.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75 backdrop-blur-md" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl mb-16">
          <div className="glass-card bg-white/10 backdrop-blur-md rounded-[2rem] p-10 border-white/30 inline-block mb-10">
            <h2 className="font-serif text-4xl mb-4 text-white drop-shadow-lg">Our Therapy Approach</h2>
            <p className="text-white/90 text-lg drop-shadow-md max-w-2xl">
              We recognize that addiction affects every aspect of a person's life, and therefore requires a multi-faceted approach to healing.
            </p>
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Individual Therapy", desc: "One-on-one sessions addressing personal trauma and underlying issues." },
              { title: "Group Therapy", desc: "Building accountability and shared strength through communal sharing." },
              { title: "Family Therapy", desc: "Mending broken relationships and educating loved ones on healthy support." },
              { title: "Reintegration", desc: "Equipping individuals with practical life skills to successfully return to society." }
            ].map((type, i) => (
              <div key={i} className="glass bg-white/15 p-8 rounded-[2rem] text-center border-white/20 hover:bg-white/25 transition-all">
                <div className="h-16 w-16 glass bg-secondary/80 text-white rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-2xl shadow-lg border-white/30">{i+1}</div>
                <h3 className="font-serif text-xl mb-3 text-white">{type.title}</h3>
                <p className="text-sm text-white/80 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 bg-background">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: `url(${assetUrl('images/blog/3c.jpg')})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', filter: 'blur(40px)' }}></div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="glass-strong rounded-[2.5rem] p-10 md:p-16 text-center max-w-3xl mx-auto mb-20 border-white/50">
            <h2 className="font-serif text-4xl mb-6 text-foreground">Meet Our Dedicated Team</h2>
            <p className="text-lg text-foreground/80">
              A dedicated group of professionals and individuals who have walked the path, offering compassionate, lived-experience guidance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8 max-w-5xl mx-auto">
            {staff.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-36 h-36 mx-auto glass-card rounded-full mb-6 flex items-center justify-center overflow-hidden border-4 border-white shadow-lg group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                  <span className="font-serif text-5xl text-primary/70 group-hover:text-primary transition-colors">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-serif text-2xl mb-2 text-foreground">{member.name}</h3>
                <span className="glass inline-block px-4 py-1.5 rounded-full text-secondary font-medium tracking-wide uppercase text-xs">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
