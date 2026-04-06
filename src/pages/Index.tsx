import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/0ade45dc-e064-4b04-9176-e721bdc6711d/files/065ea01a-7480-4098-ba44-28ef03f62689.jpg";
const AUCTION_IMG = "https://cdn.poehali.dev/projects/0ade45dc-e064-4b04-9176-e721bdc6711d/files/6e163f50-0146-4acc-99bf-58b6636a208c.jpg";
const PORT_IMG = "https://cdn.poehali.dev/projects/0ade45dc-e064-4b04-9176-e721bdc6711d/files/c343b322-1d7c-4371-9189-b77b737a0c6c.jpg";

const NAV_LINKS = [
  { label: "Аукционы", href: "#auction" },
  { label: "Каталог", href: "#catalog" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

const CATALOG_CARS = [
  { brand: "Toyota", model: "Land Cruiser 300", year: 2022, price: "7 200 000", country: "Япония", mileage: "12 000", fuel: "Дизель", img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80" },
  { brand: "Hyundai", model: "Palisade", year: 2023, price: "5 100 000", country: "Корея", mileage: "8 500", fuel: "Бензин", img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80" },
  { brand: "BYD", model: "Han EV", year: 2023, price: "4 300 000", country: "Китай", mileage: "5 200", fuel: "Электро", img: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80" },
  { brand: "Lexus", model: "LX 600", year: 2022, price: "9 800 000", country: "Япония", mileage: "18 000", fuel: "Бензин", img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80" },
  { brand: "Kia", model: "EV6 GT", year: 2023, price: "4 750 000", country: "Корея", mileage: "3 100", fuel: "Электро", img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80" },
  { brand: "Zeekr", model: "001", year: 2023, price: "3 900 000", country: "Китай", mileage: "6 700", fuel: "Электро", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
];

const SERVICES = [
  { icon: "Gavel", title: "Подбор на аукционе", desc: "Поиск и выкуп автомобилей на аукционах USS, TAA, JU, Manheim и других площадках." },
  { icon: "Ship", title: "Морская доставка", desc: "Доставка из портов Японии, Кореи и Китая. Сроки от 18 до 35 дней." },
  { icon: "FileCheck", title: "Таможенное оформление", desc: "Полное сопровождение: СБКТС, ПТС, постановка на учёт в ГИБДД." },
  { icon: "Wrench", title: "Предпродажная подготовка", desc: "Диагностика, мойка, устранение мелких дефектов перед выдачей." },
  { icon: "MapPin", title: "Доставка по России", desc: "Транспортировка до вашего города автовозом или ж/д транспортом." },
  { icon: "ShieldCheck", title: "Гарантия сделки", desc: "Работаем по договору. Возврат средств при срыве сделки по нашей вине." },
];

const STEPS = [
  { num: "01", title: "Заявка", desc: "Оставляете пожелания: марка, модель, бюджет, страна происхождения." },
  { num: "02", title: "Подбор", desc: "Находим варианты на аукционах и согласовываем с вами." },
  { num: "03", title: "Выкуп", desc: "Участвуем в торгах, выкупаем и проводим предотгрузочную проверку." },
  { num: "04", title: "Доставка", desc: "Грузим на судно, страхуем, отслеживаем в реальном времени." },
  { num: "05", title: "Таможня", desc: "Оформляем все документы, платим пошлины, получаем ПТС." },
  { num: "06", title: "Получение", desc: "Выдаём авто в вашем городе. Полный пакет документов включён." },
];

const COUNTRY_FLAGS: Record<string, string> = { "Япония": "🇯🇵", "Корея": "🇰🇷", "Китай": "🇨🇳" };

const countryColors: Record<string, string> = {
  "Япония": "text-red-400 border-red-400/30 bg-red-400/10",
  "Корея": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "Китай": "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
};

function Calculator() {
  const [country, setCountry] = useState("Япония");
  const [price, setPrice] = useState(15000);
  const [engine, setEngine] = useState(2000);
  const [year, setYear] = useState(2021);
  const [fuel, setFuel] = useState("Бензин");

  const USD = 90;
  const carPrice = price * USD;
  const shipping = country === "Япония" ? 120000 : country === "Корея" ? 100000 : 90000;
  const customs = fuel === "Электро"
    ? Math.round(engine * 5.3 * 1.3)
    : Math.round((carPrice * 0.15 + engine * 2.5) * 1.2);
  const sbkts = 45000;
  const total = carPrice + shipping + customs + sbkts;

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: "var(--brand-text-muted)" }}>Страна производства</label>
          <div className="flex gap-3">
            {["Япония", "Корея", "Китай"].map(c => (
              <button key={c} onClick={() => setCountry(c)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 border ${country === c ? "btn-primary border-transparent" : "btn-outline"}`}>
                {COUNTRY_FLAGS[c]} {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: "var(--brand-text-muted)" }}>
            Цена на аукционе: <span className="text-white font-bold">${price.toLocaleString()}</span>
          </label>
          <input type="range" min="5000" max="150000" step="1000" value={price} onChange={e => setPrice(+e.target.value)}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{ background: `linear-gradient(to right, #FF6B00 ${((price - 5000) / 145000) * 100}%, rgba(255,107,0,0.2) 0%)` }} />
          <div className="flex justify-between text-xs mt-1" style={{ color: "var(--brand-text-muted)" }}>
            <span>$5 000</span><span>$150 000</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: "var(--brand-text-muted)" }}>
            Объём двигателя: <span className="text-white font-bold">{engine} см³</span>
          </label>
          <input type="range" min="660" max="6000" step="100" value={engine} onChange={e => setEngine(+e.target.value)}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{ background: `linear-gradient(to right, #FF6B00 ${((engine - 660) / 5340) * 100}%, rgba(255,107,0,0.2) 0%)` }} />
          <div className="flex justify-between text-xs mt-1" style={{ color: "var(--brand-text-muted)" }}>
            <span>660 см³</span><span>6 000 см³</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--brand-text-muted)" }}>Тип топлива</label>
            <select value={fuel} onChange={e => setFuel(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors"
              style={{ background: "var(--brand-dark-3)", borderColor: "rgba(255,107,0,0.2)", color: "var(--brand-text)" }}>
              <option>Бензин</option>
              <option>Дизель</option>
              <option>Гибрид</option>
              <option>Электро</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: "var(--brand-text-muted)" }}>Год выпуска</label>
            <select value={year} onChange={e => setYear(+e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors"
              style={{ background: "var(--brand-dark-3)", borderColor: "rgba(255,107,0,0.2)", color: "var(--brand-text)" }}>
              {[2024,2023,2022,2021,2020,2019,2018,2017].map(y => <option key={y}>{y}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-6 space-y-4" style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.08), rgba(255,107,0,0.03))", border: "1px solid rgba(255,107,0,0.2)" }}>
        <h4 className="font-oswald text-lg uppercase tracking-wider mb-4" style={{ color: "var(--brand-text-muted)" }}>Расчёт стоимости</h4>
        {[
          { label: "Цена автомобиля", value: carPrice },
          { label: "Доставка до России", value: shipping },
          { label: "Таможенные пошлины", value: customs },
          { label: "СБКТС + ПТС", value: sbkts },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-center py-2.5 border-b" style={{ borderColor: "rgba(255,107,0,0.1)" }}>
            <span className="text-sm" style={{ color: "var(--brand-text-muted)" }}>{label}</span>
            <span className="font-semibold text-white">{value.toLocaleString("ru-RU")} ₽</span>
          </div>
        ))}
        <div className="flex justify-between items-center pt-3">
          <span className="font-oswald text-lg uppercase tracking-wide" style={{ color: "var(--brand-text)" }}>Итого под ключ</span>
          <span className="font-oswald text-2xl text-gradient">{total.toLocaleString("ru-RU")} ₽</span>
        </div>
        <p className="text-xs mt-2" style={{ color: "var(--brand-text-muted)" }}>* Расчёт ориентировочный. Точная стоимость после согласования с менеджером.</p>
        <button className="w-full py-3 rounded-xl btn-primary text-sm mt-2">
          Получить точный расчёт
        </button>
      </div>
    </div>
  );
}

function Header() {
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

const Index = () => {
  const [activeTab, setActiveTab] = useState("все");

  const filteredCars = activeTab === "все" ? CATALOG_CARS : CATALOG_CARS.filter(c => c.country === activeTab);

  return (
    <div className="min-h-screen" style={{ background: "var(--brand-dark)", color: "var(--brand-text)" }}>
      <Header />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="hero" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,12,10,0.95) 0%, rgba(15,12,10,0.6) 50%, rgba(15,12,10,0.85) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(255,107,0,0.12) 0%, transparent 60%)" }} />
        </div>

        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse-glow"
          style={{ background: "radial-gradient(circle, #FF6B00, transparent)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 anim-fade-up"
              style={{ background: "rgba(255,107,0,0.15)", border: "1px solid rgba(255,107,0,0.3)", color: "#FF8C33" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Более 500 авто доставлено в 2024 году
            </div>

            <h1 className="font-oswald text-5xl sm:text-6xl lg:text-7xl font-bold leading-none mb-6 anim-fade-up delay-100">
              АВТО ИЗ<br />
              <span className="text-gradient">ЯПОНИИ,</span><br />
              КОРЕИ И КИТАЯ
            </h1>

            <p className="text-lg mb-8 leading-relaxed anim-fade-up delay-200" style={{ color: "var(--brand-text-muted)" }}>
              Подбираем и доставляем автомобили с аукционов напрямую. Прозрачная цена, полное таможенное оформление и гарантия сделки.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 anim-fade-up delay-300">
              <button className="px-8 py-4 rounded-xl text-base btn-primary glow-orange-sm">
                Подобрать автомобиль
              </button>
              <a href="#calculator" className="px-8 py-4 rounded-xl text-base btn-outline flex items-center gap-2">
                <Icon name="Calculator" size={18} />
                Рассчитать стоимость
              </a>
            </div>

            <div className="flex flex-wrap gap-8 anim-fade-up delay-400">
              {[["500+", "Авто доставлено"], ["8 лет", "На рынке"], ["3 страны", "Импорт"], ["12 мес.", "Гарантия"]].map(([num, label]) => (
                <div key={label}>
                  <div className="font-oswald text-2xl font-bold text-gradient">{num}</div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--brand-text-muted)" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float">
          <span className="text-xs tracking-widest" style={{ color: "var(--brand-text-muted)" }}>ЛИСТАЙТЕ</span>
          <Icon name="ChevronDown" size={20} style={{ color: "var(--brand-orange)" }} />
        </div>
      </section>

      {/* AUCTION */}
      <section id="auction" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,107,0,0.3) 50px, rgba(255,107,0,0.3) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,107,0,0.3) 50px, rgba(255,107,0,0.3) 51px)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-line text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#FF6B00" }}>Как мы работаем</p>
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold mb-6">
                ПОДБОР<br />С <span className="text-gradient">АУКЦИОНОВ</span>
              </h2>
              <p className="mb-8 leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
                Мы работаем напрямую с японскими аукционами USS, TAA, JU и корейскими площадками. Вы видите реальные лоты, реальные фото и актуальные цены — без посредников и накруток.
              </p>
              <div className="space-y-3 mb-8">
                {["Доступ к 200 000+ лотов ежемесячно", "Фото и видео осмотр каждого авто", "Проверка истории ДТП и пробега", "Торги в режиме реального времени"].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,107,0,0.2)" }}>
                      <Icon name="Check" size={12} style={{ color: "#FF6B00" }} />
                    </div>
                    <span className="text-sm" style={{ color: "var(--brand-text-muted)" }}>{item}</span>
                  </div>
                ))}
              </div>
              <button className="px-6 py-3 rounded-xl text-sm btn-primary">Смотреть текущие лоты</button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,107,0,0.2)" }}>
                <img src={AUCTION_IMG} alt="Аукцион" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-xl px-5 py-4 card-dark glow-orange-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(255,107,0,0.2)" }}>
                    <Icon name="TrendingUp" size={20} style={{ color: "#FF6B00" }} />
                  </div>
                  <div>
                    <div className="text-xs" style={{ color: "var(--brand-text-muted)" }}>Экономия vs дилер</div>
                    <div className="font-oswald text-xl text-gradient font-bold">до 40%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20" style={{ background: "var(--brand-dark-2)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#FF6B00" }}>Простой процесс</p>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold">КАК ЭТО <span className="text-gradient">РАБОТАЕТ</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <div key={step.num} className="relative p-6 rounded-2xl group hover:border-orange-500/40 transition-all duration-300"
                style={{ background: "var(--brand-dark-3)", border: "1px solid rgba(255,107,0,0.1)" }}>
                <div className="font-oswald text-5xl font-bold mb-4 leading-none"
                  style={{ color: "rgba(255,107,0,0.15)", WebkitTextStroke: "1px rgba(255,107,0,0.2)" } as React.CSSProperties}>
                  {step.num}
                </div>
                <h3 className="font-oswald text-lg font-semibold mb-2 uppercase tracking-wide text-white group-hover:text-orange-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>{step.desc}</p>
                {i % 3 !== 2 && i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10" style={{ color: "rgba(255,107,0,0.3)" }}>
                    <Icon name="ChevronRight" size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <p className="section-line text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#FF6B00" }}>Доступные авто</p>
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold">КАТАЛОГ <span className="text-gradient">АВТОМОБИЛЕЙ</span></h2>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["все", "Япония", "Корея", "Китай"].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === tab ? "btn-primary" : "btn-outline"}`}>
                  {tab !== "все" && COUNTRY_FLAGS[tab]} {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car, i) => (
              <div key={i} className="rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2"
                style={{ background: "var(--brand-dark-2)", border: "1px solid rgba(255,107,0,0.1)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,107,0,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,107,0,0.1)")}>
                <div className="relative h-48 overflow-hidden">
                  <img src={car.img} alt={car.model} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,12,10,0.8) 0%, transparent 60%)" }} />
                  <div className={`absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-semibold border ${countryColors[car.country]}`}>
                    {COUNTRY_FLAGS[car.country]} {car.country}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-oswald text-lg font-semibold text-white">{car.brand} {car.model}</h3>
                  <p className="text-xs mt-0.5" style={{ color: "var(--brand-text-muted)" }}>{car.year} · {car.mileage} км · {car.fuel}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "var(--brand-text-muted)" }}>Под ключ от</div>
                      <div className="font-oswald text-xl text-gradient font-bold">{car.price} ₽</div>
                    </div>
                    <button className="px-4 py-2 rounded-lg text-xs btn-primary">Подробнее</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-8 py-4 rounded-xl btn-outline text-base">Смотреть все автомобили</button>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-20 relative" style={{ background: "var(--brand-dark-2)" }}>
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,107,0,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#FF6B00" }}>Онлайн-расчёт</p>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold mb-4">КАЛЬКУЛЯТОР <span className="text-gradient">СТОИМОСТИ</span></h2>
            <p className="max-w-xl mx-auto" style={{ color: "var(--brand-text-muted)" }}>
              Рассчитайте итоговую стоимость с учётом доставки, таможни и оформления документов
            </p>
          </div>
          <div className="max-w-5xl mx-auto rounded-2xl p-8" style={{ background: "var(--brand-dark-3)", border: "1px solid rgba(255,107,0,0.15)" }}>
            <Calculator />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#FF6B00" }}>Что мы делаем</p>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold">НАШИ <span className="text-gradient">УСЛУГИ</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <div key={i} className="p-6 rounded-2xl group transition-all duration-300"
                style={{ background: "var(--brand-dark-2)", border: "1px solid rgba(255,107,0,0.08)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,107,0,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,107,0,0.08)")}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "linear-gradient(135deg, rgba(255,107,0,0.2), rgba(255,107,0,0.1))", border: "1px solid rgba(255,107,0,0.2)" }}>
                  <Icon name={s.icon} size={22} style={{ color: "#FF6B00" }} />
                </div>
                <h3 className="font-oswald text-lg font-semibold mb-2 uppercase tracking-wide text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 relative overflow-hidden" style={{ background: "var(--brand-dark-2)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,107,0,0.2)" }}>
                <img src={PORT_IMG} alt="Порт" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl flex flex-col items-center justify-center text-center glow-orange"
                style={{ background: "linear-gradient(135deg, #FF6B00, #FF8C33)" }}>
                <span className="font-oswald text-3xl font-bold text-black">8</span>
                <span className="text-xs font-semibold text-black/80">ЛЕТ</span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="section-line text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#FF6B00" }}>О компании</p>
              <h2 className="font-oswald text-4xl sm:text-5xl font-bold mb-6">
                НАДЁЖНЫЙ<br /><span className="text-gradient">ПАРТНЁР</span><br />ПО ИМПОРТУ
              </h2>
              <p className="mb-6 leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>
                С 2016 года мы помогаем клиентам по всей России приобретать автомобили из Японии, Кореи и Китая по выгодным ценам. Работаем прозрачно: вы видите каждый шаг сделки.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[["500+", "Довольных клиентов"], ["98%", "Сделок завершено"], ["30 дней", "Средний срок"], ["0 руб.", "Скрытых платежей"]].map(([num, label]) => (
                  <div key={label} className="p-4 rounded-xl" style={{ background: "var(--brand-dark-3)", border: "1px solid rgba(255,107,0,0.1)" }}>
                    <div className="font-oswald text-2xl font-bold text-gradient">{num}</div>
                    <div className="text-xs mt-1" style={{ color: "var(--brand-text-muted)" }}>{label}</div>
                  </div>
                ))}
              </div>
              <button className="px-6 py-3 rounded-xl text-sm btn-primary">Узнать больше о нас</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0f05, #2d1a08)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(255,107,0,0.15), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(255,107,0,0.08), transparent 60%)" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold mb-4">
            ГОТОВЫ НАЙТИ <span className="text-gradient">ИДЕАЛЬНОЕ АВТО?</span>
          </h2>
          <p className="mb-8 text-lg" style={{ color: "var(--brand-text-muted)" }}>Оставьте заявку и мы свяжемся с вами в течение 30 минут</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input type="tel" placeholder="+7 (___) ___-__-__"
              className="flex-1 px-5 py-3.5 rounded-xl text-sm border focus:outline-none focus:border-orange-500 transition-colors"
              style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,107,0,0.3)", color: "var(--brand-text)" }} />
            <button className="px-8 py-3.5 rounded-xl text-sm btn-primary whitespace-nowrap glow-orange-sm">
              Оставить заявку
            </button>
          </div>
          <p className="text-xs mt-4" style={{ color: "var(--brand-text-muted)" }}>Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20" style={{ background: "var(--brand-dark)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="section-line text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "#FF6B00" }}>Связаться с нами</p>
              <h2 className="font-oswald text-4xl font-bold mb-6">КОНТАКТЫ</h2>
              <p className="mb-8" style={{ color: "var(--brand-text-muted)" }}>Работаем по всей России. Офисы в Москве и Владивостоке.</p>
              <div className="space-y-4">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (800) 555-00-00" },
                  { icon: "MessageCircle", label: "WhatsApp / Telegram", value: "+7 (999) 123-45-67" },
                  { icon: "Mail", label: "Email", value: "info@japanauto.ru" },
                  { icon: "MapPin", label: "Офис Москва", value: "ул. Автомобильная, 1, БЦ «Мотор»" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)" }}>
                      <Icon name={icon} size={18} style={{ color: "#FF6B00" }} />
                    </div>
                    <div>
                      <div className="text-xs mb-0.5" style={{ color: "var(--brand-text-muted)" }}>{label}</div>
                      <div className="font-medium text-white">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl p-8" style={{ background: "var(--brand-dark-2)", border: "1px solid rgba(255,107,0,0.15)" }}>
              <h3 className="font-oswald text-xl font-semibold mb-6 uppercase text-white">Написать нам</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: "var(--brand-text-muted)" }}>Имя</label>
                    <input type="text" placeholder="Иван"
                      className="w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:border-orange-500 transition-colors"
                      style={{ background: "var(--brand-dark-3)", borderColor: "rgba(255,107,0,0.2)", color: "var(--brand-text)" }} />
                  </div>
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: "var(--brand-text-muted)" }}>Телефон</label>
                    <input type="tel" placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:border-orange-500 transition-colors"
                      style={{ background: "var(--brand-dark-3)", borderColor: "rgba(255,107,0,0.2)", color: "var(--brand-text)" }} />
                  </div>
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--brand-text-muted)" }}>Интересует</label>
                  <select className="w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:border-orange-500 transition-colors"
                    style={{ background: "var(--brand-dark-3)", borderColor: "rgba(255,107,0,0.2)", color: "var(--brand-text)" }}>
                    <option>Подбор с аукциона</option>
                    <option>Авто из каталога</option>
                    <option>Таможенное оформление</option>
                    <option>Доставка по России</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--brand-text-muted)" }}>Сообщение</label>
                  <textarea rows={3} placeholder="Расскажите подробнее о ваших пожеланиях..."
                    className="w-full px-4 py-3 rounded-lg text-sm border focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    style={{ background: "var(--brand-dark-3)", borderColor: "rgba(255,107,0,0.2)", color: "var(--brand-text)" }} />
                </div>
                <button className="w-full py-3.5 rounded-xl text-sm btn-primary">Отправить сообщение</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ background: "var(--brand-dark-2)", borderTop: "1px solid rgba(255,107,0,0.1)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #FF6B00, #FF8C33)" }}>
                  <Icon name="Car" size={15} />
                </div>
                <span className="font-oswald text-lg tracking-widest text-white">JAPAN<span className="text-gradient">AUTO</span></span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--brand-text-muted)" }}>Импорт автомобилей из Японии, Кореи и Китая с 2016 года.</p>
            </div>
            {[
              { title: "Разделы", links: ["Аукционы", "Каталог", "Калькулятор", "Услуги"] },
              { title: "Компания", links: ["О нас", "Блог", "Отзывы", "Вакансии"] },
              { title: "Поддержка", links: ["Контакты", "FAQ", "Политика", "Условия"] },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4 className="font-oswald text-sm uppercase tracking-widest mb-4 text-white">{title}</h4>
                <ul className="space-y-2">
                  {links.map(l => (
                    <li key={l}><a href="#" className="text-sm transition-colors hover:text-orange-400" style={{ color: "var(--brand-text-muted)" }}>{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 gap-4" style={{ borderTop: "1px solid rgba(255,107,0,0.08)" }}>
            <p className="text-xs" style={{ color: "var(--brand-text-muted)" }}>© 2024 JapanAuto. Все права защищены.</p>
            <div className="flex gap-4">
              {["Telegram", "VK", "YouTube"].map(s => (
                <a key={s} href="#" className="text-xs transition-colors hover:text-orange-400" style={{ color: "var(--brand-text-muted)" }}>{s}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;