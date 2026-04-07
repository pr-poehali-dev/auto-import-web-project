import { useState } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Аукционы", href: "#auction" },
  { label: "Каталог", href: "#catalog" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: "rgba(15,12,10,0.85)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,107,0,0.1)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B00, #FF8C33)" }}>
              <Icon name="Car" size={18} />
            </div>
            <span className="font-oswald text-xl tracking-widest text-white">JAPAN<span className="text-gradient">AUTO</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(l => (
              <a key={l.label} href={l.href} className="text-sm font-medium transition-colors duration-200 hover:text-orange-400"
                style={{ color: "var(--brand-text-muted)" }}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg text-sm btn-outline">Войти</button>
            <button className="px-4 py-2 rounded-lg text-sm btn-primary">Подобрать авто</button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--brand-text)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden py-4 px-6 space-y-3" style={{ background: "rgba(15,12,10,0.98)", borderTop: "1px solid rgba(255,107,0,0.1)" }}>
          {NAV_LINKS.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
              className="block py-2 text-base font-medium transition-colors hover:text-orange-400"
              style={{ color: "var(--brand-text-muted)" }}>
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-3">
            <button className="flex-1 py-2.5 rounded-lg text-sm btn-outline">Войти</button>
            <button className="flex-1 py-2.5 rounded-lg text-sm btn-primary">Подобрать авто</button>
          </div>
        </div>
      )}
    </header>
  );
}
