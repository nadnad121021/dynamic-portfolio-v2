import { ArrowRight, UserRound } from "lucide-react";
import { engineeringFocus } from "../../data/portfolio.data";

export function AboutSection() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-semibold text-cyan-300">
            <UserRound className="h-4 w-4" />
            About me
          </div>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            Turning requirements into dependable software.
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-slate-400 sm:text-lg">
            <p>
              I&apos;m a software engineer specializing in backend development
              with Node.js, TypeScript, and PostgreSQL.
            </p>

            <p>
              My experience includes API development, database design,
              authentication, real-time integrations, cloud deployment, and
              modern frontend development using React.
            </p>

            <p>
              I enjoy solving practical engineering problems and creating
              systems that are secure, maintainable, and easy to extend.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 font-bold text-cyan-300 transition hover:gap-3"
          >
            Let&apos;s work together
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {engineeringFocus.map((focus, index) => (
            <article
              key={focus}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-cyan-400/25"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 font-black text-cyan-300">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="font-bold leading-7 text-white">{focus}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
