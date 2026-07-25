import { assetUrl } from "@/lib/utils";

export default function Gallery() {
  const images = [
    'images/1.jpg',
    'images/blog/1.jpg',
    'images/blog/2.jpg',
    'images/blog/3.jpg',
    'images/blog/3b.jpg',
    'images/blog/3c.jpg',
    'images/blog/3d.jpg',
    'images/parallax/1.jpg',
    'images/home1.png'
  ];

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-muted/50 py-24 border-b border-border">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">Gallery</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A glimpse into daily life, our farm surroundings, and the facilities at Together We Can.
          </p>
        </div>
      </header>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img, i) => (
              <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-border/50">
                <img 
                  src={assetUrl(img)} 
                  alt={`Gallery image ${i + 1}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
