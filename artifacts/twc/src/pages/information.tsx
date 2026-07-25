import { assetUrl } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

export default function Information() {
  const programs = [
    "Therapon Thinking Errors",
    "Celebrate Recovery — 12 Step Program",
    "MRT (Moral Reconation Therapy) Program",
    "Matrix Model",
    "Trigger and Relapse Prevention",
    "Life Skills",
    "Music and Art Therapy",
    "Bible Study",
    "Trauma Release",
    "Transition from Primary Care to Secondary Care"
  ];

  const activities = [
    "Cricket", "Soccer", "Rugby", "Swimming", "Gym", 
    "Hiking/Walking", "Running", "Table Tennis", "Board Games & Puzzles"
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl('images/blog/2.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl mt-8">
          <div className="glass-card bg-white/10 backdrop-blur-md rounded-[2.5rem] p-12 border-white/30 shadow-2xl inline-block">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">Programs & Activities</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
              A structured daily routine designed to build discipline, foster creativity, and promote physical health.
            </p>
          </div>
        </div>
      </header>

      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: `url(${assetUrl('images/blog/3.jpg')})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', filter: 'blur(40px)' }}></div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Programs List */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 glass rounded-[1.5rem] shadow-sm">
                  <img src={assetUrl('images/line-icon-4.png')} alt="" className="h-10 w-10 opacity-80" />
                </div>
                <h2 className="font-serif text-4xl text-foreground">Core Programs</h2>
              </div>
              <div className="glass-strong rounded-[2.5rem] p-10 shadow-xl border-white/50">
                <ul className="space-y-6">
                  {programs.map((prog, i) => (
                    <li key={i} className="flex items-start gap-5 glass-card p-4 rounded-[1.5rem]">
                      <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground/90 text-lg">{prog}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Leisure & Activities */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 glass rounded-[1.5rem] shadow-sm">
                  <img src={assetUrl('images/line-icon-8.png')} alt="" className="h-10 w-10 opacity-80" />
                </div>
                <h2 className="font-serif text-4xl text-foreground">Leisure & Activities</h2>
              </div>
              <p className="text-foreground/80 mb-10 text-lg leading-relaxed glass-card p-6 rounded-[1.5rem]">
                Physical wellness and teamwork are essential parts of recovery. Our farm setting offers ample space for sports, exercise, and quiet reflection, allowing residents to reconnect with themselves and others in a healthy way.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {activities.map((act, i) => (
                  <div key={i} className="glass-card rounded-full p-4 text-center transition-all hover:bg-white/60 hover:-translate-y-1 shadow-sm">
                    <span className="font-medium text-foreground/80 text-sm">{act}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-10 glass-strong rounded-[2.5rem] shadow-xl border-white/50">
                <h3 className="font-serif text-3xl mb-6 text-foreground">A Day at TWC</h3>
                <div className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed p-4 glass-card rounded-[1.5rem]">
                    Each day is meticulously structured. From early morning chores that instil responsibility, to intensive group therapy sessions, to afternoon sports that release tension and build camaraderie. 
                  </p>
                  <p className="text-foreground/80 leading-relaxed p-4 glass-card rounded-[1.5rem]">
                    We believe that idle time can be an enemy to early recovery, so we fill the days with purpose, learning, and connection.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Facilities Imagery */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0 bg-muted/20 backdrop-blur-3xl" />
        <div className="container relative z-10 mx-auto px-4 text-center mb-16">
          <div className="glass-card rounded-[2.5rem] p-10 max-w-3xl mx-auto inline-block border-white/50">
            <h2 className="font-serif text-4xl text-foreground">Our Facilities</h2>
            <p className="text-lg text-foreground/80 mt-4 max-w-2xl mx-auto">
              A secure, clean, and welcoming environment where residents can focus entirely on their recovery journey.
            </p>
          </div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['images/blog/2.jpg', 'images/blog/3.jpg', 'images/blog/3c.jpg'].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-[2rem] p-2 glass-card overflow-hidden shadow-xl border border-white/60 group">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                  <img 
                    src={assetUrl(img)} 
                    alt={`TWC Facility ${i+1}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
