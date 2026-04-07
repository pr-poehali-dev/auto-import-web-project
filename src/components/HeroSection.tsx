import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/0ade45dc-e064-4b04-9176-e721bdc6711d/files/065ea01a-7480-4098-ba44-28ef03f62689.jpg";
const AUCTION_IMG = "https://cdn.poehali.dev/projects/0ade45dc-e064-4b04-9176-e721bdc6711d/files/6e163f50-0146-4acc-99bf-58b6636a208c.jpg";

const STEPS = [
  { num: "01", title: "Заявка", desc: "Оставляете пожелания: марка, модель, бюджет, страна происхождения." },
  { num: "02", title: "Подбор", desc: "Находим варианты на аукционах и согласовываем с вами." },
  { num: "03", title: "Выкуп", desc: "Участвуем в торгах, выкупаем и проводим предотгрузочную проверку." },
  { num: "04", title: "Доставка", desc: "Грузим на судно, страхуем, отслеживаем в реальном времени." },
  { num: "05", title: "Таможня", desc: "Оформляем все документы, платим пошлины, получаем ПТС." },
  { num: "06", title: "Получение", desc: "Выдаём авто в вашем городе. Полный пакет документов включён." },
];

export default function HeroSection() {
  return (
    <>
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
    </>
  );
}
