import { useState } from "react";
import Icon from "@/components/ui/icon";

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

export default function CatalogSection() {
  const [activeTab, setActiveTab] = useState("все");

  const filteredCars = activeTab === "все" ? CATALOG_CARS : CATALOG_CARS.filter(c => c.country === activeTab);

  return (
    <>
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
    </>
  );
}
