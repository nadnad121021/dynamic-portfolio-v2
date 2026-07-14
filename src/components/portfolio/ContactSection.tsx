import { Mail, MapPin } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

export function ContactSection() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-950/70 via-slate-950 to-blue-950/60 p-7 sm:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-semibold text-cyan-300">
                <Mail className="h-4 w-4" />
                Get in touch
              </div>

              <h2 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl">
                Have a project or opportunity in mind?
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                I&apos;m open to backend, full stack, and software engineering
                opportunities where I can help build reliable products.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:alingasadan@gmail.com"
                className="inline-flex min-w-56 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-950"
              >
                <Mail className="h-5 w-5" />
                Send an Email
              </a>

              <a
                href="https://www.linkedin.com/in/danilo-alingasa-a727241a2"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-56 items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-bold text-white"
              >
                <FaLinkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="mt-2 font-semibold text-white">
                alingasadan@gmail.com
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Location</p>
              <p className="mt-2 flex items-center gap-2 font-semibold text-white">
                <MapPin className="h-4 w-4 text-cyan-300" />
                Cebu, Philippines
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Work setup</p>
              <p className="mt-2 font-semibold text-white">
                Remote, Hybrid, or On-site
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
