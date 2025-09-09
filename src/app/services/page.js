/* app/services/page.js */
import Script from "next/script";

export const metadata = {
  title:
    "Услуги | ЛНК — вибродиагностика, лазерная центровка валов, балансировка, ВИК/ПВК",
  description:
    "Полный цикл работ: вибродиагностика, лазерная центровка валов, статическая и динамическая балансировка, визуально-измерительный и капиллярный контроль. Протокол в день работ.",
  alternates: { canonical: "/services" },
};

const PHONE_TEL = "+78129005051";
const PHONE_HUMAN = "8 (812) 900-50-51";

const services = [
  {
    id: "vibro",
    name: "Вибродиагностика",
    excerpt:
      "Без остановки процесса: замеры, спектральный анализ, выявление >100 типов дефектов, рекомендации.",
    bullets: [
      "Диагностика подшипников, несоосности, дисбаланса, резонансов",
      "Спектры/ОБЧ/временные формы, орбиты",
      "Отчёт с графиками и листом рекомендаций",
    ],
  },
  {
    id: "align",
    name: "Лазерная центровка валов",
    excerpt:
      "Выравнивание осей в допусках ISO/ГОСТ. Устраняем «мягкую лапу», подбираем шим-комплекты, делаем контрольный замер.",
    bullets: [
      "Лазерные системы измерения, отчётность",
      "Установка/подбор регулировочных пластин",
      "Контрольный замер и протокол",
    ],
  },
  {
    id: "balance",
    name: "Балансировка",
    excerpt:
      "Статическая и динамическая балансировка. Устраняем опасные колебания, снижаем износ и шум.",
    bullets: [
      "На месте эксплуатации или на стенде (по запросу)",
      "Расчёт и установка корригирующих масс",
      "Снижение вибрации в допуски",
    ],
  },
  {
    id: "ndt",
    name: "ВИК и ПВК",
    excerpt:
      "Визуально-измерительный контроль + капиллярный (пенетрантный). Обнаружение поверхностных дефектов от 100 мкм.",
    bullets: [
      "Контроль сварных соединений, литья, деталей",
      "Подготовка поверхности, нанесение пенетранта",
      "Отчёт с фотофиксацией дефектов",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700">
          Наши услуги
        </h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Лаборатория ЛНК выполняет полный цикл работ:{" "}
          <strong>вибродиагностика</strong>,{" "}
          <strong>лазерная центровка валов</strong>,{" "}
          <strong>балансировка</strong>,{" "}
          <strong>визуально-измерительный и капиллярный контроль</strong>.
          Работаем по ГОСТ/ISO, выезжаем по всей России, выдаём протоколы в день
          работ.
        </p>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.id}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold">{s.name}</h2>
              <p className="mt-2 text-slate-700">{s.excerpt}</p>
              <ul className="mt-3 space-y-1 list-disc pl-5 text-slate-700">
                {s.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <a
                href={`#${s.id}`}
                className="mt-4 inline-block text-blue-700 font-semibold"
              >
                Подробнее →
              </a>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 rounded-2xl bg-blue-50 px-6 py-6 text-slate-800 shadow-sm">
          <p className="text-sm sm:text-base">
            Нужна консультация инженера или быстрый выезд? Задайте 5–7 вопросов
            — и мы сразу предложим решение и сроки.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-3 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            {PHONE_HUMAN}
          </a>
        </div>
      </section>

      {/* Детальные блоки по услугам */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-12 space-y-10">
        {/* Вибродиагностика */}
        <ServiceBlock
          id="vibro"
          title="Вибродиагностика"
          lead="Оцениваем техническое состояние агрегатов без остановки процесса: машзалы, насосные, компрессорные, вентиляторные установки, редукторы и др."
          includes={[
            "Сбор вибросигналов (шум/виброскорость/виброускорение)",
            "Спектральный анализ, временные формы, орбиты",
            "Выявление >100 видов дефектов по признакам",
            "Рекомендации по ремонту и режимам эксплуатации",
          ]}
          deliver={[
            "Протокол с графиками и комментариями",
            "Перечень выявленных дефектов и приоритетов",
            "Рекомендации и контрольный перечень действий",
          ]}
        />

        {/* Центровка */}
        <ServiceBlock
          id="align"
          title="Лазерная центровка валов"
          lead="Выставляем соосность вращающихся узлов в допусках ISO/ГОСТ. Устраняем «мягкую лапу», подбираем шим-комплекты."
          includes={[
            "Лазерные измерения параллельного/углового смещения",
            "Подбор и установка регулировочных пластин",
            "Контрольный замер после корректировок",
          ]}
          deliver={[
            "Отчёт с исходными и итоговыми значениями",
            "Рекомендации по креплению и эксплуатации",
            "Протокол центрировки с фотофиксацией (по запросу)",
          ]}
        />

        {/* Балансировка */}
        <ServiceBlock
          id="balance"
          title="Балансировка"
          lead="Снижаем вибрации до нормативов: статическая и динамическая балансировка на месте эксплуатации."
          includes={[
            "Определение величины и фазы дисбаланса",
            "Расчёт и установка корригирующих масс",
            "Контрольные замеры после корректировок",
          ]}
          deliver={[
            "Протокол с исходными и итоговыми графиками",
            "Рекомендации по режимам и закреплению",
          ]}
        />

        {/* ВИК/ПВК */}
        <ServiceBlock
          id="ndt"
          title="ВИК и ПВК"
          lead="Визуально-измерительный контроль + капиллярный метод для выявления поверхностных дефектов от 100 мкм."
          includes={[
            "Подготовка поверхности, нанесение пенетранта",
            "Выдержка, проявитель, фиксация индикаторных рисунков",
            "Измерения, фото- и видеофиксация",
          ]}
          deliver={[
            "Отчёт/заключение с дефектограммами",
            "Рекомендации по устранению дефектов",
          ]}
        />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-14">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold">Частые вопросы</h2>
          <details className="mt-4 rounded-xl border bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-semibold">
              Сколько времени занимает выезд?
            </summary>
            <p className="mt-2">
              Как правило, от 2 до 8 часов на объект в зависимости от количества
              агрегатов и доступности. Срочные выезды возможны в день обращения.
            </p>
          </details>
          <details className="mt-3 rounded-xl border bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-semibold">
              Вы работаете по всей России?
            </summary>
            <p className="mt-2">
              Да, выезжаем в любой регион. Командировочные и логистика
              рассчитываются прозрачно по факту.
            </p>
          </details>
          <details className="mt-3 rounded-xl border bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-semibold">
              Когда будет протокол?
            </summary>
            <p className="mt-2">
              Электронный протокол отправляем в день работ. Оригиналы с печатью
              — на следующий рабочий день курьером/почтой.
            </p>
          </details>
        </div>
      </section>

      {/* JSON-LD Service List */}
      <Script id="ld-services" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, idx) => ({
            "@type": "Service",
            position: idx + 1,
            name: s.name,
            description: s.excerpt,
            areaServed: { "@type": "Country", name: "Russia" },
            provider: {
              "@type": "Organization",
              name: "ЛНК",
              telephone: PHONE_TEL,
            },
            url: `https://example.com/services#${s.id}`,
          })),
        })}
      </Script>
    </main>
  );
}

/** Reusable block */
function ServiceBlock({ id, title, lead, includes, deliver }) {
  return (
    <article id={id} className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-slate-700">{lead}</p>

      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border bg-white p-4">
          <h3 className="font-semibold">Что делаем</h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            {includes.map((i, k) => (
              <li key={k}>{i}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border bg-white p-4">
          <h3 className="font-semibold">Что вы получаете</h3>
          <ul className="mt-2 list-disc pl-5 text-slate-700 space-y-1">
            {deliver.map((i, k) => (
              <li key={k}>{i}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={`tel:${PHONE_TEL}`}
          className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          {PHONE_HUMAN}
        </a>
        <a
          href="/prices"
          className="rounded-xl border border-blue-200 bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50"
        >
          Смотреть цены
        </a>
      </div>
    </article>
  );
}
