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
      <header className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl('images/blog/3.jpg')} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl mt-8">
          <div className="glass-card bg-white/10 backdrop-blur-md rounded-[2.5rem] p-12 border-white/30 shadow-2xl">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">Gallery</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md">
              A glimpse into daily life, our farm surroundings, and the facilities at Together We Can.
            </p>
          </div>
        </div>
      </header>

      <section className="relative py-24 bg-background">
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-multiply" style={{ backgroundImage: `url(${assetUrl('images/blog/3d.jpg')})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', filter: 'blur(50px)' }}></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {images.map((img, i) => (
              <div key={i} className="break-inside-avoid rounded-[2rem] p-2 glass-strong shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-white/60">
                <div className="rounded-[1.5rem] overflow-hidden">
                  <img 
                    src={assetUrl(img)} 
                    alt={`Gallery image ${i + 1}`} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    loading="lazy"
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
