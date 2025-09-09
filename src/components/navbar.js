"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
// если хочется подсветку активного пункта — раскомментируй 2 строки ниже
// import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  // const pathname = usePathname() || "/";
  const linkCls = (/* href */) =>
    // для версии с подсветкой замени строку ниже на шаблон с проверкой pathname === href
    "px-2 py-1 rounded-md transition text-slate-900 hover:text-blue-700";

  const Item = ({ href, children }) => (
    <Link href={href} onClick={close} className={linkCls(href)}>
      {children}
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white text-slate-900 shadow">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="font-extrabold text-blue-700" onClick={close}>
            ЛНК • Вибродиагностика & Центровка
          </Link>

          {/* Десктоп-меню */}
          <div className="hidden md:flex items-center gap-6">
            <Item href="/">Главная</Item>
            <Item href="/services">Услуги</Item>
            <Item href="/prices">Цены</Item>
            <Item href="/docs">Документы</Item>
            <Item href="/contacts">Контакты</Item>
            <a
              href="tel:+78129005051"
              className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              8 (812) 900-50-51
            </a>
          </div>

          {/* Бургер на мобилке */}
          <button
            className="md:hidden w-10 h-10 grid place-items-center rounded-lg border text-slate-900 hover:bg-slate-100"
            onClick={() => setIsOpen((v) => !v)}
            aria-label="Открыть меню"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col gap-3">
            <Item href="/">Главная</Item>
            <Item href="/services">Услуги</Item>
            <Item href="/prices">Цены</Item>
            <Item href="/docs">Документы</Item>
            <Item href="/contacts">Контакты</Item>
            <a
              href="tel:+78129005051"
              className="mt-1 px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold text-center hover:bg-blue-700"
              onClick={close}
            >
              8 (812) 900-50-51
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
