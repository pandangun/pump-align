/* app/contacts/page.js */
import Script from "next/script";

export const metadata = {
  title: "Контакты | ЛНК — вибродиагностика, центровка, балансировка",
  description:
    "Контакты лаборатории ЛНК: телефон 8 (812) 900-50-51, Санкт-Петербург, ул. Шпалерная, д. 24. Работаем по всей России. Выезд, консультации, протоколы по ГОСТ.",
  alternates: { canonical: "/contacts" },
};

const PHONE_HUMAN = "8 (812) 900-50-51";
const PHONE_TEL = "+78129005051";
const EMAIL = "edu@vibro-laser.com";
const ADDRESS = "Санкт-Петербург, ул. Шпалерная, д. 24";

// Гугл-карта по адресу (без ключей): просто встраиваемый поиск
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  ADDRESS
)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

export default function ContactsPage() {
  return (
    <main className="bg-white text-slate-900">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700">
          Контакты
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* ЛЕВАЯ КОЛОНКА — контакты */}
          <div className="space-y-5">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-700">📞</span>
                  <p>
                    Телефон:{" "}
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="font-semibold text-blue-700 hover:underline"
                    >
                      {PHONE_HUMAN}
                    </a>
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-700">✉️</span>
                  <p>
                    Email:{" "}
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-semibold text-blue-700 hover:underline break-all"
                    >
                      {EMAIL}
                    </a>
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-700">📍</span>
                  <p>
                    Адрес:{" "}
                    <span className="font-medium">{ADDRESS}</span>
                  </p>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 text-blue-700">🕘</span>
                  <p>
                    Время работы: пн-пт 9:00–18:00 (Мск). Выезд и консультации —
                    по договоренности.
                  </p>
                </li>
              </ul>
            </div>

            {/* CTA полоса */}
            <div className="rounded-2xl bg-blue-50 p-6 text-slate-800 shadow-sm">
              <p className="text-sm sm:text-base">
                Мы работаем по всей России. Позвоните — поможем с диагностикой,
                центровкой и балансировкой на ваших объектах.
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="mt-3 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              >
                {PHONE_HUMAN}
              </a>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА — карта */}
          <div className="rounded-2xl border bg-white p-2 shadow-sm">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
              <iframe
                title="Карта — ЛНК"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
            <p className="px-3 pb-3 pt-4 text-sm text-slate-500">
              Для очной встречи просьба согласовать время по телефону.
            </p>
          </div>
        </div>
      </section>

      {/* SEO-текст */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 pb-14">
        <div className="prose prose-slate max-w-none prose-p:leading-relaxed">
          <h2 className="text-2xl font-bold">Почему нас выбирают</h2>
          <p>
            Лаборатория неразрушающего контроля «ЛНК» выполняет{" "}
            <strong>вибродиагностику</strong>,{" "}
            <strong>лазерную центровку валов</strong> и{" "}
            <strong>балансировку</strong> на промышленном оборудовании. Работаем
            по ГОСТ/ISO, оформляем протоколы с графиками и спектрами.
          </p>
          <p>
            Выезжаем на площадки по всей России: ТЭЦ, ГПА, насосные, ГРС,
            металлургия, ГХК и др. Используем современное измерительное
            оборудование, устраняем «мягкую лапу», подбираем шимы, выполняем
            контрольный замер и передаём результаты в день работ.
          </p>
          <p className="text-slate-500">
            Нужна консультация по допускам, нестандартной муфте или подготовке к
            ППР? Звоните — поможем подобрать оптимальный план работ и
            документацию.
          </p>
        </div>
      </section>

      {/* JSON-LD микроразметка LocalBusiness */}
      <Script id="ld-localbusiness" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "ЛНК — вибродиагностика, центровка, балансировка",
          telephone: PHONE_TEL,
          email: EMAIL,
          address: {
            "@type": "PostalAddress",
            streetAddress: "ул. Шпалерная, д. 24",
            addressLocality: "Санкт-Петербург",
            addressCountry: "RU",
          },
          url:
            typeof window !== "undefined"
              ? window.location.origin + "/contacts"
              : "https://example.com/contacts",
          areaServed: "RU",
          openingHours: ["Mo-Fr 09:00-18:00"],
        })}
      </Script>
    </main>
  );
}
