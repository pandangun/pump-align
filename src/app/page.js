/* app/page.js — Главная */
import Link from "next/link";
import Script from "next/script";

/* ====== SEO ====== */
export const metadata = {
  title:
    "ЛНК — вибродиагностика, лазерная центровка валов, балансировка | Протокол в день работ",
  description:
    "Лаборатория ЛНК выполняет вибродиагностику, лазерную центровку валов и балансировку. Работаем по ГОСТ/ISO, выезд по всей России. Протоколы и рекомендации — в день работ. 20+ лет практики.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "ЛНК — вибродиагностика, центровка валов и балансировка | ГОСТ/ISO, 20+ лет опыта",
    description:
      "Диагностика без остановки процесса. Лазерная центровка валов, устранение «мягкой лапы», динамическая и статическая балансировка. Протоколы и рекомендации в день работ.",
    url: "https://example.com/",
    siteName: "ЛНК",
    locale: "ru_RU",
    type: "website",
  },
};

const PHONE_TEL = "+78129005051";
const PHONE_HUMAN = "8 (812) 900-50-51";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* ====== HERO ====== */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-20 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Лаборатория ЛНК — вибродиагностика, центровка и балансировка
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-slate-300 text-base sm:text-lg">
            Неразрушающий контроль состояния машин без остановки процесса.
            Устраняем «мягкую лапу», выполняем{" "}
            <strong className="text-white">лазерную центровку валов</strong>,{" "}
            <strong className="text-white">балансировку</strong> и выдаём
            протокол со спектральным анализом. Работаем по ГОСТ/ISO. Инженеры с
            опытом 20+ лет.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/services"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              Посмотреть услуги
            </Link>
            <Link
              href="/contacts"
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-blue-700 font-semibold shadow hover:shadow-md"
            >
              Оставить заявку
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-400">
            Выезд по всей России • Протокол в день работ • Гарантия качества
          </p>
          <p className="mt-1 text-sm">
            Телефон:{" "}
            <a className="text-blue-400 font-semibold" href={`tel:${PHONE_TEL}`}>
              {PHONE_HUMAN}
            </a>
          </p>
        </div>
      </section>

      {/* ====== Бейджи доверия / логотипы ====== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {["ГОСТ", "ISO", "20+ лет", "Протокол в день"].map((t) => (
            <div
              key={t}
              className="rounded-xl border bg-white p-4 shadow-sm text-sm font-semibold text-slate-700"
            >
              {t}
            </div>
          ))}
        </div>
      </section>

      {/* ====== Краткие услуги ====== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-700">
          Что мы делаем
        </h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Полный цикл работ: <strong>вибродиагностика</strong>,{" "}
          <strong>лазерная центровка валов</strong>,{" "}
          <strong>балансировка</strong>,{" "}
          <strong>визуально-измерительный и капиллярный контроль</strong>.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Вибродиагностика",
              d: "Спектральный анализ, выявление >100 типов дефектов. Без остановки процесса.",
              href: "/services#vibro",
            },
            {
              t: "Центровка валов",
              d: "Лазерные измерения, устранение soft foot, шимы, контрольный замер, протокол.",
              href: "/services#align",
            },
            {
              t: "Балансировка",
              d: "Статическая и динамическая. Устраняем колебания и износ. На месте эксплуатации.",
              href: "/services#balance",
            },
          ].map((c, i) => (
            <article
              key={i}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-slate-700">{c.d}</p>
              <Link
                href={c.href}
                className="mt-4 inline-block text-blue-700 font-semibold"
              >
                Подробнее →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-blue-50 px-6 py-6 text-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm sm:text-base">
            Нужен быстрый бриф и расчёт сметы? Ответьте на 5–7 вопросов — мы
            предложим решение и сроки.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            {PHONE_HUMAN}
          </a>
        </div>
      </section>

      {/* ====== Отрасли / где применяем ====== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Где мы полезны</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Работаем с машзалом и вращающимися узлами предприятий: ТЭК, ГПА,
          металлургия, ГРП, горнодобыча, цемент, нефтехимия, пищевка,
          водоканалы, строительная техника и др.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {[
            "Насосы, вентиляторы, дымососы",
            "Компрессоры, турбины, турбокомпрессоры",
            "Редукторы, электродвигатели",
            "Дробилки, мельницы, конвейеры",
            "Краны и подъёмные механизмы",
            "Газоперекачивающие агрегаты (ГПА)",
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-xl border bg-white p-4 text-slate-700 shadow-sm"
            >
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* ====== Как работаем ====== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Как мы работаем</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            { n: "01", t: "Бриф", d: "Короткий опрос по агрегатам и доступу." },
            { n: "02", t: "Выезд", d: "Замеры, фотофиксация, консультация." },
            { n: "03", t: "Аналитика", d: "Обработка сигналов, спектры, выводы." },
            { n: "04", t: "Протокол", d: "Отчёт в день работ + рекомендации." },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-white p-6 shadow-sm text-center"
            >
              <div className="mx-auto w-12 h-12 grid place-items-center rounded-full bg-blue-600 text-white font-bold">
                {s.n}
              </div>
              <h3 className="mt-3 font-semibold">{s.t}</h3>
              <p className="mt-1 text-slate-700">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== Преимущества ====== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Почему ЛНК</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Опыт 20+ лет",
              d: "Экспертиза по промышленным агрегатам: от вентиляторов до турбин.",
            },
            {
              t: "ГОСТ/ISO",
              d: "Работаем по регламентам и нормативам. Протоколы принимают службы контроля.",
            },
            {
              t: "Сроки и прозрачность",
              d: "Фиксируем сроки и бюджет. Отчёт в день работ — без затяжек.",
            },
          ].map((b, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="font-semibold">{b.t}</h3>
              <p className="mt-2 text-slate-700">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ====== Отзывы (микро) ====== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Отзывы</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              q: "После центровки исчез перегрев муфты, вибрации в норме. Протокол в тот же день.",
              a: "Главный механик, завод стройматериалов",
            },
            {
              q: "Динамическая балансировка вентилятора снизила вибрацию с 10 до 2 мм/с — ушёл шум и вибронагрузка.",
              a: "Служба главного энергетика",
            },
            {
              q: "Диагностика выявила дефект подшипника на ранней стадии — успели заменить без аварии.",
              a: "НПЗ, компрессорная",
            },
          ].map((c, i) => (
            <blockquote
              key={i}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <p className="text-slate-800">“{c.q}”</p>
              <footer className="mt-3 text-sm text-slate-500">— {c.a}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ====== FAQ ====== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-12">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Частые вопросы</h2>
        <div className="mt-4 grid gap-3">
          {[
            {
              q: "Как быстро вы выезжаете?",
              a: "В среднем — на следующий день. Срочно — в день обращения (по согласованию).",
            },
            {
              q: "Можно ли работать без остановки агрегата?",
              a: "Да, для большинства задач замеры возможны на работающем оборудовании с соблюдением ТБ.",
            },
            {
              q: "Когда будет отчёт?",
              a: "Электронный протокол отправляем в день работ. Оригиналы с печатью — на следующий рабочий день.",
            },
          ].map((f, i) => (
            <details
              key={i}
              className="rounded-xl border bg-white p-4 shadow-sm"
            >
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <p className="mt-2 text-slate-700">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ====== Закрывающий CTA ====== */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-14">
        <div className="rounded-2xl bg-blue-600 text-white px-6 py-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold">
              Готовы снизить вибрации и вернуть агрегаты в норматив?
            </h3>
            <p className="mt-1 text-blue-100">
              Позвоните — обсудим задачу и согласуем удобное время выезда.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50"
            >
              {PHONE_HUMAN}
            </a>
            <Link
              href="/contacts"
              className="rounded-xl border border-blue-200 bg-blue-700 px-5 py-3 font-semibold hover:bg-blue-800"
            >
              Контакты
            </Link>
          </div>
        </div>
      </section>

      {/* ====== JSON-LD: Организация + Сайт + Основные услуги ====== */}
      <Script id="ld-org" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ЛНК",
          url: "https://example.com/",
          telephone: PHONE_TEL,
          areaServed: "RU",
          sameAs: [],
        })}
      </Script>
      <Script id="ld-website" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "ЛНК",
          url: "https://example.com/",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://example.com/search?q={query}",
            "query-input": "required name=query",
          },
        })}
      </Script>
      <Script id="ld-services" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            {
              "@type": "Service",
              position: 1,
              name: "Вибродиагностика",
              url: "https://example.com/services#vibro",
            },
            {
              "@type": "Service",
              position: 2,
              name: "Лазерная центровка валов",
              url: "https://example.com/services#align",
            },
            {
              "@type": "Service",
              position: 3,
              name: "Балансировка",
              url: "https://example.com/services#balance",
            },
          ],
        })}
      </Script>
    </main>
  );
}
