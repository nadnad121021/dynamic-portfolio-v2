import { ArrowRight, Mail, Server } from "lucide-react";
import { statistics } from "../../data/portfolio.data";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-32 sm:px-8 lg:px-10"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]"
        />

        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm font-semibold text-emerald-300">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Available for new opportunities
            </div>

            <p className="mb-5 text-lg font-semibold text-cyan-300">
              Hello, I&apos;m Dan Alingasa.
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              I build web applications
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                from backend to frontend.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
              {/* Backend and Full Stack Software Engineer with 5+ years of
              experience building web applications and APIs using Node.js,
              React, TypeScript, and AWS. */}
              Backend and Full Stack Software Engineer with 5+ years of
              experience building web applications.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20"
              >
                Explore Projects
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 font-bold text-white transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-9 flex gap-3">
              <a
                href="https://github.com/nadnad121021"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:-translate-y-1 hover:text-cyan-300"
              >
                <FaGithub className="h-5 w-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/danilo-alingasa-a727241a2"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:-translate-y-1 hover:text-cyan-300"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>

              <a
                href="mailto:alingasadan@gmail.com"
                aria-label="Email"
                className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:-translate-y-1 hover:text-cyan-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/5 to-violet-500/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/75 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
              <div className="mb-8 flex items-center justify-between border-b border-white/5 pb-5">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <span className="font-mono text-xs text-slate-500">
                  profile.ts
                </span>
              </div>

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Server className="h-8 w-8" />
              </div>

              <h2 className="mt-6 text-2xl font-black text-white">
                Software Engineer
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Building APIs, web applications, databases, and user experiences
                from backend to frontend.
                {/* Building complete web applications from backend to frontend. */}
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {[
                  "Node.js",
                  "TypeScript",
                  "PostgreSQL",
                  "AWS",
                  "React",
                  "Docker",
                ].map((technology) => (
                  <div
                    key={technology}
                    className="rounded-xl border border-white/5 bg-white/[0.03] px-4 py-3 text-center text-sm font-semibold text-slate-300"
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-slate-900/30 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-4">
          {statistics.map((statistic) => (
            <div key={statistic.label} className="py-4 text-center">
              <p className="text-3xl font-black text-white sm:text-4xl">
                {statistic.value}
              </p>
              <p className="mx-auto mt-2 max-w-44 text-sm leading-6 text-slate-500">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
