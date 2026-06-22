"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import { navItems, siteConfig } from "@/lib/constants";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <nav
        aria-label="Navegación principal"
        className="section-shell flex min-h-16 items-center justify-between gap-3 py-2"
      >
        <a className="tap-target inline-flex items-center rounded-md" href="#inicio">
          <Logo />
        </a>
        <button
          type="button"
          className="tap-target inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 text-brand-ink md:hidden"
          aria-controls="menu-principal"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">{isOpen ? "Cerrar menú" : "Abrir menú"}</span>
          <span aria-hidden="true" className="flex h-5 w-6 flex-col justify-between">
            <span className="h-0.5 rounded bg-current" />
            <span className="h-0.5 rounded bg-current" />
            <span className="h-0.5 rounded bg-current" />
          </span>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="rounded-md px-3 py-2 text-sm font-bold text-brand-muted hover:bg-brand-soft hover:text-brand-blue"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="ml-2 rounded-md bg-brand-orange px-4 py-3 text-sm font-black text-brand-ink shadow-sm hover:bg-orange-500"
            href="#empezar"
          >
            {siteConfig.cta}
          </a>
        </div>
      </nav>
      <div
        id="menu-principal"
        className={isOpen ? "border-t border-gray-200 bg-white md:hidden" : "hidden"}
      >
        <div className="section-shell grid gap-1 py-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              className="tap-target rounded-md px-3 py-3 text-base font-bold text-brand-ink hover:bg-brand-soft"
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            className="tap-target mt-2 inline-flex items-center justify-center rounded-md bg-brand-orange px-4 py-3 text-base font-black text-brand-ink"
            href="#empezar"
            onClick={closeMenu}
          >
            {siteConfig.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
