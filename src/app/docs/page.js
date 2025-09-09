/* app/docs/page.js */
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Документы | ЛНК — протоколы, сертификаты, ГОСТ",
  description:
    "ЛНК предоставляет протоколы вибродиагностики со спектрами, протоколы центровки с контрольными замерами, протоколы балансировки с графиками, сертификаты соответствия ГОСТ/ISO.",
  alternates: { canonical: "/docs" },
};

const PHONE_HUMAN = "8 (812) 900-50-51";
const PHONE_TEL = "+78129005051";

// примеры файлов — можешь положить PDF в /public/docs/...
// и раскомментировать href у нужных пунктов
const docs = [
  {
    title: "Протокол вибродиагностики (пример)",
    desc: "Спектральный анализ, диаграммы, выводы и рекомендации.",
    // href: "/docs/sample-vibro.pdf",
  },
  {
    title: "Протокол центровки валов",
    desc: "Замер исходной несоосности, корректировка, контрольный замер.",
    // href: "/docs/sample-alignment.pdf",
  },
  {
    title: "Протокол балансировки",
    desc: "Графики виброскорости/ускорения, точки коррекции, остаточный дисбаланс.",
    // href: "/docs/sample-balance.pdf",
  },
  {
    title: "Сертификаты соответствия ГОСТ/ISO",
    desc: "Квалификация персонала и применяемого оборудования.",
    // href: "/docs/certificates.pdf",
  },
];

export default function DocsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700">
          Документы
        </h1>
        <p className="mt-4 max-w-3xl text-slate-700">
          Мы работаем в соответствии с действующими стандартами ГОСТ/ISO и
          предоставляем полный пакет документов по завершении работ. Ниже —
          перечень основных документов. По запросу вышлем{" "}
          <strong>образцы</strong> или подготовим пакет под тендер.
        </p>

        {/* список документов карточками */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {docs.map((d, i) => (
            <article
              key={i}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  📄
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{d.title}</h2>
                  <p className="mt-1 text-slate-700">{d.desc}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {d.href ? (
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener"
                        className="rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700"
                      >
                        Скачать PDF
                      </a>
                    ) : (
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="rounded-xl bg-blue-600 px-4 py-2 text-white font-semibold hover:bg-blue-700"
                      >
                        Запросить образец
                      </a>
                    )}

                    {/* Доп.ссылка: описание структуры */}
                    <Link
                      href="/contacts"
                      className="text-blue-700 font-semibold"
                    >
                      Задать вопрос →
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA-полоска */}
        <div className="mt-8 rounded-2xl bg-blue-50 px-6 py-6 text-slate-800 shadow-sm">
          <p className="text-sm sm:text-base">
            Нужен образец документа или пакет под тендер? Позвоните — подготовим
            за 15–30 минут и вышлем на почту.
          </p>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-3 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
          >
            {PHONE_HUMAN}
          </a>
        </div>
      </section>

      {/* FAQ (микроразметка FAQPage) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-14">
        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold">Частые вопросы по документам</h2>
          <details className="mt-4 rounded-xl border bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-semibold">
              Можно ли получить документы в день работ?
            </summary>
            <p className="mt-2">
              Да. Протоколы в электронном виде мы отправляем в день работ.
              Оригиналы с печатью — на следующий рабочий день или курьером.
            </p>
          </details>
          <details className="mt-3 rounded-xl border bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-semibold">
              Какие данные включает протокол вибродиагностики?
            </summary>
            <ul className="mt-2 list-disc pl-5">
              <li>диаграммы и спектры;</li>
              <li>измеренные уровни вибрации/ускорения;</li>
              <li>выявленные дефекты и вероятные причины;</li>
              <li>рекомендации по устранению и план работ.</li>
            </ul>
          </details>
          <details className="mt-3 rounded-xl border bg-white p-4 shadow-sm">
            <summary className="cursor-pointer font-semibold">
              Подходят ли ваши документы для промышленной безопасности?
            </summary>
            <p className="mt-2">
              Да, мы оформляем протоколы в соответствии с ГОСТ/ISO, учитывая
              требования промышленной безопасности для опасных производственных
              объектов.
            </p>
          </details>
        </div>
      </section>

      {/* JSON-LD FAQPage */}
      <Script id="ld-faq" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Можно ли получить документы в день работ?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Да. Протоколы в электронном виде отправляем в день работ. Оригиналы с печатью — на следующий рабочий день или курьером.",
              },
            },
            {
              "@type": "Question",
              name: "Какие данные включает протокол вибродиагностики?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Диаграммы и спектры, измеренные уровни вибрации/ускорения, выявленные дефекты и вероятные причины, рекомендации по устранению и план работ.",
              },
            },
            {
              "@type": "Question",
              name:
                "Подходят ли ваши документы для промышленной безопасности?",
              acceptedAnswer: {
                "@type": "Answer",
                text:
                  "Да, оформляем протоколы в соответствии с ГОСТ/ISO, учитывая требования промышленной безопасности для опасных производственных объектов.",
              },
            },
          ],
        })}
      </Script>
    </main>
  );
}
