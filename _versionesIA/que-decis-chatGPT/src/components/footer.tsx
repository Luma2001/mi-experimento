import { Logo } from "@/components/logo";
import { navItems, siteConfig } from "@/lib/constants";
import { socialLinks } from "@/data/landing";

export function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="section-shell grid gap-8 border-t border-gray-200 pt-8 md:grid-cols-[1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-6 text-brand-muted">
            {siteConfig.description}
          </p>
        </div>
        <nav aria-label="Enlaces rápidos">
          <h2 className="text-base font-black text-brand-ink">Enlaces rápidos</h2>
          <ul className="mt-3 grid gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="font-bold text-brand-muted hover:text-brand-blue" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Redes sociales">
          <h2 className="text-base font-black text-brand-ink">Redes sociales</h2>
          <ul className="mt-3 grid grid-cols-2 gap-2">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  className="tap-target inline-flex items-center rounded-md font-bold text-brand-muted hover:text-brand-blue"
                  href={item.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="section-shell mt-8 border-t border-gray-200 pt-5 text-sm text-brand-muted">
        <p>
          © 2026 ¿Qué Decís? Todos los derechos reservados. Esta landing es una
          presentación visual del MVP.
        </p>
      </div>
    </footer>
  );
}
