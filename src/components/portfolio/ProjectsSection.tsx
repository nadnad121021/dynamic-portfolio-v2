import {
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  CheckCircle2,
  Code2,
  ExternalLink,
  FolderGit2,
  Globe,
  Laptop2,
  Sparkles,
  Users,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects, type Project } from "../../data/portfolio.data";

type ProjectMetaProps = {
  project: Project;
  compact?: boolean;
};

function ProjectMeta({ project, compact = false }: ProjectMetaProps) {
  const items = [
    {
      label: project.role,
      icon: BriefcaseBusiness,
    },
    {
      label: project.duration,
      icon: CalendarDays,
    },
    project.teamSize
      ? {
          label: project.teamSize,
          icon: Users,
        }
      : null,
  ].filter(Boolean) as {
    label: string;
    icon: typeof BriefcaseBusiness;
  }[];

  return (
    <div
      className={`flex flex-wrap ${
        compact ? "gap-x-4 gap-y-2" : "gap-x-6 gap-y-3"
      }`}
    >
      {items.map(({ label, icon: Icon }) => (
        <div
          key={label}
          className="inline-flex items-center gap-2 text-sm text-slate-400"
        >
          <Icon className="h-4 w-4 shrink-0 text-cyan-400" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

type ProjectLinksProps = {
  project: Project;
  compact?: boolean;
};

function ProjectLinks({ project, compact = false }: ProjectLinksProps) {
  if (!project.githubUrl && !project.liveUrl) {
    return null;
  }

  const buttonClass = compact
    ? "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition sm:w-auto"
    : "inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold transition sm:w-auto";

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className={`${buttonClass} bg-white text-slate-950 hover:-translate-y-0.5 hover:bg-slate-100`}
        >
          <FaGithub className="h-5 w-5" />
          View Source
        </a>
      )}

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className={`${buttonClass} border border-white/10 bg-white/[0.025] text-white hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/5`}
        >
          <ExternalLink className="h-5 w-5" />
          Live Application
        </a>
      )}
    </div>
  );
}

function getProjectIcon(category?: string) {
  switch (category) {
    case "Open Source":
      return Code2;

    case "Personal Project":
      return Laptop2;

    case "Enterprise":
      return Building2;

    case "Website":
      return Globe;

    default:
      return FolderGit2;
  }
}

function ProjectLogo({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const sizeClass = featured ? "h-20 w-20 sm:h-24 sm:w-24" : "h-14 w-14";
  const Icon = getProjectIcon(project.category);
  if (project.logo) {
    return (
      <div
        className={`${sizeClass} flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2`}
      >
        <img
          src={project.logo}
          alt={`${project.title} logo`}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`${sizeClass} flex shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl font-black text-cyan-300`}
    >
      {/* {project.title
        .split(" ")
        .slice(0, 2)
        .map((word) => word.charAt(0))
        .join("")
        .toUpperCase()} */}
      <Icon className="h-8 w-8 text-slate-500" />
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative mt-14 overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950/40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]"
      />

      <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
            <Sparkles className="h-4 w-4" />
            Featured Project
          </div>

          <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center">
            <ProjectLogo project={project} featured />

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-400">
                {project.company ?? project.category}
              </p>

              <h3 className="mt-2 text-4xl font-black text-white sm:text-5xl">
                {project.title}
              </h3>

              {project.subtitle && (
                <p className="mt-2 text-lg font-semibold text-slate-300">
                  {project.subtitle}
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <ProjectMeta project={project} />
          </div>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm font-medium text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-9">
            <ProjectLinks project={project} />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 backdrop-blur-sm sm:p-7">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-400">
            Engineering highlights
          </p>

          {project.highlights?.length ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.025] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-400" />

                  <p className="text-sm leading-6 text-slate-300">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-5 text-sm leading-7 text-slate-500">
              Add the major features, systems, and engineering contributions
              completed for this project.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-cyan-400/[0.025] sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <ProjectLogo project={project} />

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="rounded-xl border border-white/10 p-2.5 text-slate-500 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 hover:text-cyan-300"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        )}
      </div>

      <div className="mt-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-400">
          {project.company ?? project.category}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>

        {project.subtitle && (
          <p className="mt-2 font-semibold text-slate-300">
            {project.subtitle}
          </p>
        )}
      </div>

      <div className="mt-5">
        <ProjectMeta project={project} compact />
      </div>

      <p className="mt-5 flex-1 leading-7 text-slate-500">
        {project.description}
      </p>

      {project.highlights?.length ? (
        <div className="mt-6 space-y-3">
          {project.highlights.slice(0, 3).map((highlight) => (
            <div key={highlight} className="flex items-start gap-3">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />
              <p className="text-sm leading-6 text-slate-400">{highlight}</p>
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-7 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/5 bg-white/[0.045] px-3 py-1.5 text-xs font-semibold text-slate-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-7 border-t border-white/5 pt-6">
        <ProjectLinks project={project} compact />
      </div>
    </article>
  );
}

export function ProjectsSection() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Selected projects
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Products designed around real problems.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
            Projects demonstrating backend engineering, frontend development,
            database design, cloud infrastructure, and production delivery.
          </p>
        </div>

        {featuredProject && <FeaturedProjectCard project={featuredProject} />}

        {otherProjects.length > 0 && (
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
