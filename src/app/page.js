"use client";

export default function Home() {
  // плавный скролл по якорям
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-100 to-blue-50 text-gray-800">
      {/* ====== Навбар ====== */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-extrabold text-blue-700">ЛНК • Вибродиагностика & Центровка</div>
          <nav className="hidden md:flex gap-6 text-sm">
            <button onClick={() => scrollTo("home")} className="hover:text-blue-700">Главная</button>
            <button onClick={() => scrollTo("services")} className="hover:text-blue-700">Услуги</button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-blue-700">Цены</button>
            <button onClick={() => scrollTo("docs")} className="hover:text-blue-700">Документы</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-blue-700">Контакты</button>
          </nav>
          <a href="tel:+7XXXXXXXXXX" className="hidden sm:inline-block rounded-xl bg-blue-600 text-white px-4 py-2 font-semibold hover:bg-blue-700">
            +7 (___) ___-__-__
          </a>
        </div>
      </header>

      {/* ====== HERO ====== */}
      <section id="home" className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700">
          Лаборатория ЛНК — вибродиагностика, центровка и балансировка
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-4xl mx-auto">
          Неразрушающий контроль состояния машин без остановки процесса. Устраняем «мягкую лапу»,
          выполняем лазерную центровку валов, балансировку и выдаём протокол со спектральным анализом.
          Работаем по ГОСТ, современное оборудование, инженеры с опытом 20+ лет.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => scrollTo("services")} className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Посмотреть услуги
          </button>
          <button onClick={() => scrollTo("contact")} className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold shadow hover:shadow-md">
            Оставить заявку
          </button>
        </div>
        <p className="mt-6 text-sm text-gray-500">Выезд по всей России • Протокол в день работ • Гарантия качества</p>
      </section>

      {/* ====== УСЛУГИ ====== */}
      <section id="services" className="bg-white/70 border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-700 text-center">Наши услуги</h2>

          {/* Вибродиагностика */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Вибродиагностика</h3>
              <p className="mt-3">
                Метод НК, позволяющий оценить техническое состояние без остановки.
                Спектральный анализ выявляет &gt;100 типов дефектов: разбаланс, перекос, резонанс,
                дефекты подшипников, износ муфт, разуплотнения и др.
              </p>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Оборудование под давлением: котлы, бойлеры, экономайзеры, котлы-утилизаторы</li>
                <li>Газоснабжение: КС с центробежными нагнетателями, ГПА</li>
                <li>Подъёмные сооружения: электродвигатели, редукторы, шахтные подъёмные машины</li>
                <li>Горнорудная отрасль: дробилки, мельницы, редукторы, эл. двигатели</li>
                <li>Угольная отрасль: подъёмные машины, экскаваторы, дробилки, вентиляторы</li>
                <li>Нефтегаз: насосы, компрессоры, турбины, нагнетатели, дымососы, воздуходувки</li>
                <li>Металлургия: редукторы конвейеров, турбины, генераторы, насосы, вентиляторы</li>
                <li>Опасные производства: аммиачные ХУ, ЭТ-котлы, насосно-компрессорное</li>
                <li>Электроагрегаты, фундаменты и несущие конструкции</li>
              </ul>
              <p className="mt-3 text-sm text-gray-600">
                Результат: протокол со спектрами и контурной характеристикой, рекомендации по ремонту.
              </p>
            </div>

            {/* Центровка + Балансировка */}
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Лазерная центровка валов</h3>
                <p className="mt-3">
                  Выравнивание осей валов в допусках производителя/ISO. Устраняем «мягкую лапу»,
                  подбираем шимирующие пластины, подтверждаем результат контрольным замером.
                </p>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Этапы: подготовка → измерение → корректировка → контроль</li>
                  <li>Снижение вибрации, ресурсы подшипников и муфт ↑</li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold">Балансировка</h3>
                <p className="mt-3">
                  Устраняем неуравновешенность вращающихся частей (роторов, колес, шкивов).
                </p>
                <ul className="mt-3 list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>Динамическая: разность фаз на подшипниках ≤ 180°, коррекция в 2 плоскостях</li>
                  <li>Статическая: стабильная фаза на оборотной частоте, 1 плоскость коррекции</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ВИК / ПВК */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Визуально-измерительный контроль (ВИК)</h3>
              <p className="mt-3">
                «Входной фильтр» качества сварных соединений: выявление дефектов, имеющих выход на поверхность
                от ≈100 мкм. Проводится на этапах сборки и после сварки: геометрия, непровар, подрезы и т. п.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Капиллярный контроль (ПВК)</h3>
              <p className="mt-3">
                Обнаружение поверхностных и сквозных дефектов по капиллярному проникновению пенетранта
                и формированию индикаторного рисунка. Применяется к металлам, пластикам, керамике и др.
              </p>
              <p className="mt-2 text-sm text-gray-600">Очистка → нанесение пенетранта → удаление → проявление → оценка.</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button onClick={() => scrollTo("contact")} className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700">
              Получить консультацию
            </button>
          </div>
        </div>
      </section>

      {/* ====== ЦЕНЫ ====== */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-700 text-center">Цены</h2>
        <p className="mt-3 text-center text-gray-700">Итоговая стоимость зависит от типа агрегата, доступности и срочности.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { title: "Диагностика", price: "от 9 900 ₽", items: ["Осмотр, замеры вибраций", "Спектральный анализ", "Рекомендации"] },
            { title: "Центровка", price: "от 14 900 ₽", items: ["Устранение soft foot", "Лазерные измерения", "Протокол с допусками"] },
            { title: "Балансировка", price: "от 19 900 ₽", items: ["Статическая/динамическая", "Коррекция грузами/шимами", "Контрольный замер"] },
          ].map((p, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <div className="mt-3 text-2xl font-extrabold text-blue-700">{p.price}</div>
              <ul className="mt-4 list-disc list-inside text-sm text-gray-700 space-y-1">
                {p.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
              <button onClick={() => scrollTo("contact")} className="mt-6 w-full rounded-xl bg-blue-600 text-white py-3 font-semibold hover:bg-blue-700">
                Оставить заявку
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ====== ДОКУМЕНТЫ ====== */}
      <section id="docs" className="bg-white/70 border-y">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-bold text-blue-700 text-center">Документы и соответствие</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <ul className="rounded-2xl bg-white p-6 shadow-sm list-disc list-inside space-y-2">
              <li>Работы выполняются в соответствии с ГОСТ и ISO (по объектам и методам НК)</li>
              <li>Протокол измерений: спектры, контурная характеристика, выводы и рекомендации</li>
              <li>Сертифицированные инженеры, опыт работ &gt; 20 лет</li>
              <li>Новейшее высокоточное оборудование</li>
            </ul>
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold">Скачать</h3>
              <ul className="mt-3 list-disc list-inside text-blue-700">
                <li><a href="/docs/primer-protokola.pdf" target="_blank">Пример протокола (PDF)</a></li>
                <li><a href="/docs/licenses.zip" target="_blank">Лицензии и сертификаты (архив)</a></li>
                <li><a href="/docs/gost-list.pdf" target="_blank">Перечень применимых ГОСТ/ISO</a></li>
              </ul>
              <p className="mt-3 text-xs text-gray-500">Положи файлы в папку <code>public/docs/</code> и назови как в ссылках.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ====== КОНТАКТЫ ====== */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold text-blue-700 text-center">Контакты</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg">Лаборатория неразрушающего контроля «ЛНК»</p>
            <ul className="mt-4 space-y-2">
              <li>📞 <a className="hover:text-blue-700" href="tel:+7XXXXXXXXXX">+7 (___) ___-__-__</a></li>
              <li>✉️ <a className="hover:text-blue-700" href="mailto:info@lnk-lab.ru">info@lnk-lab.ru</a></li>
              <li>📍 Работаем по всей России</li>
            </ul>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget;
                const body = encodeURIComponent(
                  `Имя: ${f.name.value}\nТелефон: ${f.phone.value}\nСообщение: ${f.msg.value}`
                );
                window.location.href =
                  `mailto:info@lnk-lab.ru?subject=${encodeURIComponent("Заявка с сайта ЛНК")}&body=${body}`;
                f.reset();
              }}
              className="mt-6 bg-white rounded-2xl p-6 shadow-sm space-y-4"
            >
              <input name="name" className="w-full rounded-xl border px-4 py-3" placeholder="Ваше имя" />
              <input name="phone" className="w-full rounded-xl border px-4 py-3" placeholder="Телефон *" />
              <textarea name="msg" rows={4} className="w-full rounded-xl border px-4 py-3" placeholder="Коротко опишите задачу" />
              <button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                Отправить заявку
              </button>
              <p className="text-xs text-gray-500">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</p>
            </form>
          </div>

          {/* Карта (при желании заменишь на точный адрес) */}
          <div className="overflow-hidden rounded-2xl shadow-sm h-[340px]">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Russia&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ====== Футер ====== */}
      <footer className="text-center text-sm text-gray-500 py-8">
        © {new Date().getFullYear()} ЛНК — вибродиагностика, центровка, балансировка. Все права защищены.
      </footer>
    </main>
  );
}
