import Icon from "@/components/ui/icon";

const PORT_IMG = "https://cdn.poehali.dev/projects/0ade45dc-e064-4b04-9176-e721bdc6711d/files/c343b322-1d7c-4371-9189-b77b737a0c6c.jpg";

export default function FooterSection() {
  return (
    <>
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
    </>
  );
}
