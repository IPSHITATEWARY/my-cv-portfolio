const skills = [
  {
    category: "PROGRAMMING LANGUAGES",
    items: ["C/C++", "Java", "Python", "DSA"],
    col: "01",
  },
  {
    category: "DATABASES",
    items: ["DBMS", "SQL", "MySQL"],
    col: "02",
  },
  {
    category: "DATA & VISUALIZATION",
    items: ["Power BI", "RFM Analysis", "K-Means Clustering", "Data Preprocessing"],
    col: "03",
  },
  {
    category: "DESIGN TOOLS",
    items: ["Canva", "Figma (Learning)", "PowerPoint"],
    col: "04",
  },
  {
    category: "DEVELOPMENT ENVIRONMENT",
    items: ["VS Code", "Visual Studio", "Anaconda Navigator", "PyCharm", "Linux"],
    col: "05",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-ink py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <div className="label-text mb-4">— SECTION 02</div>
            <h2 className="font-display font-black text-foreground text-[clamp(3rem,8vw,8rem)] leading-none tracking-tighter">
              SKILLS &amp;<br />TOOLS
            </h2>
          </div>
          <div className="hidden md:block text-right pt-4">
            <div className="caption-text mb-1">TECH STACK</div>
            <div className="editorial-rule-accent w-20 ml-auto mt-2" />
          </div>
        </div>

        <div className="editorial-rule mb-12" />

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {skills.map((skill, i) => (
            <div
              key={skill.col}
              className={`border-rule border-l py-6 px-6 group hover:bg-secondary/50 transition-colors duration-300 ${
                i === skills.length - 1 ? "border-r" : ""
              }`}
            >
              <div className="caption-text mb-1 opacity-40">{skill.col}</div>
              <div className="label-text mb-4 text-[0.6rem]">{skill.category}</div>
              <div className="editorial-rule mb-5" />
              <ul className="space-y-3">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-[6px] w-1 h-1 flex-shrink-0 bg-accent-violet" />
                    <span className="font-display font-black text-foreground text-lg leading-tight group-hover:text-accent-violet transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="editorial-rule mt-12 mb-6" />
        <div className="flex items-center justify-between">
          <span className="caption-text">CGPA: 6.92</span>
          <span className="caption-text">B.TECH IN INFORMATION TECHNOLOGY</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
