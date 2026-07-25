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
      <header className="bg-muted/50 py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Our Story</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Building a legacy of healing, community, and second chances since 2000.
          </p>
        </div>
      </header>

      {/* The Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl text-primary leading-tight">Over Two Decades of Restoring Hope</h2>
              <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
                <p>
                  Founded in the year 2000 in the quiet, supportive community of Eendekuil in the Western Cape, 
                  Together We Can Rehabilitation was born out of a profound need to offer genuine help to those 
                  lost to addiction.
                </p>
                <p>
                  We chose a farm setting deliberately. There is something profoundly healing about the countryside—
                  away from the noise, the triggers, and the relentless pace of city life. Here, our residents can breathe, reflect, 
                  and rebuild. We are a faith-based institution that believes every person has inherent worth and the 
                  capacity to change, no matter how far they have fallen.
                </p>
                <p>
                  Over the years, we have grown, adapted, and welcomed countless individuals through our doors, 
                  watching them leave as renewed versions of themselves, equipped for a second chance at life. Our approach 
                  is built on honesty, discipline, and unconditional love.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 relative">
              <img src={assetUrl('images/blog/1.jpg')} alt="TWC Grounds" className="rounded-2xl w-full h-80 object-cover shadow-lg" />
              <img src={assetUrl('images/blog/3b.jpg')} alt="TWC Community" className="rounded-2xl w-full h-80 object-cover shadow-lg mt-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Types */}
      <section className="py-24 bg-primary text-primary-foreground border-y border-primary/20">
        <div className="container mx-auto px-4 text-center max-w-3xl mb-16">
          <h2 className="font-serif text-4xl mb-6">Our Therapy Approach</h2>
          <p className="text-primary-foreground/80 text-lg">
            We recognize that addiction affects every aspect of a person's life, and therefore requires a multi-faceted approach to healing.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Individual Therapy", desc: "One-on-one sessions addressing personal trauma and underlying issues." },
              { title: "Group Therapy", desc: "Building accountability and shared strength through communal sharing." },
              { title: "Family Therapy", desc: "Mending broken relationships and educating loved ones on healthy support." },
              { title: "Reintegration", desc: "Equipping individuals with practical life skills to successfully return to society." }
            ].map((type, i) => (
              <div key={i} className="bg-primary-foreground/10 p-8 rounded-2xl border border-primary-foreground/20 text-center backdrop-blur-sm">
                <div className="h-14 w-14 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-6 font-serif text-2xl shadow-sm">{i+1}</div>
                <h3 className="font-serif text-xl mb-3">{type.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-serif text-4xl mb-6 text-foreground">Meet Our Dedicated Team</h2>
            <p className="text-lg text-muted-foreground">
              A dedicated group of professionals and individuals who have walked the path, offering compassionate, lived-experience guidance.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
            {staff.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-36 h-36 mx-auto bg-muted rounded-full mb-6 flex items-center justify-center overflow-hidden border-4 border-background shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                  <span className="font-serif text-4xl text-muted-foreground/30 group-hover:text-primary/40 transition-colors">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-serif text-2xl mb-1">{member.name}</h3>
                <p className="text-secondary font-medium tracking-wide uppercase text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
