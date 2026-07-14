import {
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { experiences, type Experience } from "../../data/portfolio.data";

type CompanyLogoProps = {
  experience: Experience;
};

function CompanyLogo({ experience }: CompanyLogoProps) {
  const initials = experience.company
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 p-2 sm:h-16 sm:w-16 ${
        experience.backgroundClass ?? "bg-white"
      }`}
    >
      {experience.logo ? (
        <img
          src={experience.logo}
          alt={`${experience.company} logo`}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      ) : (
        <span className="text-sm font-black text-slate-900">{initials}</span>
      )}
    </div>
  );
}

type ExperienceCardProps = {
  experience: Experience;
  index: number;
};

function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <article className="group relative md:pl-16">
      <div className="absolute left-0 top-8 hidden h-10 w-10 items-center justify-center rounded-full border-4 border-slate-950 bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/10 md:flex">
        <BriefcaseBusiness className="h-4 w-4" />
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:shadow-2xl hover:shadow-cyan-950/20 sm:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/[0.04] blur-3xl transition group-hover:bg-cyan-400/[0.07]"
        />

        <div className="relative">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4 sm:gap-5">
              <CompanyLogo experience={experience} />

              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-400 sm:text-sm">
                  {experience.period}
                </p>

                <h3 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">
                  {experience.role}
                </h3>

                {experience.companyUrl ? (
                  <a
                    href={experience.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex max-w-full items-center gap-2 font-semibold text-slate-300 transition hover:text-cyan-300"
                  >
                    <span className="truncate">{experience.company}</span>
                    <ExternalLink className="h-4 w-4 shrink-0" />
                  </a>
                ) : (
                  <p className="mt-2 font-semibold text-slate-300">
                    {experience.company}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-end">
              {experience.location && (
                <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="h-4 w-4 shrink-0 text-cyan-400" />
                  <span>{experience.location}</span>
                </div>
              )}

              <span className="font-mono text-xs font-bold text-slate-700">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>

          <p className="mt-6 max-w-5xl text-sm leading-7 text-slate-400 sm:text-base">
            {experience.description}
          </p>

          {experience.achievements.length > 0 && (
            <div className="mt-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
                Key contributions
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {experience.achievements.map((achievement) => (
                  <div
                    key={achievement}
                    className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />

                    <p className="text-sm leading-6 text-slate-400">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {experience.technologies.length > 0 && (
            <div className="mt-7 border-t border-white/5 pt-6">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-600">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.025] px-3 py-1.5 text-xs font-semibold text-slate-400 transition hover:border-cyan-400/25 hover:bg-cyan-400/5 hover:text-slate-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-y border-white/5 bg-slate-900/25 px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
            Professional journey
          </p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl">
            Experience building and shipping software.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            A background focused on backend services, full-stack applications,
            cloud deployment, team collaboration, and reliable production
            delivery.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-14">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-5 top-0 hidden w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent md:block"
          />

          <div className="space-y-6 sm:space-y-7">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${experience.role}-${experience.period}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
