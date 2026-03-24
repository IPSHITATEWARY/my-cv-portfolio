import heroTexture from "@/assets/hero-texture.jpg";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden grain-overlay"
      style={{ backgroundImage: `url(${heroTexture})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-ink/70" />

      {/* Grid lines decoration */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute left-[33%] top-0 bottom-0 w-px bg-rule/30" />
        <div className="absolute left-[66%] top-0 bottom-0 w-px bg-rule/30" />
        <div className="absolute top-1/3 left-0 right-0 h-px bg-rule/20" />
      </div>

      {/* Issue / volume label */}
      <div className="absolute top-24 left-6 md:left-12 z-20 flex items-center gap-4">
        <div className="editorial-rule-accent w-8" />
        <span className="caption-text opacity-70">B.TECH INFORMATION TECHNOLOGY · 2023–2027</span>
      </div>

      {/* Top-right label */}
      <div className="absolute top-24 right-6 md:right-12 z-20 text-right">
        <span className="caption-text opacity-70">KIIT UNIVERSITY · BHUBANESWAR</span>
      </div>

      {/* Main content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 pb-16 w-full">
        {/* Large name treatment */}
        <div className="mb-6">
          <div className="label-text mb-3">PORTFOLIO · EDITION 01</div>
          <h1 className="font-display font-black text-paper leading-none text-[clamp(4rem,15vw,14rem)] tracking-tighter">
            IPSHITA
          </h1>
          <div className="flex items-center gap-6 -mt-4">
            <div className="w-16 h-1 bg-accent-violet flex-shrink-0" />
            <h1 className="font-display font-black text-paper leading-none text-[clamp(4rem,15vw,14rem)] tracking-tighter">
              TEWARY
            </h1>
          </div>
        </div>

        {/* Rule + tagline */}
        <div className="editorial-rule mb-6 max-w-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <p className="text-foreground/70 font-body text-sm leading-relaxed max-w-xs">
            Enthusiastic B.Tech student in Information Technology with strong
            foundations in programming, data analysis, and visualization.
            Building intelligent systems one dataset at a time.
          </p>
          <div className="flex flex-col justify-end gap-2">
            <div className="flex items-center gap-3">
              <span className="caption-text">CONTACT</span>
              <div className="editorial-rule flex-1" />
              <a href="mailto:tewaryipshita@gmail.com" className="font-mono-custom text-xs text-accent-violet hover:underline">
                tewaryipshita@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="caption-text">PHONE</span>
              <div className="editorial-rule flex-1" />
              <span className="font-mono-custom text-xs text-foreground/60">+91 7384425179</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex items-center gap-3">
          <div className="w-px h-12 bg-accent-violet" />
          <span className="caption-text">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
