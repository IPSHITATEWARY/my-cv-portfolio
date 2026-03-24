const projects = [
  {
    num: "No_01",
    title: "Customer Segmentation",
    subtitle: "RFM Analysis × K-Means",
    tags: ["Python", "K-Means", "Data Viz", "Scikit-learn"],
    description:
      "Developed a customer segmentation model using RFM (Recency, Frequency, Monetary) analysis to analyze purchasing behavior in e-commerce datasets. Implemented K-Means clustering to group customers into distinct segments.",
    link: "https://github.com",
    accent: true,
  },
  {
    num: "No_02",
    title: "Movie Recommendation",
    subtitle: "Cosine Similarity Engine",
    tags: ["Python", "Collaborative Filtering", "Cosine Similarity"],
    description:
      "Built a movie recommendation system using collaborative filtering based on user rating patterns. Constructed a movie-user matrix and computed cosine similarity for top-N recommendations.",
    link: "https://github.com",
    accent: false,
  },
  {
    num: "No_03",
    title: "Power BI Dashboards",
    subtitle: "Social & Sales Insights",
    tags: ["Power BI", "Data Cleaning", "DAX", "Reporting"],
    description:
      "Created interactive Power BI Dashboards to visualize analytical data and trends. Focused on effective data cleaning, transformation, and visualization covering Social Insights and Sales Performance.",
    link: "#",
    accent: false,
  },
  {
    num: "No_04",
    title: "Graphic Design",
    subtitle: "Group Publication Project",
    tags: ["Canva", "Figma", "Layout Design", "Branding"],
    description:
      "Collaborated with a college team to design multiple posters and presentation slides. Merged individual layouts into a cohesive professional PowerPoint for final presentation.",
    link: "#",
    accent: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-secondary py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="label-text mb-4">— SECTION 03</div>
            <h2 className="font-display font-black text-foreground text-[clamp(3rem,8vw,8rem)] leading-none tracking-tighter">
              PROJECTS
            </h2>
          </div>
          <div className="hidden md:block text-right pb-2">
            <span className="caption-text">4 PROJECTS · 2023–2025</span>
          </div>
        </div>

        <div className="editorial-rule mb-0" />

        {/* Projects list */}
        {projects.map((project, i) => (
          <div
            key={project.num}
            className={`group border-b border-rule py-10 md:py-12 transition-all duration-300 hover:bg-muted/40 cursor-pointer ${
              project.accent ? "border-l-2 border-l-accent-violet pl-8" : "pl-0 md:pl-4"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-mono-custom text-xs text-caption">{project.num}</span>
              </div>

              {/* Title + tags */}
              <div className="md:col-span-4">
                <h3 className="font-display font-black text-foreground text-3xl md:text-4xl leading-tight tracking-tight group-hover:text-accent-violet transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="font-mono-custom text-xs text-accent-violet mt-1 tracking-widest uppercase">
                  {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 border border-rule font-mono-custom text-[0.6rem] text-caption tracking-widest uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-foreground/60 text-sm leading-relaxed font-body">
                  {project.description}
                </p>
              </div>

              {/* Arrow link */}
              <div className="md:col-span-2 flex md:justify-end items-start">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 label-text hover:gap-4 transition-all duration-200 group/link"
                >
                  <span>VIEW</span>
                  <span className="text-accent-violet text-lg">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
