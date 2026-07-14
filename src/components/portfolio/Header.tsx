import { useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navigationItems } from "../../data/portfolio.data";
// import logo from "../../../public/dan-animated.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 font-black text-cyan-300">
            DA
            {/* <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-primary text-primary-foreground shadow-sm sm:h-12 sm:w-12">
              <img
                src={logo}
                alt="Dan"
                className="h-full w-full object-contain"
              />
            </div> */}
          </span>

          <div>
            <p className="font-bold leading-none text-white">Danilo Alingasa</p>
            <p className="mt-1 text-xs text-slate-500">Software Engineer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="https://drive.google.com/uc?export=download&id=1YZmCq5nK_9naUuIeLHmYfWZOjz1aF29l"
          download
          className="hidden items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/30 hover:bg-cyan-400/5 lg:inline-flex"
        >
          <Download className="h-4 w-4" />
          Resume
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="rounded-xl border border-white/10 p-2.5 text-slate-300 lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/5 bg-slate-950 px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
