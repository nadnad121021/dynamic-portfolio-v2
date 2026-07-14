import { skillGroups } from "../../data/portfolio.data";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-y border-white/5 bg-slate-900/25 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Technical expertise
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Tools I use to build production systems.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            Backend engineering supported by modern frontend development,
            databases, cloud infrastructure, and automated delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-3xl border border-white/10 bg-slate-950/60 p-7 transition hover:-translate-y-1 hover:border-cyan-400/25 sm:p-8"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {group.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-500">
                      {group.description}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-sm font-medium text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
