import { useScrollReveal, revealClass } from "@/hooks/useScrollReveal";

const projects = [
  {
    num: "No_01",
    title: "AI Drive Agent",
    subtitle: "Intelligent Drive Assistant",
    tags: ["Python", "Streamlit", "Generative AI", "Computer Vision"],
    description:
      "Developed an AI-powered driver intelligence assistant that features advanced analytics and computer vision workflows. Built on Streamlit, providing real-time visual alerts and telemetry simulations.",
    link: "https://ai-drive-agent-xd2yqpzzbn6dnarpohd2bk.streamlit.app/",
    accentBorder: "border-l-4 border-l-violet",
    tagStyle: "border-violet/40 text-violet",
    numColor: "text-violet",
    subtitleColor: "text-violet",
    arrowColor: "text-violet",
    hoverTitle: "hover:text-violet",
    hoverBg: "hover:bg-violet/5",
  },
  {
    num: "No_02",
    title: "Wayze",
    subtitle: "Dynamic Navigation & Transit",
    tags: ["React", "TypeScript", "Node.js", "API Integration"],
    description:
      "Created Wayze, a dynamic route navigation and public transit assistant system built using modern web standards. Features interactive maps and real-time transit schedule integration.",
    link: "https://wayze-production.up.railway.app/",
    accentBorder: "border-l-4 border-l-crimson",
    tagStyle: "border-crimson/40 text-crimson",
    numColor: "text-crimson",
    subtitleColor: "text-crimson",
    arrowColor: "text-crimson",
    hoverTitle: "hover:text-crimson",
    hoverBg: "hover:bg-crimson/5",
  },
  {
    num: "No_03",
    title: "Spinex Medical Imaging",
    subtitle: "Spine & Med-Tech Analysis",
    tags: ["Python", "Deep Learning", "Medical Vision", "PyTorch"],
    description:
      "Built Spinex, a medical vision analysis tool designed to perform diagnostic assessments on spine scans and MRI imaging. Leveraged convolutional neural networks to assist in clinical segmentation tasks.",
    link: "https://github.com/IPSHITATEWARY/spinex",
    accentBorder: "border-l-4 border-l-cyan",
    tagStyle: "border-cyan/40 text-cyan",
    numColor: "text-cyan",
    subtitleColor: "text-cyan",
    arrowColor: "text-cyan",
    hoverTitle: "hover:text-cyan",
    hoverBg: "hover:bg-cyan/5",
  },
  {
    num: "No_04",
    title: "Customer Segmentation",
    subtitle: "RFM Analysis × K-Means",
    tags: ["Python", "K-Means", "Data Viz", "Scikit-learn"],
    description:
      "Developed a customer segmentation model using RFM analysis to analyze purchasing behavior in e-commerce datasets. Implemented K-Means clustering to group customers into distinct segments.",
    link: "https://github.com/IPSHITATEWARY/customer-segmentation-rfm-kmeans",
    accentBorder: "border-l-4 border-l-amber",
    tagStyle: "border-amber/40 text-amber",
    numColor: "text-amber",
    subtitleColor: "text-amber",
    arrowColor: "text-amber",
    hoverTitle: "hover:text-amber",
    hoverBg: "hover:bg-amber/5",
  },
  {
    num: "No_05",
    title: "Network Security",
    subtitle: "Cryptographic Analysis Tool",
    tags: ["Cybersecurity", "Python", "Cryptography", "Network Protocols"],
    description:
      "Collaborated on a network security application designed to analyze packet flows and implement key cryptographic handshake models. Provides visual traffic inspection dashboards.",
    link: "https://github.com/Adarsh2004ku/Network_Security",
    accentBorder: "border-l-4 border-l-violet",
    tagStyle: "border-violet/40 text-violet",
    numColor: "text-violet",
    subtitleColor: "text-violet",
    arrowColor: "text-violet",
    hoverTitle: "hover:text-violet",
    hoverBg: "hover:bg-violet/5",
  },
  {
    num: "No_06",
    title: "Phishing Analysis",
    subtitle: "Security Threat Intelligence",
    tags: ["Power BI", "DAX", "Threat Analysis", "Incident Response"],
    description:
      "Created an interactive Power BI dashboard tracking phishing campaign statistics, attack vectors, and incident management cycles. Designed complex DAX metrics to assess organization threat levels.",
    link: "https://github.com/IPSHITATEWARY/powerbi-phishing-analysis",
    accentBorder: "border-l-4 border-l-crimson",
    tagStyle: "border-crimson/40 text-crimson",
    numColor: "text-crimson",
    subtitleColor: "text-crimson",
    arrowColor: "text-crimson",
    hoverTitle: "hover:text-crimson",
    hoverBg: "hover:bg-crimson/5",
  },
  {
    num: "No_07",
    title: "Movie Recommendation",
    subtitle: "Cosine Similarity Engine",
    tags: ["Python", "Collaborative Filtering", "Cosine Similarity", "Pandas"],
    description:
      "Built a movie recommendation system using collaborative filtering based on user rating patterns. Constructed a movie-user matrix and computed cosine similarity for top-N recommendations.",
    link: "https://github.com/IPSHITATEWARY/movie-recommendation-system",
    accentBorder: "border-l-4 border-l-cyan",
    tagStyle: "border-cyan/40 text-cyan",
    numColor: "text-cyan",
    subtitleColor: "text-cyan",
    arrowColor: "text-cyan",
    hoverTitle: "hover:text-cyan",
    hoverBg: "hover:bg-cyan/5",
  },
  {
    num: "No_08",
    title: "Social Dashboard",
    subtitle: "Engagement & Content Metrics",
    tags: ["Power BI", "DAX", "Data Analysis", "Reporting"],
    description:
      "Created a dedicated Power BI analytics dashboard to track social media engagement KPIs, user demographics, and peak interaction times. Uses custom DAX queries for growth tracking.",
    link: "https://github.com/IPSHITATEWARY/social-dashboard",
    accentBorder: "border-l-4 border-l-amber",
    tagStyle: "border-amber/40 text-amber",
    numColor: "text-amber",
    subtitleColor: "text-amber",
    arrowColor: "text-amber",
    hoverTitle: "hover:text-amber",
    hoverBg: "hover:bg-amber/5",
  },
  {
    num: "No_09",
    title: "Sales Dashboard",
    subtitle: "Retail Performance Analytics",
    tags: ["Power BI", "DAX", "Sales Performance", "Revenue Reporting"],
    description:
      "Designed an interactive sales operations dashboard to monitor revenue, volume, and seasonal trends. Enables executive-level forecasting through DAX data modeling and cleansing.",
    link: "https://github.com/IPSHITATEWARY/sales-dashboard",
    accentBorder: "border-l-4 border-l-violet",
    tagStyle: "border-violet/40 text-violet",
    numColor: "text-violet",
    subtitleColor: "text-violet",
    arrowColor: "text-violet",
    hoverTitle: "hover:text-violet",
    hoverBg: "hover:bg-violet/5",
  },
  {
    num: "No_10",
    title: "Interactive Portfolio",
    subtitle: "Bold Editorial CV",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    description:
      "Developed this interactive, high-contrast, bold editorial portfolio resume using React, TypeScript, and Tailwind CSS. Features dynamic scroll reveal animations and a responsive design system.",
    link: "https://github.com/IPSHITATEWARY/my-cv-portfolio",
    accentBorder: "border-l-4 border-l-crimson",
    tagStyle: "border-crimson/40 text-crimson",
    numColor: "text-crimson",
    subtitleColor: "text-crimson",
    arrowColor: "text-crimson",
    hoverTitle: "hover:text-crimson",
    hoverBg: "hover:bg-crimson/5",
  },
];

