import { useState } from "react";

import { 
  ExternalLink, 
  Github, 
  Download, 
  PlayCircle,
  TrendingUp,
  Users,
  Clock,
  Target,
  BarChart3,
  FileText,
  Layout,
  ChevronRight,
  X
} from "lucide-react";
import { SectionBackground } from "@/components/Section-Background";
import { Button } from "@/components/Button";

// Example project data
const projectsData = [
  {
    id: 1,
    title: "Media Incrementality Testing Framework",
    category: "Analytics",
    period: "2023-2024",
    description: "Designed and led a comprehensive testing framework to measure the true incremental impact of media campaigns across multiple channels, enabling data-driven budget allocation decisions.",
    longDescription: "Built a rigorous statistical framework to isolate media effectiveness from baseline trends and external factors. Conducted geo-based experiments and time-series analysis to quantify incremental lift. Partnered with marketing teams to translate findings into actionable investment strategies.",
    image: "/project-media-testing.jpg",
    technologies: ["R", "Python", "Excel", "Statistical Modeling", "A/B Testing"],
    metrics: {
      impact: "15% improvement in ROAS",
      scale: "$2M+ budget optimized",
      efficiency: "30% faster analysis cycle",
      reach: "5 marketing channels"
    },
    links: {
      github: null,
      demo: null,
      documentation: "/projects/media-testing.pdf"
    },
    highlights: [
      "Developed geo-based test-and-control methodology",
      "Created automated reporting dashboards in R",
      "Enabled quarterly budget reallocation framework",
      "Trained stakeholders on interpreting incrementality metrics"
    ]
  },
  {
    id: 2,
    title: "Power BI Sales Performance Dashboard",
    category: "BI Engineering",
    period: "2024",
    description: "Built an interactive executive dashboard consolidating sales, operations, and customer data into a unified view with drill-through capabilities and predictive insights.",
    longDescription: "Designed semantic models and optimized DAX measures to handle 2M+ rows of transactional data. Implemented row-level security for regional access control. Created dynamic visualizations with KPI targets and variance analysis.",
    image: "/project-powerbi-dashboard.jpg",
    technologies: ["Power BI", "DAX", "SQL", "Power Query", "Fabric"],
    metrics: {
      users: "50+ daily users",
      dataVolume: "2M+ records",
      performance: "Sub-2s load time",
      adoption: "85% executive adoption"
    },
    links: {
      github: null,
      demo: null,
      documentation: "/projects/powerbi-dashboard.pdf"
    },
    highlights: [
      "Consolidated 7 data sources into single data model",
      "Reduced manual reporting time by 20 hours/week",
      "Implemented real-time refresh with Fabric",
      "Built 15+ custom DAX measures for business logic"
    ]
  },
  {
    id: 3,
    title: "Customer Segmentation & Retention Model",
    category: "Data Science",
    period: "2023",
    description: "Developed a machine learning model to identify high-risk churn customers and recommend personalized retention strategies based on behavioral patterns.",
    longDescription: "Applied clustering algorithms and survival analysis to segment customers by lifetime value and churn probability. Built predictive models using logistic regression and random forests. Delivered insights through automated reports and API integration.",
    image: "/project-customer-segmentation.jpg",
    technologies: ["Python", "Scikit-learn", "Pandas", "SQL", "Tableau"],
    metrics: {
      accuracy: "87% prediction accuracy",
      retention: "12% churn reduction",
      revenue: "$500K retained revenue",
      segments: "8 distinct customer personas"
    },
    links: {
      github: "https://github.com/ttp0513/customer-segmentation",
      demo: null,
      documentation: "/projects/segmentation-model.pdf"
    },
    highlights: [
      "Processed 100K+ customer records with feature engineering",
      "Identified top 5 churn indicators through EDA",
      "Deployed model as REST API for CRM integration",
      "Created actionable playbooks for each customer segment"
    ]
  },
  {
    id: 4,
    title: "Automated ETL Pipeline for Marketing Data",
    category: "Data Engineering",
    period: "2023-2024",
    description: "Architected a Python-based ETL pipeline to extract, transform, and load marketing data from 10+ sources into a centralized data warehouse.",
    longDescription: "Designed modular pipeline with error handling, logging, and retry logic. Implemented data quality checks and validation rules. Scheduled daily runs with Airflow orchestration. Reduced data processing time from 4 hours to 30 minutes.",
    image: "/project-etl-pipeline.jpg",
    technologies: ["Python", "SQL", "Apache Airflow", "PostgreSQL", "AWS S3"],
    metrics: {
      sources: "10+ data sources",
      speed: "87% faster processing",
      reliability: "99.5% uptime",
      automation: "Zero manual intervention"
    },
    links: {
      github: "https://github.com/ttp0513/marketing-etl",
      demo: null,
      documentation: "/projects/etl-pipeline.pdf"
    },
    highlights: [
      "Unified disparate data sources into star schema",
      "Built incremental load logic for efficiency",
      "Implemented automated data quality monitoring",
      "Created comprehensive documentation and runbooks"
    ]
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    category: "Web Development",
    period: "2024",
    description: "Designed and developed a modern, responsive portfolio website showcasing my work in analytics, BI, and engineering with an emphasis on clean design and user experience.",
    longDescription: "Built with React and Tailwind CSS, featuring smooth animations, glassmorphism design, and mobile-first approach. Implemented contact form with EmailJS integration. Deployed on Vercel with continuous deployment from GitHub.",
    image: "/project-portfolio.jpg",
    technologies: ["React", "Tailwind CSS", "Vite", "Vercel", "EmailJS"],
    metrics: {
      performance: "95+ Lighthouse score",
      responsive: "100% mobile compatible",
      speed: "<1s initial load",
      accessibility: "WCAG 2.1 AA compliant"
    },
    links: {
      github: "https://github.com/ttp0513/portfolio",
      demo: "https://trongphan.dev",
      documentation: null
    },
    highlights: [
      "Crafted custom animations and interactions",
      "Optimized for performance and SEO",
      "Implemented dark theme with CSS variables",
      "Built reusable component library"
    ]
  }
];

