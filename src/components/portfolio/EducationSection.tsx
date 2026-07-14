import { BookOpen, CheckCircle2, MapPin } from "lucide-react";
import { education, type Education } from "../../data/portfolio.data";

type SchoolLogoProps = {
  education: Education;
};

function SchoolLogo({ education }: SchoolLogoProps) {
  const initials = education.school
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 p-2 ${
        education.backgroundClass ?? "bg-white"
      }`}
    >
      {education.logo ? (
        <img
          src={education.logo}
          alt={education.school}
          className="h-full w-full object-contain"
        />
      ) : (
        <span className="text-sm font-black text-slate-900">{initials}</span>
      )}
    </div>
  );
}

export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Academic background
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Education and continuous learning.
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            My foundation in information technology is supported by years of
            hands-on software development and continuous technical learning.
          </p>
        </div>

        <div className="mt-14 space-y-7">
          {education.map((item) => (
            <article
              key={`${item.school}-${item.program}`}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/60 p-6 sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-500/5 blur-[90px]"
              />

              <div className="relative grid gap-8 lg:grid-cols-[auto_1fr]">
                {/* <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <GraduationCap className="h-8 w-8" />
                </div> */}
                <SchoolLogo education={item} />

                <div>
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                        {item.period}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                        {item.program}
                      </h3>

                      <p className="mt-2 text-lg font-semibold text-slate-300">
                        {item.school}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 text-sm text-slate-500">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </div>
                  </div>

                  <p className="mt-6 max-w-4xl leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-7 grid gap-3 md:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-400" />

                        <p className="text-sm leading-6 text-slate-400">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-3 border-t border-white/5 pt-6 text-sm text-slate-500">
                    <BookOpen className="h-4 w-4 text-cyan-300" />
                    Continuous learning through projects, documentation, and
                    production experience
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              title: "Software Development",
              description:
                "Built a strong foundation in software development through academic projects and hands-on programming.",
            },
            {
              title: "Database Systems",
              description:
                "Learned database design, data modeling, and SQL as part of developing web-based applications.",
            },
            {
              title: "Continuous Learning",
              description:
                "Developed the habit of learning new technologies and solving problems through research and practical projects.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6"
            >
              <h3 className="font-bold text-white">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
