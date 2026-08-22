import {
  BriefcaseBusiness,
  GraduationCap,
  Microscope,
} from "lucide-react";

const roles = [
  {
    period: "Mar 2026 - Present",
    role: "Student Researcher",
    company: "Data Quality and Survey Methodology Lab",
    type: "Research",
    icon: Microscope,
    summary:
      "Designing and evaluating a human-supervised workflow for classifying noisy, open-ended survey responses.",
    evidence: [
      ["Workflow", "Human-supervised classification"],
      ["Controls", "Preserved labels and outputs"],
      ["Evidence", "Reproducible audit records"],
    ],
    skills: ["Python", "Streamlit", "Applied AI Evaluation"],
  },
  {
    period: "Jun 2022 - Feb 2025",
    role: "Advanced Analytics Analyst",
    company: "Ovative Group",
    type: "Professional",
    icon: BriefcaseBusiness,
    featured: true,
    summary:
      "Supported geo-experiment design and analysis across 7+ retail client accounts and online and offline media channels.",
    evidence: [
      ["Scope", "Retail revenue, traffic, e-commerce and stores"],
      ["Methods", "GeoX, GeoLift and R-based configuration"],
      ["Decisions", "Budget, duration and test reliability"],
    ],
    contribution:
      "Configured experiment inputs, evaluated iROAS point estimates and one-sided confidence bounds, and presented uncertainty and measurement implications to internal analytics teams.",
    skills: ["R", "Geo Experimentation", "Causal Inference", "Excel"],
  },
  {
    period: "2019 - 2022",
    role: "Accounting Assistant",
    company: "University of Minnesota - CFANS",
    type: "Earlier experience",
    icon: BriefcaseBusiness,
    summary:
      "Supported financial operations through purchasing reconciliation, budget validation, and streamlined administrative workflows.",
    skills: ["Excel", "PeopleSoft"],
  },
  {
    period: "2019",
    role: "Data Analyst Intern",
    company: "Y Venture Group",
    type: "Professional",
    icon: BriefcaseBusiness,
    summary:
      "Built a U.S. book-sales dashboard with a team of interns to support demand forecasting and inventory planning.",
    skills: ["Excel", "Python", "Dashboarding"],
  },
];

const education = [
  {
    period: "Expected Dec 2027",
    degree: "M.S. Data Science and Analytics",
    school: "Kennesaw State University",
    detail: "Current GPA: 4.00",
  },
  {
    period: "2017 - 2022",
    degree: "B.S. Management Information Systems and Supply Chain Operations",
    school: "University of Minnesota",
    detail: "Minor in Business Analytics",
  },
];

const EvidenceGrid = ({ evidence }) => {
  if (!evidence) return null;

  return (
    <dl className="mt-5 grid gap-3 sm:grid-cols-3">
      {evidence.map(([label, value]) => (
        <div
          key={label}
          className="rounded-xl border border-primary/15 bg-background/35 p-4"
        >
          <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {label}
          </dt>
          <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

export const Experience = () => {
  return (
    <section id="experience" className="relative py-20">
      <div className="container relative z-10 mx-auto max-w-6xl px-6">
        <div className="mt-12 flex items-center gap-3">
          <BriefcaseBusiness className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Professional and research experience
          </h3>
        </div>

        <div className="relative mt-8">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-primary via-primary/35 to-transparent md:left-[11.25rem]" />

          <div className="space-y-6">
            {roles.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={`${item.period}-${item.role}`}
                  className="relative grid gap-3 pl-9 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-8 md:pl-0"
                >
                  <div className="pt-1 text-sm font-medium text-primary md:text-right">
                    {item.period}
                  </div>

                  <div className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background md:left-[10.75rem]">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                  </div>

                  <div
                    className={`rounded-2xl border p-5 backdrop-blur-md transition-colors duration-300 md:p-6 ${
                      item.featured
                        ? "border-primary/50 bg-surface/45 shadow-[0_18px_70px_rgb(213_137_54_/_12%)]"
                        : "border-primary/20 bg-surface/20 hover:border-primary/40"
                    }`}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h4 className="text-xl font-semibold md:text-2xl">
                          {item.role}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.company}
                        </p>
                      </div>
                      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        <Icon className="h-3.5 w-3.5" />
                        {item.type}
                      </span>
                    </div>

                    <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">
                      {item.summary}
                    </p>

                    <EvidenceGrid evidence={item.evidence} />

                    {item.contribution && (
                      <div className="mt-5 border-l-2 border-primary/50 pl-4">
                        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                          My contribution
                        </div>
                        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                          {item.contribution}
                        </p>
                      </div>
                    )}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-primary/10 px-3 py-1 text-xs text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-primary/20 bg-surface/20 p-6 backdrop-blur-md md:p-8">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Education
            </h3>
          </div>

          <div className="mt-6 divide-y divide-primary/15">
            {education.map((item) => (
              <article
                key={item.degree}
                className="grid gap-2 py-5 first:pt-0 last:pb-0 md:grid-cols-[10rem_minmax(0,1fr)_auto] md:items-center md:gap-6"
              >
                <div className="text-sm font-medium text-primary">
                  {item.period}
                </div>
                <div>
                  <h4 className="font-semibold">{item.degree}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.school}
                  </p>
                </div>
                <div className="text-sm text-secondary">{item.detail}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
