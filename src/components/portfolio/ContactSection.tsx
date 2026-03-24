const ContactSection = () => {
  return (
    <section id="contact" className="bg-secondary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="label-text mb-4">— SECTION 06</div>

        {/* Big CTA */}
        <div className="mb-16">
          <h2 className="font-display font-black text-foreground leading-none tracking-tighter text-[clamp(3rem,10vw,10rem)]">
            LET'S
          </h2>
          <div className="flex items-center gap-4 -mt-2 md:-mt-4">
            <div className="w-24 md:w-40 h-1 md:h-2 bg-accent-violet flex-shrink-0" />
            <h2 className="font-display font-black text-accent-violet leading-none tracking-tighter text-[clamp(3rem,10vw,10rem)]">
              CONNECT
            </h2>
          </div>
        </div>

        <div className="editorial-rule mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left: description */}
          <div>
            <p className="text-foreground/60 text-sm leading-relaxed font-body max-w-sm mb-8">
              Currently seeking internship opportunities to apply technical and analytical
              skills in real-world projects. Open to roles in data analysis, software development,
              and design.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="label-text text-[0.55rem]">EMAIL</span>
                <div className="editorial-rule flex-1" />
                <a
                  href="mailto:tewaryipshita@gmail.com"
                  className="font-mono-custom text-xs text-foreground hover:text-accent-violet transition-colors"
                >
                  tewaryipshita@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="label-text text-[0.55rem]">PHONE</span>
                <div className="editorial-rule flex-1" />
                <span className="font-mono-custom text-xs text-foreground/60">+91 7384425179</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="label-text text-[0.55rem]">LOCATION</span>
                <div className="editorial-rule flex-1" />
                <span className="font-mono-custom text-xs text-foreground/60">Bhubaneswar, India</span>
              </div>
            </div>
          </div>

          {/* Right: social links */}
          <div className="space-y-0">
            {[
              { label: "LINKEDIN", sub: "Professional profile" },
              { label: "GITHUB", sub: "Code repositories" },
              { label: "LEETCODE", sub: "DSA practice" },
            ].map((link) => (
              <a
                key={link.label}
                href="#"
                className="group flex items-center justify-between border-b border-rule py-6 hover:bg-muted/30 px-2 transition-colors duration-200"
              >
                <div>
                  <div className="font-display font-black text-foreground text-2xl md:text-3xl group-hover:text-accent-violet transition-colors duration-200">
                    {link.label}
                  </div>
                  <div className="caption-text mt-1">{link.sub}</div>
                </div>
                <span className="text-accent-violet text-2xl group-hover:translate-x-2 transition-transform duration-200">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="editorial-rule mt-16 mb-8" />
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-accent-violet" />
            <span className="caption-text">IPSHITA TEWARY © 2025</span>
          </div>
          <span className="caption-text">B.TECH · INFORMATION TECHNOLOGY · KIIT UNIVERSITY</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
