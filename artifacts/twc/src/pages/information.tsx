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
      <header className="bg-muted/50 py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Programs & Activities</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A structured daily routine designed to build discipline, foster creativity, and promote physical health.
          </p>
        </div>
      </header>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Programs List */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <img src={assetUrl('images/line-icon-4.png')} alt="" className="h-8 w-8 opacity-80" />
                </div>
                <h2 className="font-serif text-4xl">Core Programs</h2>
              </div>
              <div className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-sm">
                <ul className="space-y-6">
                  {programs.map((prog, i) => (
                    <li key={i} className="flex items-start gap-4">
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
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <img src={assetUrl('images/line-icon-8.png')} alt="" className="h-8 w-8 opacity-80" />
                </div>
                <h2 className="font-serif text-4xl">Leisure & Activities</h2>
              </div>
              <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                Physical wellness and teamwork are essential parts of recovery. Our farm setting offers ample space for sports, exercise, and quiet reflection, allowing residents to reconnect with themselves and others in a healthy way.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {activities.map((act, i) => (
                  <div key={i} className="bg-background rounded-xl p-5 text-center border border-border shadow-sm hover:border-primary/30 transition-colors">
                    <span className="font-medium text-foreground/80">{act}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-muted rounded-2xl border border-border">
                <h3 className="font-serif text-2xl mb-4">A Day at TWC</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Each day is meticulously structured. From early morning chores that instil responsibility, to intensive group therapy sessions, to afternoon sports that release tension and build camaraderie. 
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  We believe that idle time can be an enemy to early recovery, so we fill the days with purpose, learning, and connection.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Facilities Imagery */}
      <section className="py-24 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="font-serif text-4xl text-foreground">Our Facilities</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            A secure, clean, and welcoming environment where residents can focus entirely on their recovery journey.
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['images/blog/2.jpg', 'images/blog/3.jpg', 'images/blog/3c.jpg'].map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                <img 
                  src={assetUrl(img)} 
                  alt={`TWC Facility ${i+1}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