// Approach Toggle Component
const ApproachSelector = ({ current, onChange }) => {
  const approaches = [
    { id: "slides", label: "Slide View", icon: Layout },
    { id: "dashboard", label: "Dashboard View", icon: BarChart3 }
  ];

  return (
    <div className="flex gap-2 mb-12 justify-center animate-fade-in animate-delay-400">
      {approaches.map((approach) => (
        <button
          key={approach.id}
          onClick={() => onChange(approach.id)}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
            current === approach.id
              ? "glass-strong border-primary text-primary"
              : "glass hover:glass-light text-muted-foreground hover:text-foreground"
          }`}
        >
          <approach.icon className="w-4 h-4" />
          <span className="font-medium">{approach.label}</span>
        </button>
      ))}
    </div>
  );
};

// APPROACH 1: SLIDE/CARD VIEW
const SlideView = ({ projects }) => {
  // LocalState 
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group glass p-6 rounded-2xl hover:glass-light transition-all duration-300 cursor-pointer animate-fade-in"
            style={{ animationDelay: `${(index + 2) * 100}ms` }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Project Image */}
            <div className="relative h-48 mb-4 rounded-xl overflow-hidden bg-surface">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/30">
                {project.title.charAt(0)}
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
            </div>

            {/* Category Badge */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
                {project.category}
              </span>
              <span className="text-xs text-muted-foreground">{project.period}</span>
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-md bg-surface text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-md bg-surface text-muted-foreground">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* View Details */}
            <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
              View Details
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fade-in">
          <div className="glass-strong max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl hover:bg-surface transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                  {selectedProject.category}
                </span>
                <span className="text-muted-foreground text-sm">
                  {selectedProject.period}
                </span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{selectedProject.title}</h2>
              <p className="text-muted-foreground">{selectedProject.longDescription}</p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {Object.entries(selectedProject.metrics).map(([key, value]) => (
                <div key={key} className="glass p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                </div>
              ))}
            </div>

            {/* Key Highlights */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Key Highlights</h3>
              <div className="space-y-2">
                {selectedProject.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-xl bg-surface text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {selectedProject.links.github && (
                <a
                  href={selectedProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl glass-light hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {selectedProject.links.demo && (
                <a
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl glass-light hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
              {selectedProject.links.documentation && (
                <a
                  href={selectedProject.links.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl glass-light hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <Download className="w-5 h-5" />
                  Documentation
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// APPROACH 2: DASHBOARD/ANALYTICS VIEW
const DashboardView = ({ projects }) => {
  // Calculate aggregate stats
  const totalProjects = projects.length;
  const categories = [...new Set(projects.map(p => p.category))];
  const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))];

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in animate-delay-200">
        <div className="glass p-6 rounded-2xl">
          <Target className="w-8 h-8 text-primary mb-3" />
          <div className="text-3xl font-bold mb-1">{totalProjects}</div>
          <div className="text-sm text-muted-foreground">Projects Completed</div>
        </div>
        <div className="glass p-6 rounded-2xl">
          <BarChart3 className="w-8 h-8 text-primary mb-3" />
          <div className="text-3xl font-bold mb-1">{categories.length}</div>
          <div className="text-sm text-muted-foreground">Specializations</div>
        </div>
        <div className="glass p-6 rounded-2xl">
          <Layout className="w-8 h-8 text-primary mb-3" />
          <div className="text-3xl font-bold mb-1">{allTechnologies.length}</div>
          <div className="text-sm text-muted-foreground">Technologies</div>
        </div>
        <div className="glass p-6 rounded-2xl">
          <Clock className="w-8 h-8 text-primary mb-3" />
          <div className="text-3xl font-bold mb-1">2022</div>
          <div className="text-sm text-muted-foreground">Since</div>
        </div>
      </div>

      {/* Projects Table/List */}
      <div className="glass rounded-2xl overflow-hidden animate-fade-in animate-delay-400">
        <div className="p-6 border-b border-border">
          <h3 className="text-xl font-semibold">Project Portfolio</h3>
        </div>

        <div className="divide-y divide-border">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 hover:bg-surface/30 transition-colors"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Left: Project Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <span className="px-2 py-1 rounded-md bg-primary/20 text-primary text-xs">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-md bg-surface/50 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Metrics & Actions */}
                <div className="lg:w-80 space-y-3">
                  {/* Key Metric Highlights */}
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(project.metrics).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="glass-strong p-3 rounded-lg">
                        <div className="text-sm font-semibold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg glass-strong hover:bg-primary/10 hover:text-primary transition-all text-sm"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg glass-strong hover:bg-primary/10 hover:text-primary transition-all text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                    {project.links.documentation && (
                      <a
                        href={project.links.documentation}
                        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg glass-strong hover:bg-primary/10 hover:text-primary transition-all text-sm"
                      >
                        <FileText className="w-4 h-4" />
                        Docs
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Breakdown */}
      <div className="glass p-6 rounded-2xl animate-fade-in animate-delay-600">
        <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
        <div className="flex flex-wrap gap-2">
          {allTechnologies.map((tech, i) => {
            const count = projects.filter(p => p.technologies.includes(tech)).length;
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface hover:bg-primary/10 hover:text-primary transition-all cursor-pointer"
              >
                <span className="font-medium">{tech}</span>
                <span className="text-xs text-muted-foreground">({count})</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// MAIN COMPONENT
export const Projects = () => {
  const [viewMode, setViewMode] = useState("slides"); // "slides", "dashboard"

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
     
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-secondary text-md font-medium tracking-wider uppercase animate-fade-in">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-200 text-secondary-foreground">
            Projects that{" "}
            <span className="font-serif italic font-normal text-white">
              drive impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-300">
            A collection of analytics solutions, data pipelines, and engineering projects
            that solve real business problems with measurable results.
          </p>
        </div>

        {/* View Mode Selector */}
        <ApproachSelector current={viewMode} onChange={setViewMode} />

        {/* Render Selected View */}
        {viewMode === "slides" && <SlideView projects={projectsData} />}
        {viewMode === "pdf" && <PDFView projects={projectsData} />}
        {viewMode === "dashboard" && <DashboardView projects={projectsData} />}
      </div>
    </section>
  );
};
