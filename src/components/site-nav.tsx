import { useEffect, useState } from "react";
import { Menu, X, Plane } from "lucide-react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#countries", label: "Countries" },
  { href: "#study", label: "Study Visa" },
  { href: "#tourist", label: "Tourist Visa" },
  { href: "#stories", label: "Success Stories" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-10 w-10 rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-glow)]">
            <Plane className="h-5 w-5 -rotate-45" />
          </span>
          <div className="leading-tight">
            <div className="font-bold text-ink tracking-tight">Ajay Overseas</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Visa & Immigration</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold">
            Free Consultation
          </a>
        </div>

        <button
          className="lg:hidden grid place-items-center h-11 w-11 rounded-xl border border-border bg-background"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container-page py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 inline-flex justify-center rounded-xl px-5 py-3 text-sm font-semibold">
              Free Consultation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