const ProjectRow = ({ project, index }: { project: (typeof projects)[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`group border-b border-rule py-10 md:py-12 transition-all duration-300 cursor-pointer
        ${project.accentBorder} ${project.hoverBg}
        ${revealClass(isVisible, "animate-reveal-up", `delay-${index * 100}`)}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start px-4 md:px-6">
        <div className="md:col-span-1">
          <span className={`font-mono-custom text-xs ${project.numColor}`}>{project.num}</span>
        </div>
        <div className="md:col-span-4">
          <h3 className={`font-display font-black text-foreground text-3xl md:text-4xl leading-tight tracking-tight transition-colors duration-200 ${project.hoverTitle}`}>
            {project.title}
          </h3>
          <p className={`font-mono-custom text-xs mt-1 tracking-widest uppercase ${project.subtitleColor}`}>
            {project.subtitle}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={`px-2 py-0.5 border font-mono-custom text-[0.6rem] tracking-widest uppercase ${project.tagStyle}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="md:col-span-5">
          <p className="text-foreground/55 text-sm leading-relaxed font-body">
            {project.description}
          </p>
        </div>
        <div className="md:col-span-2 flex md:justify-end items-start">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 font-mono-custom text-xs tracking-widest uppercase group-hover:gap-4 transition-all duration-200 ${project.arrowColor}`}
          >
            <span>VIEW</span>
            <span className="text-lg">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal();

  return (
    <section id="projects" className="bg-card py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div ref={headRef} className="flex items-end justify-between mb-16">
          <div>
            <div className={`label-crimson mb-4 ${revealClass(headVisible, "animate-reveal-left")}`}>
              — SECTION 03
            </div>
            <h2 className={`font-display font-black text-foreground text-[clamp(3rem,8vw,8rem)] leading-none tracking-tighter ${revealClass(headVisible, "animate-reveal-up", "delay-100")}`}>
              PROJ<span className="text-crimson">ECTS</span>
            </h2>
          </div>
          <div className={`hidden md:block text-right pb-3 ${revealClass(headVisible, "animate-reveal-right", "delay-200")}`}>
            <span className="caption-text">10 PROJECTS · 2024–2026</span>
          </div>
        </div>

        <div className={`editorial-rule mb-0 ${revealClass(headVisible, "animate-line-grow", "delay-300")}`} />

        {projects.map((project, i) => (
          <ProjectRow key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
