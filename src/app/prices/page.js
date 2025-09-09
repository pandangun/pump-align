/* app/prices/page.js */
import Script from "next/script";

export const metadata = {
  title: "Цены | ЛНК — вибродиагностика, центровка, балансировка",
  description:
    "Ориентировочные тарифы: вибродиагностика от 25 000 ₽/смена, центровка валов от 18 000 ₽ за агрегат, балансировка от 20 000 ₽ за точку. Точную смету рассчитаем после короткого брифа.",
  alternates: { canonical: "/prices" },
};

const PHONE_TEL = "+78129005051";
const PHONE_HUMAN = "8 (812) 900-50-51";

const offers = [
  {
    name: "Вибродиагностика",
    price: "от 25 000 ₽ / смена",
    note: "Сбор виброданных, спектральный анализ, рекомендации.",
  },
  {
    name: "Центровка валов",
    price: "от 18 000 ₽ за агрегат",
    note: "Лазерные измерения, корректировка, контрольный замер.",
  },
  {
    name: "Балансировка",
    price: "от 20 000 ₽ / точка",
    note: "Статическая/динамическая, расчет и установка корригирующих масс.",
  },
];

export default function PricesPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700">
          Цены
        </h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Ниже — ориентировочные тарифы. Точную стоимость рассчитаем после
          короткого брифа: тип оборудования, доступ, количество агрегатов,
          режим работы площадки и&nbsp;т.д.
        </p>

        {/* карточки тарифов */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {offers.map((o, i) => (
            <article
              key={i}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  💼
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{o.name}</h2>
                  <p className="mt-2 text-2xl font-extrabold text-slate-900">
                    {o.price}
                  </p>
                  <p className="mt-2 text-slate-700">{o.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA-полоска */}
        <div className="mt-8 rounded-2xl bg-blue-50 px-6 py-6 text-slate-800 shadow-sm">
          <p className="text-sm sm:text-base">
            Нужна точная смета? Позвоните — зададим 5–7 вопросов и отправим
            коммерческое предложение в течение 15–30 минут.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-3 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            {PHONE_HUMAN}
          </a>
        </div>
      </section>

      {/* Что входит / Условия */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Что входит</h3>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Выезд бригады с оборудованием (по согласованию — в смену/ночь)</li>
              <li>Измерения и наладка (вибродиагностика, центровка, балансировка)</li>
              <li>Протокол в электронном виде в день работ</li>
              <li>Оригиналы документов с печатью — курьером/почтой</li>
            </ul>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">Условия и доп.расходы</h3>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              <li>Выезд за пределы города/региона — по фактическим расходам</li>
              <li>Срочность (&lt; 24 ч) — +20–40% по согласованию</li>
              <li>Аренда спецтехники/допусков (при необходимости) — по факту</li>
              <li>Цены без НДС (если НДС нужен — укажем в КП)</li>
            </ul>
          </div>
        </div>

        {/* примечания */}
        <div className="mt-6 text-sm text-slate-500">
          * Итоговая стоимость зависит от типа агрегатов, количества единиц,
          трудоёмкости доступа, режима работ и требований по безопасности.
        </div>
      </section>

      {/* FAQ + микроразметка */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-14">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold">Частые вопросы по ценам</h2>
          <details className="mt-4 rounded-xl border bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-semibold">
              Можно ли получить скидку при большом объёме?
            </summary>
            <p className="mt-2">
              Да, при комплексных выездах и пакетных заказах мы применяем
              понижающие коэффициенты. Сообщите примерный объём — посчитаем.
            </p>
          </details>
          <details className="mt-3 rounded-xl border bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-semibold">
              Считаете ли вы командировочные?
            </summary>
            <p className="mt-2">
              Да, при выездах в другие регионы учитываются транспорт, проживание
              и суточные по факту. Эти строки прописываем в КП прозрачно.
            </p>
          </details>
          <details className="mt-3 rounded-xl border bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-semibold">
              Когда присылаете документы?
            </summary>
            <p className="mt-2">
              Электронные протоколы отправляем в день работ, бумажные с печатью —
              в ближайший рабочий день. По запросу — курьером.
            </p>
          </details>
        </div>
      </section>

      {/* JSON-LD OfferCatalog для сниппетов */}
      <Script id="ld-offers" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "OfferCatalog",
          name: "Цены ЛНК",
          url: "https://example.com/prices",
          itemListElement: offers.map((o) => ({
            "@type": "Offer",
            name: o.name,
            priceCurrency: "RUB",
            price: o.price.replace(/[^\d]/g, "") || "0",
            description: o.note,
            url: "https://example.com/prices",
            availability: "https://schema.org/InStock",
            seller: {
              "@type": "Organization",
              name: "ЛНК",
              telephone: PHONE_TEL,
            },
          })),
        })}
      </Script>
    </main>
  );
}
