import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import { Button } from "@/components/Button";
import { caseStudies } from "@/data/caseStudies";

export const ProjectCaseStudyPage = () => {
  const { projectSlug } = useParams();
  const project = caseStudies[projectSlug];

  useEffect(() => {
    if (!project) return undefined;

    const previousTitle = document.title;
    document.title = `${project.title} | Trong Phan`;

    return () => {
      document.title = previousTitle;
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <Button as={Link} to="/" className="mb-12" size="sm">
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Button>

        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {project.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {project.summary}
          </p>
        </header>

        <dl className="my-12 grid gap-4 border-y border-border py-6 sm:grid-cols-3">
          {project.metadata.map((item) => (
            <div key={item.label}>
              <dt className="text-sm text-muted-foreground">{item.label}</dt>
              <dd className="mt-1 font-semibold">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-6 md:grid-cols-2">
          {project.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-border bg-surface/40 p-6"
            >
              <h2 className="text-xl font-semibold text-primary">
                {section.title}
              </h2>
              <p className="mt-3 leading-7 text-muted-foreground">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <aside className="mt-10 rounded-2xl border border-primary/30 bg-primary/10 p-6">
          <p className="font-semibold">Prototype notice</p>
          <p className="mt-2 text-muted-foreground">
            This route intentionally uses dummy content. It validates the page
            structure without presenting unfinished work as a completed case study.
          </p>
        </aside>
      </article>
    </main>
  );
};
