import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
export function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-bold text-white">Danilo Alingasa</p>
          <p className="mt-1 text-sm text-slate-600">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/nadnad121021"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2.5 text-slate-500 hover:bg-white/5 hover:text-white"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/danilo-alingasa-a727241a2"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2.5 text-slate-500 hover:bg-white/5 hover:text-white"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>

          <a
            href="mailto:alingasadan@gmail.com"
            aria-label="Email"
            className="rounded-lg p-2.5 text-slate-500 hover:bg-white/5 hover:text-white"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
