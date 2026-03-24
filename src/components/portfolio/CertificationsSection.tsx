const certifications = [
  {
    title: "Graphic Design Course",
    org: "KIIT University",
    period: "Sept – Nov 2025",
    location: "Bhubaneswar, Odisha",
    desc: "Poster, logo, and presentation design using Canva.",
    tag: "DESIGN",
  },
  {
    title: "Build School: Startup Pitch",
    org: "KIIT University",
    period: "Feb – Apr 2025",
    location: "Bhubaneswar, Odisha",
    desc: "Inter-college startup proposal and pitch. Strategic thinking, public speaking, teamwork.",
    tag: "BUSINESS",
  },
  {
    title: "Power BI Certification",
    org: "TNX",
    period: "Jan – Mar 2024",
    location: "Online",
    desc: "Intermediate Power BI course covering dashboard creation, data analysis, and reporting.",
    tag: "DATA",
  },
];

const education = [
  {
    school: "KIIT University",
    degree: "B.Tech — Information Technology",
    period: "2023 – 2027",
    grade: "CGPA: 6.92",
    location: "Bhubaneswar, Odisha",
  },
  {
    school: "Chandrakona Road Sarodamoyee Highschool",
    degree: "Intermediate",
    period: "2022 – 2023",
    grade: "67.8%",
    location: "West Bengal",
  },
  {
    school: "Chandrakona Road Girls' Highschool",
    degree: "Matriculation",
    period: "2020 – 2021",
    grade: "88%",
    location: "West Bengal",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="bg-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Certifications header */}
        <div className="label-text mb-4">— SECTION 04</div>
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display font-black text-foreground text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter">
            CERTIFICATIONS
          </h2>
        </div>

        <div className="editorial-rule mb-12" />

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-24">
          {certifications.map((cert, i) => (
            <div
              key={cert.title}
              className={`py-8 px-6 border-rule border-l group hover:bg-secondary/50 transition-colors duration-300 ${
                i === certifications.length - 1 ? "border-r" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="label-text text-[0.55rem]">{cert.tag}</span>
                <span className="caption-text">{cert.period}</span>
              </div>
              <div className="editorial-rule mb-6" />
              <h3 className="font-display font-black text-foreground text-xl leading-tight group-hover:text-accent-violet transition-colors duration-200 mb-2">
                {cert.title}
              </h3>
              <p className="caption-text mb-3">{cert.org} · {cert.location}</p>
              <p className="text-foreground/50 text-xs leading-relaxed font-body">{cert.desc}</p>
            </div>
          ))}
        </div>

        {/* Education header */}
        <div className="label-text mb-4">— SECTION 05</div>
        <h2 className="font-display font-black text-foreground text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter mb-16">
          EDUCATION
        </h2>

        <div className="editorial-rule mb-0" />

        {education.map((edu) => (
          <div key={edu.school} className="border-b border-rule py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 items-center hover:bg-secondary/30 transition-colors duration-300 px-2">
            <div className="md:col-span-1 caption-text">{edu.period}</div>
            <div className="md:col-span-6">
              <h3 className="font-display font-black text-foreground text-2xl md:text-3xl leading-tight tracking-tight">
                {edu.school}
              </h3>
              <p className="font-mono-custom text-xs text-accent-violet mt-1 tracking-widest uppercase">{edu.location}</p>
            </div>
            <div className="md:col-span-3">
              <p className="font-body text-foreground/60 text-sm">{edu.degree}</p>
            </div>
            <div className="md:col-span-2 text-right">
              <span className="font-display font-black text-accent-violet text-xl">{edu.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
