import "./globals.css";
import Navbar from "../components/navbar"; // путь к твоему файлу
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ЛНК • Вибродиагностика & Центровка",
  description:
    "Лаборатория ЛНК — вибродиагностика, балансировка и центровка оборудования. Работаем по ГОСТ. Опыт 20+ лет.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {/* фиксированная шапка (клиентский компонент) */}
        <Navbar />

        {/* отступ под фикс-меню, чтобы контент не прятался */}
        <main className="pt-16">{children}</main>

        {/* простой футер */}
        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} ЛНК — вибродиагностика, центровка, балансировка •{" "}
            <a className="text-blue-700 font-semibold" href="tel:+78129005051">
              8 (812) 900-50-51
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
